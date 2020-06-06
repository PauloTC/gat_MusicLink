import React from 'react';
import Layout from '../components/layout'

import { Box } from '@material-ui/core';

import  ArtistCarrousel from '../components/ArtistCarrousel/'
import PrimaryBanner from '../components/PrimaryBanner'

const SearchPage = () => {
    return(
        <Layout>
            <Box mb={16}>
                <PrimaryBanner />
                <Box position="relative" >
                    <ArtistCarrousel />
                    <ArtistCarrousel />
                    <ArtistCarrousel />
                </Box>
            </Box>
        </Layout>
    )
}

export default SearchPage