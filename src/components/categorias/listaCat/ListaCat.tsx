import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Categoria from '../../../models/Categoria';
import { busca } from '../../../services/Service';
import './ListaCat.css';

function ListaCat() { 
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [token, setToken] = useLocalStorage('token');
    let history = useNavigate();

    useEffect(() => {
        if (token == '') {
            alert("Você precisa estar logado")
            history("/login")
        }
    }, [token])

    async function getCategoria() {
        await busca("/categorias", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getCategoria()
    }, [categorias.length])

    return (
        <>{
            categorias.map(categoria => (
                <Box m={2} >
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Tipos de Ongs
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {categoria.tipo}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5} >

                                <Link to={`/formularioCategoria/${categoria.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                            atualizar
                                        </Button>
                                    </Box>
                                </Link>
                                <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
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
            ))
        }</>
    )
}

export default ListaCat