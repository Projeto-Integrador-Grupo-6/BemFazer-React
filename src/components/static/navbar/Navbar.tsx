import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { Box, Icon } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// const settings = ['Profile', 'Account', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

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

  return (
    <>
      <AppBar className="navbar" position="relative">
        <Toolbar variant="dense">
          <Box>
            <Box className="logo">
              <img src="https://i.imgur.com/JMZuidt.png" alt="" width="30px" height="30px" />
              <img src="https://i.imgur.com/Qey0M0E.png" alt="" width="140px" height="30px" />
            </Box>
          </Box>

          <Box className="navbar2">
            <Box mx={1} className="cursor">
            <Link to='/home'>
            <Typography variant="h6" style={{
                color: '#000'
              }} color="primary">
                Home
              </Typography>
            </Link>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" style={{
                color: '#000'
              }} color="primary">
                Quem Ajudar
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
             <Link to='/sobrenos'>
             <Typography variant="h6" style={{
                color: '#000'
              }} color="primary">
                Sobre Nós
              </Typography>
             </Link>
            </Box>

          </Box>

          <Box className="login">
            <Link to="/login" className="text-decorator-none">
              Login
            </Link>
            <Link to='/cadastrousuario'>
             Cadastrar
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
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
                    <Link to='./home'>
                      <Box>
                        <Typography>Logout</Typography>
                      </Box>
                    </Link>
                  </Box>
                </MenuItem>
              }
            </Menu>
          </Box>

        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
