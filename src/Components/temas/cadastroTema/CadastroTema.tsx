import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/services';
import { useNavigate, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import './CadastroTema.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/Tokens/tokensReducer';


function CadastroTema() {

    let navigate = useNavigate()
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState ["tokens"]>(
        (state) => state.tokens
      );
    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            descricao: ''
        }
    )

    useEffect(() => {
        if (token === '') {
            alert("Por favor, realize o login para prosseguir")
            navigate("/login")
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/tema/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema, [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("tema " + JSON.stringify(tema))
        if (id !== undefined) {
            console.log(tema)
            put(`/tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            alert("Categoria atualizada com sucesso")
        } else {
            post(`/tema/tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            alert("Categoria adicionada com sucesso. Você já pode criar uma ideia com ela.")
        }
        back()
    }

    function back() {
        navigate('/categorias')
    }

    return (
        <Box className='padding1'>
            <Container maxWidth="sm">
                <form onSubmit={onSubmit}>
                    <Typography className='fnt' variant="h3" color="textSecondary" component="h1" align="center" >Cadastro de Categorias</Typography>
                    <Typography className='fnt' variant="h5" color="textSecondary" component="h2" align="center" >Escreva um tema e clique em finalizar para adicionar uma nova categoria</Typography>
                    <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                    <Typography align='center'>
                        <Button type="submit" variant="contained" color="primary" className='botao'>
                            Finalizar
                        </Button>
                   </Typography>
                </form>
            </Container>
        </Box>
    )
}

export default CadastroTema;