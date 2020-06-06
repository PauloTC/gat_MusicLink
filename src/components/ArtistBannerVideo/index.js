import React from 'react';
import { Box, Typography, Container, CardMedia } from '@material-ui/core'
import overlay from '../../images/over.png'
// import './index.scss'
import {
  makeStyles
} from '@material-ui/core/styles';

import profileImg from '../../images/team.jpg'

const useStyles = makeStyles({
  image : {
      width: '100%',
      position: 'absolute',
      left: 0,
      right: 0,
      pointerEvents: 'none'
  },
  profileImg: {
    height: 250,
    width: 250
  }
});


const ArtistBannerVideo =() => {
  const classes = useStyles();
  return(
    <Box  position="relative" >
      <img className={classes.image } height={800} src={ overlay } />
      <iframe 
        title="vide-artist"
        width="100%" 
        height="800px" 
        src="https://www.youtube.com/embed/puYdOvbLOd8" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
        <Box width={250} position="absolute" bottom={50} left={220}   >
          <CardMedia className={classes.profileImg} image={ profileImg } />
          <Box  position="absolute" zIndex={4} bottom={-20}  right={-40}  >
            <Typography variant="h4" >
              <Box lineHeight="100%" color="#fff" fontWeight="bold" fontStyle="italic">Nombre</Box>
              <Box ineHeight="100%" color="#fff" fontWeight="bold" fontStyle="italic">Artista</Box>
            </Typography>
          </Box>
      </Box>
    </Box>
  )
}

export default ArtistBannerVideo