import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaPostagem.css';
import { Box } from '@mui/material';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/services';

function ListaPostagem() {

  const [postagem, setPostagem] = useState<Postagem[]>([])
  const [token, setToken] = useLocalStorage('token')
  let navigate = useNavigate()

  useEffect(() => {
    if (token === '') {
      alert("Por favor, realize o login para prosseguir")
      navigate("/login")
    }
  }, [token])

  async function getPostagem() {
    await busca("/Postagens", setPostagem, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getPostagem()
  }, [postagem.length])

  return (
    <>
      {
        postagem.map(postagem => (
          <Box m={2} >
            <Card variant="outlined" className='cardSize'>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Ideia #{postagem.id}
                </Typography>
                <Typography variant="h5" component="h2">
                  {postagem.titulo}
                </Typography>
                <Typography variant='body2' component='p'>
                  {postagem.texto}
                </Typography>
                <Typography variant='body2' component='p'>
                  {postagem.tema?.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >

                  <Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="Botao" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarIdeia/${postagem.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary" className='Botao2'>
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
          )
        )
      }
    </>
  );
}


export default ListaPostagem;