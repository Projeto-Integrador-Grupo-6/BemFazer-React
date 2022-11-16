import { Button, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Categoria from '../../../models/Categoria';
import Servico from '../../../models/Servico';
import { busca, buscaId, post, put } from '../../../services/Service';

function DeletarServico(){
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )
    const [servico, setServico] = useState<Servico>()

    useEffect( () => {
        if (token === ""){
            alert("Você precisa estar logado !")
            history("/login")
        }
    },[token]);

    useEffect(() => {
        if (id !== undefined) {
            findByIdServico(id);
        }
    }, [id]);

    async function fidnById(id: string) {
        buscaId(`/servico/${id}`, setServico, {
            headers: {
                Authorization: token,
            },
        });
    }

    function sim() {
        navigate("/servico/all");
        deleteId(`/servicos/${id}`, {
            headers: {
                Authorization: token,
            },
        });
        alert("Servico deletado com sucesso!");

    } catch (error) {
        alert('Falha ao apagar o servico');
      }
    }
  
    function nao() {
      history('/servico');
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
                                {post?.titulo}
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