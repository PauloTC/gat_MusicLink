import React from 'react'
import Layout from '../components/layout'
import { Typography, Box, Grid, Container, CardMedia, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ModalConfirmation from '../components/Modal/modal'
import  VimeoIMG from '../images/vimeo.png'
import  YoutubeIMG from '../images/youtube.png'
import BgImage from '../images/fondo_1.png'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles({
    whitetext: {
        color: '#fff'
    },
    greenText: {
        color: "#07eb00"
    },
    button: {
        width: 350,
        height: 40,
        cursor: 'pointer',
        padding: 0
    },
    boxWhite: {
      transform: "translate(-50%, -45%)"
    },
    container: {
      position: 'relative',
      height: '100vh',
      textAlign: 'left',
        position: 'relative'
    },
    greenbtn: {
      width: 160
    },
    weight : {
      fontWeight: 500
    }
});

const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    label: {
        color: "#fff"
    },

    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

const Casting = () => {

	  const [ open, setOpen ] = React.useState(false);
    const [state, setState] = React.useState({
        checkedA: true,
    });

    const openDialog = () => (
      setOpen(true)
    )

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const classes = useStyles();
    return (
        <Layout>
            <CardMedia  className="backgroundImg"  image={ BgImage } />
            <Container className={classes.container} maxWidth="xl">
              <Box width="100%"  position="absolute" left="50%" top="50%" className={classes.boxWhite}>
                <Grid container  justify="space-between" spacing={5} >
                    <Grid item lg={7} xl={6} >
                        <Typography className={ classes.whitetext } >
                            <Box lineHeight="100%" fontWeight={500} letterSpacing={1} fontSize={42}  >Para ser parte de Musiclink,</Box>  
                            <Box fontWeight={500} letterSpacing={1} fontSize={42} > debes de pasar un  <span  className={ classes.greenText } >casting. </span></Box>
                        </Typography>
                        <Typography  variant="subtitle2" className={ classes.whitetext } >
                            <Box  fontWeight={300} fontSize={24} mt={5} >
                                Ingresa un video tuyo tocando en vivo para poder ser parte de nuestra familia. <span className={ classes.weight }  >Te enviaremos un correo electrónico confirmando el resultado de tu postulación a Musiclink.</span> 
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item lg={5} xl={5} >
                        <Box borderRadius={7} p={3}  bgcolor="#fff" width="100%"  >
                            <Box my={3} >
                              <TextField fullWidth id="name" placeholder="Ingresa nombre y apellidos" label="Nombre y apellidos" />
                            </Box>
                            <Grid container  spacing={5}>
                              <Grid item  md={6} >
                                <TextField fullWidth id="phone" placeholder="Ingresa teléfono" label="Teléfono" />
                              </Grid>
                              <Grid item  md={6} >
                                <TextField fullWidth id="mail" placeholder="Ingresa correo electronico" label="Correo electrónico" />
                              </Grid>
                            </Grid>
                            <Box mt={3} >
                              <TextField fullWidth id="link" placeholder="Ingresa el link de tu cover aquí" label="Link" />
                            </Box>
                            <Box  mt={6} mb={3} display="flex"   >
                                <img alt="vimeo" width="124" height="40"  src={ VimeoIMG } />
                                <Box ml={5}>
                                  <img alt="youtube" width="50" height="40" src={ YoutubeIMG } />
                                </Box>
                            </Box>
                            <Box mt={3} >
                                <Box mb={1} >
                                  <FormControlLabel
                                          control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
                                          label="Acepto los términos y condiciones de Musiclink."
                                      />
                                </Box>
                                <Box mb={1} >
                                  <FormControlLabel
                                      control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
                                      label="Acepto las Politicas de Privacidad."
                                  />
                                </Box>
                                <FormControlLabel
                                      control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
                                      label="Acepto que Musiclink haga uso del material audiovisual que incluya en su web."
                                  />
                                </Box>
                                <Box mt={3}  textAlign="right" >
                                  <Button width={360} className={ classes.greenbtn } variant="contained" onClick={openDialog} color="primary">
                                    Enviar
                                  </Button>
                                </Box>
                                <ModalConfirmation openModal={open} />
                              </Box>
                       
                    </Grid>
                </Grid>
              </Box>
            </Container>
            
        </Layout>
    )
}

export default Casting