import './index.scss'
import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import profileImg from '../images/profile.jpg'
import Footer from '../components/footer'
import { Typography, Box, Link, Grid, Divider } from "@material-ui/core"

import Rate from '../images/rate_active.png'
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import { makeStyles } from "@material-ui/core/styles"
import Layout from '../components/layout'


const variables = [
  {
    label: "Nombres",
    value: "Geomar Ventura Gonzales"
  },
  {
    label: "Email",
    value: "dgventura28@gmail.com"
  },
  {
    label: "Fecha de nacimiento",
    value: "28/12/1994"
  },
  {
    label: "Pais",
    value: "Perú (Lima)"
  },
  {
    label: "Cel",
    value: "984 360 201"
  }
]

const useStyles = makeStyles({
  image: {
    marginTop: "-70px",
    borderRadius: "100%"
  },
  figureBanner: {
    paddingTop: 130,
    background: '#000',
    overflow: 'hidden'
  }
})

const Profile = () => {
    const classes = useStyles()
    return(
      <Fragment>
        <Layout>

          <figure className={classes.figureBanner} >
            <img alt="banner"  src="https://picsum.photos/2000/200" />
            {/* <PhotoCameraOutlinedIcon /> */}
          </figure>
          <Container maxWidth="xl" >
            <Box mb={10} >
              <Grid container  >
                <Grid container justify="center" item md={2}>
                  <figure className={classes.figure}>
                    <img alt="profile" className={classes.image} height="188" width="188" src={profileImg} />
                    {/* <PhotoCameraOutlinedIcon /> */}
                  </figure>
                </Grid>
                <Grid item  md={4}>
                  <Box mt={8} >
                    <Typography variant="h4" >
                        <Box component="span" fontWeight="bold" >Mi perfil</Box>
                    </Typography>
                    {
                      variables.map((item)=> {
                        return (
                          <Box display="flex" py={3} my={2}  borderBottom="1px solid #b0c0ca"  justifyContent="space-between"  >
                            <Typography variant="subtitle1" >
                                <Box component="span" fontWeight="bold" >{ item.label }</Box>
                            </Typography>
                            <Typography variant="subtitle2" >
                                <Box  width={200}  component="div" color="#5f5f5f" >{ item.value }</Box>
                            </Typography>
                            <Divider />
                          </Box>
                        )
                      })
                    }
                  </Box>
                </Grid>
                <Grid item container alignItems="center" md={6}>
                  <Box ml={15} mt={8} width={500}  p={4} boxShadow="0 46px 113px -11px rgba(60, 89, 89, 0.22)"  >
                    <h3>¿Te gusta Music Link</h3>
                    <p>Tu opinión es importante para que Music Link siga</p>
                    <p> brindandote un mejor experiencia musical. </p>
                    <div className="profile_rate--box" >
                      <img height="60" width="60" src={Rate} alt="rate" />
                      <img height="60" width="60" src={Rate} alt="rate" />
                      <img height="60" width="60" src={Rate} alt="rate" />
                      <img height="60" width="60" src={Rate} alt="rate" />
                      <img height="60" width="60" src={Rate} alt="rate" />
                    </div>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Layout>
      </Fragment>
    )
}

export default Profile