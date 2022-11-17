import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import { Box } from '@mui/material';
import React, { useState } from 'react'
import SobreNos from '../../../paginas/sobreNos/SobreNos';
import Time from '../../../paginas/time/Time';
import ListaServico from '../listaServico/ListaServico';
import './TabServico.css';


function TabServico() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    return (
        <>
            <TabContext value={value}>
                <AppBar position="static">
                    <Tabs centered indicatorColor="secondary" onChange={handleChange} className="barraCor" >
                        <Tab label="Todos os Serviços" value="1" />
                        <Tab label="Sobre nós" value="2" />
                        <Tab label="Sobre a equipe" value="3"/>
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaServico />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify">
                        <SobreNos />
                    </Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify">
                        <Time />
                    </Typography>
                </TabPanel>
            </TabContext>
        </>
    )
}
export default TabServico