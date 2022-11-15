import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import { Box } from '@mui/material';
import React, { useState } from 'react'
import ListaServico from '../listaServico/ListaServico';

function TabServico() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    return (
        <>
            <TabContext value={value}>
                <AppBar className='barraCor' position="static">
                    <Tabs centered indicatorColor="secondary" onChange={handleChange}>
                        <Tab label="Todos os Serviços" value="1" />
                        <Tab label="Sobre-nós" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaServico />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">
                        Sobre-nós
                    </Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify">
                        Escrever alguma coisa
                    </Typography>
                </TabPanel>
            </TabContext>
        </>
    )
}
export default TabServico