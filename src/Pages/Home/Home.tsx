import React from 'react'
import './Home.css'
import { Grid, Typography, Button } from '@material-ui/core'
import { Box } from '@mui/material'

function Home() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                  <Grid item xs={6} className='container'>
                      <Box paddingX={5} alignItems="center" >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="left" className='texto'>Uma idéia simples<br/> pode mudar o mundo!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="left" className='texto2'>Qual a sua idéia de hoje?</Typography>
                      </Box>
                    
                      <Box className='container'>
                        <Button variant="outlined" className='csBotao'>
                          Tive uma idéia!</Button>
                        <Button variant="outlined" className='csBotao'>
                          Ver Idéias</Button>
                      </Box>
                  </Grid>
                  <Grid item xs={6} >
                      <img src="https://cdn.dribbble.com/users/1714010/screenshots/6194732/dribbble_mip-creative-thinker.gif" alt="Gif pensativo" width="650px" height="450px" />
                  </Grid>
                  <Grid xs={12} className='fundo-branco'>
                  </Grid>
              </Grid>
    </>
  )
}

export default Home