import React from "react";
import { AppBar, Toolbar, Typography} from "@material-ui/core";
import './Navbar.css'
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <>
            <AppBar position="static" className='bg-menu'>
                <Toolbar>
                    <Link to='/home' className='text-decorator-none'>
                        <Box mx={1} className='blorg'>
                        <Typography className='title' variant="h2">
                            Blorg!
                        </Typography>
                        </Box>
                    </Link>

                    <Link to='/home' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                        <Typography className='title' variant="h6">
                            Home
                        </Typography>
                        </Box>
                    </Link>

                    <Box mx={1} className='cursor'>
                        <Typography className='title' variant='h6'>
                         Ideias
                        </Typography>
                    </Box>

                    <Box mx={1} className='cursor'>
                        <Typography className='title' variant='h6'>
                        Categorias
                        </Typography>
                    </Box>

                    <Box mx={1} className='cursor'>
                        <Typography className='title' variant='h6'>
                        Criar Categoria
                        </Typography>
                    </Box>

                    
                    <Link to='/login' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography className='logout' variant='h6'>
                            Logout
                        </Typography>
                    </Box>
                    </Link>
                    

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;