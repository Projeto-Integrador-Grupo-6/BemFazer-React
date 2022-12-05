import React, { useState, useEffect, ChangeEvent } from "react";
import { Grid, Typography, TextField, Button, Select } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { Box, FormControl, FormHelperText, InputLabel, MenuItem } from "@mui/material";
import { cadastroUsuario } from "../../services/Service";
import User from "../../models/User";
import "./CadastroUsuario.css";
import { toast } from "react-toastify";

function CadastroUsuario() {
  let history = useNavigate();

  const [confirmarSenha, setConfirmarSenha] = useState<String>("");
  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    email: "",
    senha: "",
    foto: "",
    tipoUser: "",
  });

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: "",
    email: "",
    senha: "",
    foto: "",
    tipoUser: "",
  });

  function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(event.target.value);
  }

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (confirmarSenha == user.senha) {
      try {
        await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
        toast.success("Usuário cadastrado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
        });
      } catch (error) {
        toast.error("Falha interna ao cadastrar!", {
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
    } else {
      toast.error(
        "Dados inconsistentes. Favor verificar as informações de cadastro!",
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
        }
      );

      setUser({ ...user, senha: "" });
      setConfirmarSenha("");
    }
  }
  useEffect(() => {
    if (userResult.id !== 0) {
      history("/login");
    }
  }, [userResult]);

  function selectTipo(event: ChangeEvent<any>) {
    setUser({
      ...user,
      tipoUser: event.target.value,
    });
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6} className="imagem2"></Grid>

      <Grid item xs={6} alignItems="center">
        <Box paddingX={10}>
          <div className="logo-login2">
            <img src="https://imgur.com/8jjQm8b.png" alt="" />
          </div>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h4"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textos2"
            >
              Cadastrar
            </Typography>

            <TextField
              value={user.nome}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              id="nome"
              label="Nome"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
              required
            />
            <TextField
              value={user.email}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              id="email"
              label="Email"
              variant="outlined"
              name="email"
              margin="normal"
              fullWidth
              required
              helperText='Insira um e-mail válido'
            />
            <TextField
              value={user.foto}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              id="foto"
              label="Url da foto"
              variant="outlined"
              name="foto"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.senha}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              id="senha"
              label="Senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
              required
              helperText='Sua senha deve conter no mínimo 8 caracteres'
            />
            <TextField
              value={confirmarSenha}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(event)
              }
              id="confirmarSenha"
              label="Confirmar Senha"
              variant="outlined"
              name="confirmarSenha"
              margin="normal"
              type="password"
              fullWidth
              required
            />

            {/*<TextField value={user.tipoUser} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id="tipoUser" label="Tipo Usuário" variant="outlined" name="tipoUser" margin="normal" fullWidth />*/}

            <FormControl fullWidth className="btn-tipo">

              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={user.tipoUser}
                onChange={selectTipo}
              >

                <MenuItem value="ong"></MenuItem>
                <MenuItem value="ong">ONG</MenuItem>
                <MenuItem value="voluntario">Voluntário</MenuItem>

              </Select>
              <FormHelperText>Escolha um perfil de usuário</FormHelperText>
            </FormControl>

            <Box marginTop={2} textAlign="center">
              <Link to="/login" className="text-decorator-none">
                <Button
                  type="submit"
                  variant="contained"
                  className="btn-cancelar"
                >
                  cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                variant="contained"
                className="btn-cadastrar"
              >
                cadastrar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastroUsuario;
