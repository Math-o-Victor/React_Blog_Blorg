import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaTemas.css';
import { Box } from '@mui/material';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Tema';
import { busca } from '../../../services/services';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/Tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaTema() {

  const [temas, setTemas] = useState<Tema[]>([]);
  const token = useSelector<TokenState, TokenState ["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

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

  async function getTema() {
    await busca("/tema", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getTema()
  }, [temas.length])

  return (
    <>
      {
        temas.map(tema => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography className='fnt' color="textSecondary" gutterBottom>
                  Categoria #{tema.id}
                </Typography>
                <Typography className='fnt' variant="h5" component="h2">
                  {tema.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >

                  <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="Botao" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarCateg/${tema.id}`} className="text-decorator-none">
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


export default ListaTema;