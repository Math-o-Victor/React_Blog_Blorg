import React, { useEffect, useState } from 'react'
import { Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import { Box } from '@mui/material'
import './DeletarPostagem.css';
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../services/services';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/Tokens/tokensReducer';
import { toast } from 'react-toastify';

function DeletarPostagem() {

  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [postagem, setPostagem] = useState<Postagem>()
  const token = useSelector<TokenState, TokenState ["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
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

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    buscaId(`/postagens/${id}`, setPostagem, {
      headers: {
        'Authorization': token
      }
    })
  }

  function sim() {
    navigate('/ideias')
    deleteId(`/Postagens/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    toast.info('Postagem deletada com sucesso',{
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover:true,
      draggable: false,
      theme: 'dark',
      progress: undefined
});
  }

  function nao() {
    navigate('/posts')
  }
  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a ideia:
              </Typography>
              <Typography color="textSecondary" >
                {postagem?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="botao1" size='large'>
                  Sim
                </Button>
              </Box>
              <Box>
                <Button onClick={nao} variant="contained" size='large' className="botao2">
                  N??o
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarPostagem;