import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaPostagem.css';
import { Box } from '@mui/material';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/services';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/Tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaPostagem() {

  const [postagem, setPostagem] = useState<Postagem[]>([])
  const token = useSelector<TokenState, TokenState ["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate()

  useEffect(() => {
    if (token === '') {
      toast.error("Por favor, realize o login para prosseguir",{
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover:true,
        draggable: false,
        theme: 'dark',
        progress: undefined
    })
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
                <Typography className='fnt' color="textSecondary" gutterBottom>
                  Ideia #{postagem.id}
                </Typography>
                <Typography className='fnt' variant="h5" component="h2">
                  {postagem.titulo}
                </Typography>
                <Typography className='fnt' variant='body2' component='p'>
                  {postagem.texto}
                </Typography>
                <Typography className='fnt2' variant='body2' component='p'>
                  #{postagem.tema?.descricao}
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