import React from "react"
import Layout from "../components/layout"
import BgImage from "../images/fondo_3.png"
import BgMusic from "../images/localizacion .svg"
import {
  Box,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import {Link} from 'gatsby'

const useStyles = makeStyles({
  title: {
    color: "#fff",  
    fontWeight: "bold",
  },
  image: {
    width: 512,
    height: 460,
    backgroundSize: 'cover'
  },
  button: {
    fontSize: 34,
    color: "#fff",
    "&:after": {
      content: '""',
      width: 210,
      height: 210,
      display: 'flex',
      border: '1px dashed #fff',
      borderRadius: '50%',
      position: 'absolute',
      top: '-70px',
    }
  },
  leftbutton: {
    "&:after": { 
      left: '60%'
    }
  },
  rightbutton: {
    "&:after": { 
      right: '60%'
    }
  },
  boxContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 1450,
    margin: 'auto'
  }
})

const Home = () => {
  const classes = useStyles()
  return (
    <Layout>
      <CardMedia className="backgroundImg" image={BgImage} />
        <Box  
          position="absolute" 
          left="50%" 
          top="10%" 
          left= {0}
          right = {0} >
        <Typography> 
          <Box
            component="p"
            fontSize={42}
            textAlign="center" 
            color="#fff" 
            position="relative" 
            mb={0}
            fontWeight={500}>¿ QUÉ BUSCAS HOY ?</Box>
            <Box 
              pb={12} 
              position="relative" 
              textAlign="center"
              color="#fff" 
              fontSize={18} 
              fontWeight={300} >Iniciemos esta aventura juntos</Box>
        </Typography>
        <Box className={classes.boxContainer} >
          <Button variant="text"  ><Link to="casting" className={` ${classes.button} ${classes.leftbutton}`} >SOY MÚSICO</Link></Button>
          <CardMedia className={ classes.image }  image={BgMusic} />
          <Button variant="text" ><Link to="tipo-cuenta" className={` ${classes.button} ${classes.rightbutton} `}>BUSCO MÚSICO</Link></Button>
        </Box>
        </Box>
    </Layout>
  )
}

export default Home
