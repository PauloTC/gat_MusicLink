import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "gatsby"

import profileBanner from '../../images/profile2.jpg'

const useStyles = makeStyles({
    root: {
        width: 326,
        borderRadius: 16,
        marginBottom: 20
    },
    media: {
      height: 278,
      width: "100%"
    },
    link: {
        color: 'inherit',
        display: 'flex',
        alignItems: 'center'
    },
    ibutton: {
        position: 'absolute',
        right: 10,
        bottom: -25,
        background: '#fff',
        borderRadius: '50%',
        boxShadow: '0 2px 4px 0 rgba(116, 142, 152, 0.28)',
    },
    "@global" : {
        ".MuiIconButton-root" : {
            padding: 8
        }
    }
  });


export default function ArtistCard()  {
    const classes = useStyles();
    return (  
        <Card className={classes.root} >
                <CardContent>
                    <Box position="relative" >
                        <CardMedia  className={classes.media} image={profileBanner} />
                        <Box className={ classes.ibutton }>
                            <IconButton aria-label="delete" className={classes.margin}>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </Box>
                    <Typography variant="subtitle2" gutterBottom> 
                        <Box component="p"  fontWeight="bold" textAlign="left" mt={3} mb={2} >BARRIO CALAVERA</Box>
                    </Typography>
                    <Box display="flex" justifyContent="space-between" >
                        <Typography variant="subtitle2" gutterBottom> <Box component="span" color="#7f99a2" >S/200 por hora</Box></Typography>
                        <Typography variant="subtitle2" gutterBottom> 
                            <Box display="flex" alignItems="center"  component="span" fontWeight="bold" color="#07a102" >
                                <Link className={classes.link} to="/perfil-artista/" > Reservar <ChevronRightIcon /> </Link> </Box>
                        </Typography>
                    </Box>
                </CardContent>
        </Card>
    );
}
 