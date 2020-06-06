import React from "react"
import Layout from "../components/layout"
import BgImage from "../images/fondo_1.png"
import {
  Container,
  Box,
  TextField,
  CardMedia,
  FormControl,
  InputLabel,
  Input,
  Button,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Typography
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import AccountCircle from '@material-ui/icons/AccountCircle';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Link } from 'gatsby'
const useStyles = makeStyles({
  title: {
    color: "#fff",  
    fontWeight: "bold",
  },
  boxWhite: {
    transform: "translate(-50%, -45%)",
  },
  margin: {
    marginBottom: 20
  },
  form: {
    display: 'flex',
    flexDirection: "column",
    width: '100%',
    padding: '0 40px'
  },
  button: {
    marginTop: 20
  },
  checkbox: {
    '.MuiTypography-body1': {
      fontSize: '12px'
    }
  }
})

const Register = () => {
  const [state, setState] = React.useState({
    checkedA: true
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const classes = useStyles()
  return (
    <Layout>
      <CardMedia className="backgroundImg" image={BgImage} />
      <Container>
        <Box
          py={4}
          width={460}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="#eef2f6"
          position="absolute"
          left="50%"
          top="45%"
          className={classes.boxWhite}
          borderRadius={8}
        >
          <form className={classes.form}  >
            <Typography >
              <Box  component="p" fontWeight="bold" fontSize={24} >Registrarse</Box>
              <Box mb={4} component="p"  fontSize={14} color="#5f5f5f" >Revise y proporcione la información requerida para  terminar de registrarse y ser parte de la familia Music link.</Box>
            </Typography>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="input-with-icon-adornment">
                Nombres
              </InputLabel>
              <Input
                fullWidth
                id="input-with-icon-adornment"
                endAdornment={
                  <InputAdornment position="end">
                    <PersonOutlineIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="input-with-icon-adornment">
                Apellidos
              </InputLabel>
              <Input
                fullWidth
                id="lastname"
                endAdornment={
                  <InputAdornment position="end">
                    <PersonOutlineIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="input-with-icon-adornment">
                Correo Electonico
              </InputLabel>
              <Input
                fullWidth
                type="email"
                id="email"
                endAdornment={
                  <InputAdornment position="end">
                    <MailOutlineIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <Typography>
              <Box  component="p" color="#5f5f5f" mt={3} fontSize={14} >Te enviaremos promociones comerciales, ofertas especiales, inspiración y las actualizaciones de nuestras políticas a través del correo electrónico.</Box>
            </Typography>
            <FormControlLabel control={<Checkbox color="primary" className={classes.checkbox} checked={state.checkedA} onChange={handleChange} name="checkedA" />} label="No quiero recibir mensajes de promociones de 
Music Link. También puedo optar por desactivarlos en la configuración de mi cuenta o a través del enlace del mensaje." />
            <Box width="100%" mt={4}  >
              <Button fullWidth className={classes.button}  variant="contained" color="primary">
                <Link to="login" >Terminar registro</Link>
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </Layout>
  )
}

export default Register
