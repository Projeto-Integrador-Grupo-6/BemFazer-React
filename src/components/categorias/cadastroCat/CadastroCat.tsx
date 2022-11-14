import React from 'react'
import { Button, Container, TextField, Typography } from '@material-ui/core'
import './CadastroCat.css';

function CadastroCat() {
    return (
        <Container maxWidth="sm" className="topo">
            <form>
                <Typography
                    variant="h3"
                    color="textSecondary"
                    component="h1"
                    align="center"
                >
                    Formulário de cadastro de Categoria
                </Typography>
                <TextField
                    id="descricao"
                    label="descricao"
                    variant="outlined"
                    name="descricao"
                    margin="normal"
                    fullWidth
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroCat
