import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css'
import { TokenState } from '../../../store/Tokens/tokensReducer';
import { useSelector } from "react-redux";

function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    
    var footerComponent;
    
    if (token != "") {
        footerComponent = <Grid container direction="row" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <>
                    <Box className='bg-menu'>
                        <Box paddingTop={0.5} display="flex" justifyContent="center">
                            <Typography variant="h6" align="center" gutterBottom className='feedback'>
                                Para ver mais do criador ou sugerir mudanças:</Typography>
                        </Box>
                        <Box className='containerF'>
                            <a href="https://www.instagram.com/maninhouau/" target="_blank" rel="noreferrer">
                                <InstagramIcon className='icone' />
                            </a>
                            <a href="https://www.linkedin.com/in/MathKitsch/" target="_blank" rel="noreferrer">
                                <LinkedInIcon className='icone' />
                            </a>
                            <a href="mailto:matheusvictor840@gmail.com" target="_blank" rel="noreferrer">
                                <MailOutlineIcon className='icone' />
                            </a>
                        </Box>
    
                        <Box className='menu'>
                            <Box>
                                <Typography variant="subtitle2" align="center" gutterBottom className='bg-menu textWhite'>
                                    Math Victor, 2022. Todos os direitos reservados e merecidos. © Fever Dream Inc.👁️
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </>
            </Grid>
        </Grid>
    }
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;