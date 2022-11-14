
import React from 'react';
import { Box } from '@mui/material';
import { Typography, Grid, Button } from '@material-ui/core';
import './Home.css';

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;