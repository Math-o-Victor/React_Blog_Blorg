import React from "react";
import { AppBar, Toolbar, Typography} from "@material-ui/core";
import './Navbar.css'
import { Box } from "@mui/material";

function Navbar(){
    return (
        <>
            <AppBar position="static" className='bg-menu'>
                <Toolbar>
                    <Box mx={1} style={{cursor:'pointer'}}>
                    <Typography className='title' variant="h6">
                        Blorg!
                    </Typography>
                    </Box>

                    <Box mx={1} style={{cursor:'pointer'}}>
                    <Typography className='title' variant="h6">
                        Home
                    </Typography>
                    </Box>

                    <Box mx={1} style={{cursor:'pointer'}}>
                        <Typography className='title' variant='h6'>
                         Ideias
                        </Typography>
                    </Box>

                    <Box mx={1} style={{cursor:'pointer'}}>
                        <Typography className='title' variant='h6'>
                        Categorias
                        </Typography>
                    </Box>

                    <Box mx={1} style={{cursor:'pointer'}}>
                        <Typography className='title' variant='h6'>
                        Criar Categoria
                        </Typography>
                    </Box>

                    <Box mx={1} style={{cursor:'pointer'}}>
                        <Typography className='logout' variant='h6'>
                            Logout
                        </Typography>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;