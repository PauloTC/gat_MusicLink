import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    wrapper: {
        background: "#000",
    },
    text: {
        color: "#fff"
    },
    icon: {
        color: '#fff',
        marginRight: 30
    }
});


function Footer(){
    const classes = useStyles();
    return (
        <Box position="relative" zIndex={2} width="100%"  display="flex" alignItems="center" height={120} className={ classes.wrapper } >
            <Container maxWidth="xl" >
                <Box display="flex" justifyContent="space-between" >
                    <Box display="flex" >
                        <Typography variant="subtitle2"className={ classes.text }>
                            <Box mr={12} >Condiciones de uso</Box>
                        </Typography>
                        <Typography variant="subtitle2"className={ classes.text }>
                            <Box mr={12} >Preguntas frecuentes</Box>
                        </Typography>
                        <Typography variant="subtitle2"className={ classes.text }>
                            <Box mr={12} >Cookies</Box>
                        </Typography>
                        <Typography variant="subtitle2"className={ classes.text }>Sobre los anuncios</Typography>
                    </Box>
                    <Box display="flex">
                        < FacebookIcon  className={ classes.icon } />
                        < InstagramIcon  className={ classes.icon } />
                        < TwitterIcon  className={ classes.icon } />
                        <Typography  variant="subtitle2" className={ classes.icon } >© 2020 MusicLink</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer;