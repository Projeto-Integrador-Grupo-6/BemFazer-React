import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Categoria from "../../../models/Categoria";
import { busca } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import "./ListaCat.css";

function ListaCat() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
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
      history("/login");
    }
  }, [token]);

  async function getCategoria() {
    await busca("/categorias", setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getCategoria();
  }, [categorias.length]);

  return (
    <>
      {categorias.length === 0 && (
        <div id="js-preloader2" className="js-preloader2">
          <div className="preloader-inner2">
            <span className="dot2"></span>
            <div className="dots2">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      )}

      {categorias.map((categoria) => (
        <Box m={2} className="box-card">
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
              <Box display="flex" justifyContent="flex-end" style={{marginLeft: '330px'}} mb={1.5}>
              <Link
                  to={`/deletarCategoria/${categoria.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      size="small"
                      color="secondary"
                      className="button-del"
                    >
                      deletar
                    </Button>
                  </Box>
                </Link>
                
                <Link
                  to={`/formularioCategoria/${categoria.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      className="marginLeft1"
                      size="small"
                      color="primary"
                    >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaCat;
