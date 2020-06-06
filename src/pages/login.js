import React from "react"
import Layout from "../components/layout"
import BgImage from "../images/fondo_1.png"
import {
  Container,
  Box,
  CardMedia,
  FormControl,
  InputLabel,
  Input,
  Button,
  InputAdornment,
  FormControlLabel,
  Checkbox
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from "gatsby"

const useStyles = makeStyles({
  title: {
    color: "#fff",  
    fontWeight: "bold",
  },
  boxWhite: {
    transform: "translate(-50%, -45%)",
  },
  margin: {
    marginBottom: 30
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
  link: {
    color: 'inherit'
  },
  loginForm: {
    '.MuiFormControlLabel-label': {
      fontSize: '12px !important'
    },
    label :{
      fontSize: '12px !important'
    },
    '.MuiTypography-body1' : {
      fontSize: '12px'
    }
  }
})

const Login = () => {
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
      <Container className={classes.loginForm} >
        <Box
          width={460}
          height={380}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="#eef2f6"
          position="absolute"
          left="50%"
          top="50%"
          className={classes.boxWhite}
          borderRadius={8}
        >
          <form className={classes.form}  >
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="input-with-icon-adornment">
                Login
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
                Contraseña
              </InputLabel>
              <Input
                fullWidth
                type="password"
                id="password"
                endAdornment={
                  <InputAdornment position="end">
                    <LockOutlinedIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControlLabel control={<Checkbox size="small" color="primary" className={classes.checkbox} checked={state.checkedA} onChange={handleChange} name="checkedA" />} label="Recordarme" />
            <Button  className={classes.button}  variant="contained" color="primary">
              <Link to="buscador" >iniciar sesión</Link>
            </Button>
            <Box mt={4} textAlign="center"  >¿No tienes cuenta?  
              <Box pl={1} component="span" color="#07a102" fontWeight="bold" ><Link className={classes.link} to="/registro/" >Registrarse</Link></Box>  </Box>
          </form>
        </Box>
      </Container>
    </Layout>
  )
}

export default Login
