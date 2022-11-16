import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Servico from '../../../models/Servico';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';


function ListaServico() {
    const [servicos, setServicos] = useState<Servico[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useNavigate();

    useEffect(() => {
        if (token == "") {
            toast.error("Você precisa estar logado!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history("/login")

        }
    }, [token])

    async function getServico() {
        await busca("/servicos", setServicos, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getServico()
    }, [servicos.length])


    return (
        <>
            {servicos.map(servico => (
                <Box m={2} >
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Postagens
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {servico.titulo}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {servico.descricao}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {servico.valor}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {servico.categoria?.tipo}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5}>

                                <Link to={`/formularioServico/${servico.id}`} className="text-decorator-none" >
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                            atualizar
                                        </Button>
                                    </Box>
                                </Link>
                                <Link to={`/deletarServico/${servico.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" size='small' color="secondary">
                                            deletar
                                        </Button>
                                    </Box>
                                </Link>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>
            ))}
        </>
    )
}

export default ListaServico