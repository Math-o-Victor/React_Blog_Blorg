import React, { ChangeEvent, useState, useEffect } from "react";
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import useLocalStorage from 'react-use-localstorage';
import UsuarioLogin from "../../models/UsuarioLogin";
import { login } from "../../services/services";
import './Login.css'

function Login() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [UsuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
        id: 0,
        usuario: '',
        senha: '',
        token: ''
    })

    useEffect(()=>{
        if(token !== ''){
            navigate('/home')
        }
    }, [token])

    function updatedModel(e: ChangeEvent<HTMLInputElement>){
        setUsuarioLogin({
            ...UsuarioLogin,[e.target.name]:e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        console.log('UsuarioLogin: '+ Object.values(UsuarioLogin))
        try{
            await login (`/usuarios/logar`, UsuarioLogin, setToken)
            alert('Login realizado com sucesso. Bem Vindo de Volta!');
        }catch(error){
            alert('Dados inválidos. Erro no login. :´(')
        }
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" className='gradiente, fundo'>

            <Grid alignItems="center" item xs={12} className='waves'>
                <Box paddingX={20} minWidth={100}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h2" gutterBottom color='textPrimary' align="center" className="entre">Login</Typography>
                        <TextField value={UsuarioLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Email' variant='outlined' name='usuario' margin='normal' className='fundob' fullWidth></TextField>
                        <TextField value={UsuarioLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' className='fundob' fullWidth></TextField>

                        <Button type='submit' variant='contained' color='primary' className='Botao'>
                            Logar
                        </Button>
                             
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' className="entre">
                                Ainda não tem uma conta?
                            </Typography>
                        </Box>

                        <Link to="/cadastroNewUser" className='text-decorator-none'>
                            <Typography gutterBottom align='center' className="cadastre">
                                Cadastre-se aqui!
                            </Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Login