
import React from 'react';
import { Box } from '@mui/material';
import { Typography, Grid, Button } from '@material-ui/core';
import './Home.css';
import TabServico from '../../components/servicos/tabServico/TabServico';

function Home() {
  return (
    <>
      <Grid>
        <Grid>
        <Box
          className='container'>
          <Box paddingX={20} >
            <Typography variant="h3"
              gutterBottom color="textPrimary"
              component="h3" align="center"
              style={{
                color: "white",
                fontWeight: "bold"
              }}
            >JUNTOS SOMOS MAIS
            </Typography>
          </Box>
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