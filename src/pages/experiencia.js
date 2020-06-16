import React from 'react';
import Layout from '../components/layout'
import Bgimg from '../images/fondo_1.png'
import { Typography, Box, Input, FormControl, InputLabel, Button } from "@material-ui/core"
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from "@material-ui/core/styles"

import {Link} from 'gatsby'

const useStyles = makeStyles({
  button: {
    width: 350,
    textTransform: "capitalize",
  },
})

const ExperiencePage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <div className="gcontainer" >
        <img alt="fondo"  className="backgroundImg" src={Bgimg} />
        <form  className="gcontainer_center-absolute" >
          <Typography variant="h4" >
            <Box  textAlign="center" component="p" color="#fff" fontWeight={500}  >Experiencia musical</Box>
          </Typography>
          <Box py={4} textAlign="center" bgcolor="#fff" borderRadius={8} >
            <Box  display="flex" alignItems="flex-end" p={3}   >
              <Typography variant="h4" >
                <Box component="p"m={0} color="#000" fontWeight={500}  >Dúo</Box>
              </Typography>
              <Box mx={10} >
                <FormControl fullWidth >
                  <InputLabel >Monto</InputLabel>
                  <Input
                    id="standard-adornment-amount"
                    startAdornment={<InputAdornment position="start">S/.</InputAdornment>}
                  />
                </FormControl>
              </Box>
              <Button variant="outlined" color="primary">
                <Link to="subir-archivos">Subir info</Link>
              </Button>
            </Box>
            <Box mb={6} borderRadius={8} display="flex" alignItems="flex-end" p={3}  >
              <Typography variant="h4" >
                <Box component="p"m={0} color="#000" fontWeight={500}  >Trio</Box>
              </Typography>
              <Box mx={10} >
                <FormControl fullWidth >
                  <InputLabel >Monto</InputLabel>
                  <Input
                    id="standard-adornment-amount"
                    startAdornment={<InputAdornment position="start">S/.</InputAdornment>}
                  />
                </FormControl>
              </Box>
              <Button variant="outlined" color="primary">
                <Link to="subir-archivos">Subir info</Link>
              </Button>
            </Box>
            <Button color="primary" variant="contained" className={classes.button} >
              <Link to="perfil-artista">Siguiente</Link> </Button>
          </Box>
        </form>
      </div>
    </Layout>
  )
}

export default ExperiencePage