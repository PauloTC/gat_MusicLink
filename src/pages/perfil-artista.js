import React from 'react';
import Layout from '../components/layout'
import ArtistDesciption from '../components/ArtisDescription/'
import { Container, Grid } from '@material-ui/core'
import ArtistBannerVideo from '../components/ArtistBannerVideo'
import ArtistContract from '../components/ArtistContract/'

const ArtistProfile =() => (
    <Layout>
        <ArtistBannerVideo />
        <Container maxWidth="xl" >
            <Grid container  justify="space-between" >
                <Grid md={5} item  >
                    <ArtistDesciption />
                </Grid>
                <Grid  md={5}   item >
                    <ArtistContract />
                </Grid>
            </Grid>
        </Container>

    </Layout>
)

export default ArtistProfile