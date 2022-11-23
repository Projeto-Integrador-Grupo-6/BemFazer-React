import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { Box, Icon } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";
import LocalMallIcon from '@mui/icons-material/LocalMall';

// const settings = ['Profile', 'Account', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const tipoUser = useSelector<TokenState, TokenState["tipoUser"]>(
    (state) => state.tipoUser
  );

  let navigate = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(""));
    toast("Usuário deslogado", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "light",
      progress: undefined,
    });
    navigate("/login");
  }

  var navbarComponent;

  if (token === "") {
    navbarComponent = <></>;
  } else {
    if (tipoUser === "ong") {
      navbarComponent = (
        <AppBar className="navbar" position="relative">
          <Toolbar variant="dense">
            <Box>
              <Box className="logo">
                <Link to="/home" className="text-decorator-none">
                  <img
                    src="https://i.imgur.com/JMZuidt.png"
                    alt=""
                    width="30px"
                    height="30px"
                  />
                  <img
                    src="https://i.imgur.com/Qey0M0E.png"
                    alt=""
                    width="140px"
                    height="30px"
                  />
                </Link>
              </Box>
            </Box>

            <Box className="navbar2">
              <Link to="/categorias" className="text-decorator-none">
                <Typography className="cursor" variant="h6">
                  ONG'S
                </Typography>
              </Link>

              <Link to="/formularioCategoria" className="text-decorator-none">
                <Typography className="cursor" variant="h6">
                  Cadastrar ONG
                </Typography>
              </Link>

              <Link to="/formularioServico" className="text-decorator-none">
                <Typography className="cursor" variant="h6">
                  Cadastrar serviço
                </Typography>
              </Link>
            </Box>

            <Box sx={{ flexGrow: 0 }} className="login">
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://github.com/Projeto-Integrador-Grupo-6.png"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {
                  /* {settings.map((setting) => (
  <MenuItem key={setting} onClick={handleCloseUserMenu}>
    <Typography>{setting}</Typography>
  </MenuItem>
))} */
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Box>
                      <Box>
                        <Typography>Minha Conta</Typography>
                      </Box>
                      <hr />
                      <Box onClick={goLogout}>
                        <Typography>Logout</Typography>
                      </Box>
                    </Box>
                  </MenuItem>
                }
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      );
    } else {
      navbarComponent = <AppBar className="navbar" position="relative">
      <Toolbar variant="dense">
        <Box>
          <Box className="logo">
            <Link to="/home" className="text-decorator-none">
              <img
                src="https://i.imgur.com/JMZuidt.png"
                alt=""
                width="30px"
                height="30px"
              />
              <img
                src="https://i.imgur.com/Qey0M0E.png"
                alt=""
                width="140px"
                height="30px"
              />
            </Link>
          </Box>
        </Box>

        <Box className="navbar2">

        </Box>

        <LocalMallIcon className="bag-icon"/>

        <Box sx={{ flexGrow: 0 }} className="login">
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt="Remy Sharp"
                src="https://github.com/Projeto-Integrador-Grupo-6.png"
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {
              /* {settings.map((setting) => (
<MenuItem key={setting} onClick={handleCloseUserMenu}>
<Typography>{setting}</Typography>
</MenuItem>
))} */
              <MenuItem onClick={handleCloseUserMenu}>
                <Box>
                  <Box>
                    <Typography>Minha Conta</Typography>
                  </Box>
                  <hr />
                  <Box onClick={goLogout}>
                    <Typography>Logout</Typography>
                  </Box>
                </Box>
              </MenuItem>
            }
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>;
    }
  }

  return <>{navbarComponent}</>;
}
export default Navbar;
