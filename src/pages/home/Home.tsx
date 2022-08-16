import React, { useEffect } from 'react'
import './Home.css'
import { Grid, Typography, Button } from '@material-ui/core'
import { Box } from '@mui/material'
import TabPostagem from '../../components/postagens/tabPostagem/tabPostagem'
import { Link, useNavigate } from 'react-router-dom'
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem'
import { useSelector } from 'react-redux'
import { TokenState } from '../../store/Tokens/tokensReducer'
import { toast } from 'react-toastify'

function Home() {

  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState ["tokens"]>(
    (state) => state.tokens
  );

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

  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
        <Grid item xs={12} className='container'>
          <Box paddingX={5} alignItems="center" >
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='texto'>Uma idéia simples<br /> pode mudar o mundo!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='texto'>Qual a sua idéia de hoje?</Typography>
          </Box>

          <Typography align='center'>
            <Box className='botoes'>
              <ModalPostagem />
              <Link to={'/ideias'} className='text-decorator-none'>
                <Button variant="outlined" className='Botao2'>
                  Ver Idéias
                </Button>
              </Link>
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12} className='caixa'>
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  )
}

export default Home