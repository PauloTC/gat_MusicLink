import React from "react"
import Layout from "../components/layout"
import BgImage from "../images/fondo_1.png"
import {
  Container,
  Box,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import MailOutlineIcon from '@material-ui/icons/MailOutline';

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
    padding: '40px'
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

const AccountType = () => {
  React.useState({
    checkedA: true
  });
  const classes = useStyles()
  return (
    <Layout>
      <CardMedia className="backgroundImg" image={BgImage} />
      <Container className={classes.loginForm} >
        <Box
          width={560}
          height={360}
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
              <Box py={1} >
                <Button fullWidth variant="outlined" color="primary"> <Link to="login" >Tengo una cuenta Music Link</Link>  </Button>
              </Box>
              <Box py={1} >
                <Button fullWidth variant="outlined" color="primary"> Tengo una cuenta Music Link </Button>
              </Box>
              <Box py={1} >
                <Button fullWidth variant="outlined" color="primary"> Tengo una cuenta Music Link </Button>
              </Box>
              <Box py={3} >
                <Typography variant="subtitle1" >
                    <Box textAlign="center" >o </Box></Typography>
              </Box>
              <Box py={1} >
                <Button
                    fullWidth
                    startIcon={<MailOutlineIcon />} 
                    variant="contained" 
                    color="primary">
                    <Link to="registro" >Registro con correo electronico</Link>
                </Button>
              </Box>
              <Typography variant="subtitle1" > <Box pt={3} textAlign="center" fontSize={12} fontWeight="bold" color="#07a102"  >¿Has olvidado tu contraseña?</Box>  </Typography>
          </form>
        </Box>
      </Container>
    </Layout>
  )
}

export default AccountType
