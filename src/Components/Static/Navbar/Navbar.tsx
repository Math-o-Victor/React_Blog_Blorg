import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import './Navbar.css'
import { Box } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/Tokens/tokensReducer";
import { addToken } from "../../../store/Tokens/actions";

function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const dispatch = useDispatch()
    let navigate = useNavigate();

    var navbarComponent;

    if (token !== '') {
        navbarComponent = <AppBar position="static" className='bg-menu textow'>
            <Toolbar>
                <Link to='/home' className='text-decorator-none'>
                    <Box mx={1} >
                        <img className='blorg' src="https://imageshack.com/i/pmrMBJiYj" alt="Blorg!" />
                    </Box>
                </Link>

                <Link to='/home' className='text-decorator-none'>
                    <Box mx={1}>
                        <img className='size' src="https://imageshack.com/i/poJwhMu0j" alt="home" />
                    </Box>
                </Link>

                <Link to='/ideias' className='text-decorator-none'>
                    <Box mx={1}>
                        <img className='size' src="https://imageshack.com/i/poqOipxlj" alt="ideias" />
                    </Box>
                </Link>

                <Link to='/categorias' className='text-decorator-none'>
                    <Box mx={1}>
                         <img className='size' src="https://imageshack.com/i/pnBkCwlIj" alt="categorias" />
                    </Box>
                </Link>

                <Link to='/formularioTema' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <img className='size' src="https://imageshack.com/i/pnno8Yj3j" alt="nova categoria" />
                    </Box>
                </Link>
                <Box mx={1} className='cursor' onClick={goLogout}>
                    <img className='size' src="https://imageshack.com/i/pmtu1w8Xj" alt="logout" />
                </Box>
            </Toolbar>
        </AppBar>;
    }

    function goLogout() {
        dispatch(addToken(''))
        alert('Você está sendo deslogado, faça login para continuar')
        navigate('/login')
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;