import PropTypes from "prop-types"
import React from "react"
import {
  makeStyles
} from '@material-ui/core/styles';
import { Container, Box, Typography, Grid } from "@material-ui/core"
import logo from '../images/logo_musiclink.svg'
import { Link } from "gatsby"

const useStyles = makeStyles({
  header:{
      position: 'absolute',
      width: '100%', 
      zIndex: 9,
      height: 80,
      display: 'flex',
      alignItems: 'center',
      paddingTop: '40px'
  },
  container: {
    maxWidth: '90%'
  }
});


const Header = ({ siteTitle }) => {
  const classes = useStyles();
  return(
    <header  className={classes.header}  >
      <Container className={ classes.container} >
        <Grid  height={40} container alignItems="center" justify="space-between" >
          <Grid item md={2} >
              <Link to="/" >
                <img alt="logo" src={logo}  />
              </Link>
          </Grid>
          <Grid item md={3} >
            <Box display="flex" justifyContent="center" alignItems="center" >
              <Typography variant="subtitle1" >
                <Box mx={4} component="span" color="#fff">
                    <Link to="registro" >Registrarse</Link></Box>
              </Typography>
              <Box bgcolor="#fff"  width="1px" height={23}  ></Box>
              <Typography variant="subtitle1" >
                <Box mx={4} component="span" color="#fff">
                    <Link to="login" >Iniciar sesión</Link></Box>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
