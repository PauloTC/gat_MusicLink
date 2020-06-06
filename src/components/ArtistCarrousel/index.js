import React, { useState, Fragment } from 'react';
import ItemsCarousel from 'react-items-carousel';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import ArtistCard from '../ArtistCard';

export default function ArtistCarrousel() {
	const [ activeItemIndex, setActiveItemIndex ] = useState(0);
	const chevronWidth = 0;
	return (
        <Fragment>
            <Box  maxWidth={1680} margin="auto" >
                <Typography variant="h5" gutterBottom> 
                    <Box fontWeight={600} textAlign="left" mt={15} mb={5} >ROCK</Box>
                </Typography>
                <div style={{ padding: `0 ${chevronWidth}px` }}>
                    <ItemsCarousel
                        requestToChangeActive={setActiveItemIndex}
                        activeItemIndex={activeItemIndex}
                        numberOfCards={5}
                        gutter={20}
                        leftChevron={<button>{'<'}</button>}
                        rightChevron={<button>{'>'}</button>}
                        outsideChevron
                        chevronWidth={chevronWidth}
                    >
                        <ArtistCard />
                        <ArtistCard />
                        <ArtistCard />
                        <ArtistCard />
                        <ArtistCard />
                        <ArtistCard />
                        <ArtistCard />
                        <ArtistCard />
                    </ItemsCarousel>
                </div>
            </Box>
        </Fragment>
	);
}
