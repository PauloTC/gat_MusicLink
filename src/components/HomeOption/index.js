import React from 'react';
import { Button, Box, CardMedia } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"
import BgMusic from "../../images/localizacion .svg"
import {Link} from 'gatsby'
const useStyles = makeStyles({

    boxContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: 1450,
      margin: 'auto'
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
  })

const HomeOption = () => {
    const classes = useStyles()
    return(
        <Box className={classes.boxContainer} >
            <Button variant="text"  ><Link to="casting" className={` ${classes.button} ${classes.leftbutton}`} >SOY MÚSICO</Link></Button>
            <CardMedia className={ classes.image }  image={BgMusic} />
            <Button variant="text" ><Link to="tipo-cuenta" className={` ${classes.button} ${classes.rightbutton} `}>BUSCO MÚSICO</Link></Button>
        </Box>
    )

}

export default HomeOption