
import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { Typography, Grid, Button } from '@material-ui/core';
import './Home.css';
import TabServico from '../../components/servicos/tabServico/TabServico';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function Home() {

  let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate("/login")
  
      }
  }, [token])
  return (
    <>
      <Grid>
        <Grid>
        <Box
          className='container'>
          
        </Box>
        </Grid>
        <Grid xs={12} className="postagens">
            <TabServico />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;