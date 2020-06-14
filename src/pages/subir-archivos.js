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
import videoIcon from '../images/add_video.png'
import videoIconActive from '../images/add_video_active.png'
import albumIcon from '../images/add_album.png'
import albumIconActive from '../images/add_album_active.png'
import descIcon from '../images/add_desc.png'
import descIconActive from '../images/add_desc_active.png'
import AlertDialog from '../components/Modal/videomodal'
// import DialogDescription from '../components/Modal/descriptionModal'
// import DialogPhoto from '../components/Modal/uploadPhotoModal'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import BgImage from '../images/fondo_1.png'
import { Link} from 'gatsby'


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

    const CompleteBox =  <Box className="upload_checkcircle" width="100%" display="flex" justifyContent="flex-end" ><CheckCircleIcon /></Box>

    const classes = useStyles();

    const [isOpen, setIsOpen] = useState(false);
    const [setIsOpenDetail] = useState(false);
    const [setIsOpenPhoto] = useState(false)

    const [isVideoComplete, setIsVideoComplete] = useState(false)
    const [isAlbumComplete ] = useState(false)
    const [isDescriptionComplete] = useState(false)

    const handleOpenModal = () => {
        setIsOpen(true);
      };
    const handleOpenModalDescription = () => {
        setIsOpenDetail(true)
    };
    const handleOpenModalPhoto = () => {
        setIsOpenPhoto(true)
    }
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
                    <Box position="relative" padding={4} onClick={handleOpenModal} flexDirection="column"  borderRadius={16} bgcolor="#fff" width={320}  display="flex" alignItems="center" justifyContent="center" height={320} >
                       
                        {isVideoComplete ? CompleteBox : null}
                        {isVideoComplete ?  <img  width={180} alt="video" src={videoIconActive} /> : <img  width={180} alt="video" src={videoIcon} />}
                        <Typography  variant="h6" >
                            <Box fontSize={18} fontWeight={500} >Agregar video de portada</Box>
                        </Typography>
                    </Box>
                    <Box position="relative" padding={4} onClick={handleOpenModalPhoto} flexDirection="column"  borderRadius={16} bgcolor="#fff" width={320}  display="flex" alignItems="center" justifyContent="center" height={320} >
                        {isAlbumComplete ? CompleteBox : null}
                        {isAlbumComplete ? <img  width={180} alt="album" src={albumIconActive} /> : <img  width={180} alt="album" src={albumIcon} />}
                        <Typography>
                            <Box fontSize={18} fontWeight={500} >Agregar foto de perfil</Box>
                        </Typography>
                    </Box>
                    <Box  position="relative" padding={4} onClick={handleOpenModalDescription} flexDirection="column"  borderRadius={16} bgcolor="#fff" width={320}  display="flex" alignItems="center" justifyContent="center" height={320} >
                        {isDescriptionComplete ? CompleteBox: null}
                        {isDescriptionComplete ? <img  width={180} alt="description" src={descIconActive} /> : <img  width={180} alt="description" src={descIcon} />}
                        <Typography >
                            <Box fontSize={18} fontWeight={500} >Agregar descripción</Box>
                        </Typography>
                    </Box>
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