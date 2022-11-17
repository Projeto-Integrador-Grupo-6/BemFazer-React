import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, Container, TextField, Typography } from '@material-ui/core'
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { buscaId, post, put } from '../../../services/Service';
import './CadastroCat.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import imgOng from '../../../assets/img1-ong.png'

function CadastroCat() {
  let history = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    tipo: ''
  })

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
      toast.success("Categoria atualizada com sucesso!", {
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
      post(`/categorias`, categoria, setCategoria, {
        headers: {
          'Authorization': token
        }
      })
      toast.success("Categoria cadastrada com sucesso!", {
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
    history('/categorias')
  }

  return (
    // <Container maxWidth="sm" className="topo">

    //   <form onSubmit={onSubmit}>
    //     <Typography
    //       variant="h3"
    //       color="textSecondary"
    //       component="h1"
    //       align="center"
    //     >
    //       Formulário de cadastro de Categoria
    //     </Typography>
    //     <TextField
    //       value={categoria.tipo}
    //       onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)}
    //       id="tipo"
    //       label="Tipo de Ong"
    //       variant="outlined"
    //       name="tipo"
    //       margin="normal"
    //       fullWidth
    //     />
    //     <Button
    //       type="submit"
    //       variant="contained"
    //       className='btn-final'
    //     >
    //       Finalizar
    //     </Button>
    //   </form>
    // </Container>
    <div className='container__ong'>
      <div className='sub__container'>
        <div className='block__left'>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
          <h5>Subtitulo Subtitulo Subtitulo Subtitulo</h5>

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
                label="Escreva sua Ong"
                variant="outlined"
                name="tipo"
                margin="normal"
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                className='btn-final'
              >
                Finalizar
              </Button>
            </form>
          </Container>
        </div>
        <img src={imgOng} alt='' className='ong__position' />
        <div className='block__right'>
          <img src='https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' />
        </div>
      </div>
    </div>

  )
}

export default CadastroCat
