import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, Container, TextField, Typography } from '@material-ui/core'
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Categoria from '../../../models/Categoria';
import { buscaId, post, put } from '../../../services/Service';
import './CadastroCat.css';

function CadastroCat() {
    let history = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage('token');

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        tipo: ''
    })

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado!")
            history("/login")
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/categorias/${id}`, setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {

        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("categoria " + JSON.stringify(categoria))

        if (id !== undefined) {
            console.log(categoria)
            put(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Categoria atualizado com sucesso');
        } else {
            post(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Categoria cadastrado com sucesso');
        }
        back()
    }

    function back() {
        history('/categorias')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography
                    variant="h3"
                    color="textSecondary"
                    component="h1"
                    align="center"
                >
                    Formulário de cadastro de Categoria
                </Typography>
                <TextField
                    value={categoria.tipo}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)}
                    id="tipo"
                    label="Tipo de Ong"
                    variant="outlined"
                    name="tipo"
                    margin="normal"
                    fullWidth
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroCat
