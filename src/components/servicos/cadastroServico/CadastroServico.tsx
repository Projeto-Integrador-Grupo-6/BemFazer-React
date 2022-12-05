import { Button, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Categoria from '../../../models/Categoria';
import Servico from '../../../models/Servico';
import { busca, buscaId, post, put } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './CadastroServico.css';

function CadastroServico() {
    let history = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

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

    const [categoria, setCategoria] = useState<Categoria>(
        {
            id: 0,
            tipo: ''
        })

    const [servico, setServico] = useState<Servico>({
        id: 0,
        titulo: '',
        descricao: '',
        valor: '',
        data: '',
        categorias: null
    })

    useEffect(() => {
        setServico({
            ...servico,
            categorias: categoria
        })
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdServico(id)
        }
    }, [id])

    async function getCategorias() {
        await busca("/categorias", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdServico(id: string) {
        await buscaId(`servicos/${id}`, setServico, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedServico(e: ChangeEvent<HTMLInputElement>) {
        setServico({
            ...servico,
            [e.target.name]: e.target.value,
            categorias: categoria
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/servicos`, servico, setServico, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success("Serviço atualizado com sucesso!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            post(`/servicos`, servico, setServico, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success("Serviço cadastrado com sucesso!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
        back()
    }

    function back() {
        history('/servicos')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro serviço</Typography>
                <TextField value={servico.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedServico(e)} id="titulo" label="Título" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField value={servico.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedServico(e)} id="descricao" label="Descrição" name="descricao" variant="outlined" margin="normal" fullWidth />
                <TextField value={servico.valor} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedServico(e)} id="valor" label="Valor" name="valor" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tipo da Ong</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/categorias/${e.target.value}`, setCategoria, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            categorias.map(categoria => (
                                <MenuItem value={categoria.id}>{categoria.tipo}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um tipo para o serviço</FormHelperText>
                    <Button type="submit" variant="contained" className='btn-final'>
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroServico