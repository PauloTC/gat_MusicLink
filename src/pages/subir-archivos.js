import React, { useState }  from 'react'
import Layout from '../components/layout'
import { 
    Typography, 
    Box,  
    Button,
    CardMedia } from '@material-ui/core'

import {
    makeStyles
  } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import AlertDialog from '../components/Modal/videomodal'
import BgImage from '../images/fondo_1.png'
import { Link} from 'gatsby'
import VideoModal from '../components/Modal/videomodal'
import UploadPhotoDialog from '../components/Modal/DropzoneModal'
import DescriptionModal from '../components/Modal/DescriptionModal'



const useStyles = makeStyles({
    title:{
        color: '#fff',
        fontWeight: 'bold'
    },
    label: {
        color: '#fff'
    },
    formControl : {
        width: 350,
        textAlign: 'left',
    },
    button: {
        width: 350,
        height: 40,
        cursor: 'pointer',
        padding: 0
    },
    to: {
        color: "#fff !important",
        textDecoration: "none",
        textTransform: "capitalize",
        width: '100%'
    },
    layout: {
      height: '100vh'
    },
    container: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
});

const Upload = ()=> {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const [isVideoComplete, setIsVideoComplete] = useState(false)
    const [isAlbumComplete ] = useState(false)
    const [isDescriptionComplete] = useState(false)

    const handleCloseModal = () => {
        setIsOpen(false);
        setIsVideoComplete(true)
    };

    return (
        <Layout className={classes.layout}  >
            <CardMedia  className="backgroundImg"  image={ BgImage } />
            <Container  className={ classes.container }  maxWidth="xl" >
                <Box textAlign="center" position="relative" >
                  <Typography  className={ classes.title } variant="h4" >
                      <Box mb={6} >¡Estás a poco de compartir tu talento!</Box>
                      <Box fontWeight={300} fontSize={24} color="#fff">El siguiente paso es agregar tu material</Box>
                      <Box fontWeight={300} fontSize={24} color="#fff">para ser parte de la familia <span className="upload_text--green" >Musiclink.</span></Box>
                  </Typography>
                </Box>
                <Box maxWidth={1200} width="100%" display="flex" mt={12} mx="auto" justifyContent="space-between" >
                    <VideoModal />
                    <UploadPhotoDialog />
                    <DescriptionModal />
                </Box>
                <Box width={350} textAlign="center" mt={12}  >
                    <Button fullWidth variant="contained" color="primary"  >
                      <Link to="tipo-musica" >Listo</Link>
                    </Button>
                </Box>
                {isVideoComplete && isAlbumComplete && isDescriptionComplete ? <Button className="upload_btn "  variant="primary" >Listo</Button> : null }       
            </Container>
            <AlertDialog  isOpen={isOpen} onClose={handleCloseModal} />
            {/* <DialogDescription isOpen={isOpenDetail} onClose={handleCloseModalDetail}  />
            <DialogPhoto isOpen={isOpenPhoto} onClose={ handleCloseModalPhoto } /> */}
        </Layout>
    )
}

export default Upload