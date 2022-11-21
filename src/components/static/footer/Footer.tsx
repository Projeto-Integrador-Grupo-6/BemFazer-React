import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Typography, Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Footer.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";


function Footer() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  
  var footerComponent;
  
  if (token != '') {
    footerComponent =
    <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid alignItems="center" item xs={12}>
            <Box className="box1">
              <Box
                paddingTop={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography
                  variant="h5"
                  align="center"
                  gutterBottom
                  className="textos"
                >
                  Siga-nos nas redes sociais{" "}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="center">
                <a
                  href="https://github.com/Projeto-Integrador-Grupo-6"
                  target="_blank"
                  className="text-decorator-none"
                >
                  <GitHubIcon className="redes" />
                </a>
              </Box>
            </Box>
            <Box className="box2">
              <Box paddingTop={1}>
                <Typography
                  variant="subtitle2"
                  align="center"
                  gutterBottom
                  className="textos"
                >
                  © 2022 Copyright:
                </Typography>
              </Box>
              <Box>
                <a target="_blank" href="https://brasil.generation.org/" className="text-decorator-none">
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    className="textos"
                    align="center"
                  >
                    brasil.generation.org
                  </Typography>
                </a>
              </Box>
            </Box>
          </Grid>
        </Grid>
  }

  return (
    <>
      {footerComponent}
    </>
  );
}

export default Footer;
