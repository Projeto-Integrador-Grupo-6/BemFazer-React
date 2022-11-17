import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Servico from '../../../models/Servico';
import { buscaId, deleteId } from '../../../services/Service';

function DeletarServico() {
    let history = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [servicos, setServicos] = useState<Servico>()
    const [token, setToken] = useLocalStorage('token');


    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado !")
            history("/login")
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            fidnById(id)
        }
    }, [id])

    async function fidnById(id: string) {
        buscaId(`/servicos/${id}`, setServicos, {
            headers: {
                Authorization: token,
            },
        });
    }

    function sim() {
        history("/home");
        deleteId(`/servicos/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        alert('Serviço deletado com sucesso');
    }

    function nao() {
        history('/servicos/all');
    }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar o Servico?
                            </Typography>
                            <Typography color="textSecondary">
                                {servicos?.titulo}
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
                            <Box mx={2}>
                                <Button
                                    onClick={sim}
                                    variant="contained"
                                    className="marginLeft"
                                    size="large"
                                    color="primary"
                                >
                                    Sim
                                </Button>
                            </Box>
                            <Box mx={2}>
                                <Button
                                    onClick={nao}
                                    variant="contained"
                                    size="large"
                                    color="secondary"
                                >
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}
export default DeletarServico;