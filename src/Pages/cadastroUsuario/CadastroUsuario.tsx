import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import userEvent from '@testing-library/user-event';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Usuario from '../../models/Usuario';
import { cadastroUsuario } from '../../services/services';
import './CadastroUsuario.css'

function CadastroUsuario(){
    

    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("");
    const [Usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto:''
    })
    const [usuarioResult, setUsuarioResult]=useState<Usuario>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto:''
    });
    useEffect(()=>{
        if(usuarioResult.id !== 0){
            navigate('/home')
        }
    }, [usuarioResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>){
        setUsuario({
            ... Usuario, [e.target.name]:e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        if(confirmarSenha===Usuario.senha){
        cadastroUsuario(`/usuarios/cadastrar`, Usuario, setUsuarioResult)
        alert('Você foi cadastrado com sucesso. Que eu seja o primeiro a dizer. Bem vindo ao Blorg!')
    }else{
        alert('Dados incorretos. Por favor, cheque os campos e tente novamente.')
    }
    }

    
    return (

        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagemCadastro'><h1> </h1></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form>
                        <Typography variant="h2" gutterBottom color='textPrimary' align="center" className="entre">Cadastre-se</Typography>
                        <TextField value={Usuario.nome} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth></TextField>
                        <TextField value={Usuario.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal' fullWidth></TextField>
                        <TextField value={Usuario.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth></TextField>
                        <TextField value={confirmarSenha} onChange={(e:ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' type='password' margin='normal' fullWidth></TextField>

                        <Box marginY={2}>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='primary'>
                                    Cadastrar
                                </Button>
                            </Link>
                        </Box>   

                        <Box marginY={2}>
                            <Link to='/login' className='text-decorator-none'>
                                    Cancelar
                            </Link>
                        </Box>
                              
                    </form>
                </Box>
            </Grid>
        </Grid>
        );
}

export default CadastroUsuario;