import React from "react"
import Layout from "../components/layout"
import BgImage from "../images/fondo_3.png"
import {graphql} from "gatsby"
import {
  Box,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import SEO from "../components/seo"
import HomeOption from '../components/HomeOption'

// export const query = graphql`
//   query MyQuery {
//     hasura {
//       profile {
//         name
//         id
//       }
//     }
//   }
// `
const Home = ({data}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <CardMedia className="backgroundImg" image={BgImage} />
        <Box  
          position="absolute" 
          left="50%" 
          top="10%" 
          left= {0}
          right = {0} >
        <Typography> 
          <Box
            component="span"
            display="block"
            fontSize={42}
            textAlign="center" 
            color="#fff" 
            position="relative" 
            mb={0}
            fontWeight={500}>¿ QUÉ BUSCAS HOY ? sldkfjasklj
            </Box>
            <Box 
              component="span"
              display="block"
              pb={12} 
              position="relative" 
              textAlign="center"
              color="#fff" 
              fontSize={18} 
              fontWeight={300} >Iniciemos esta aventura juntos</Box>
        </Typography>
        <HomeOption />
        </Box>
    </Layout>
  )
}

export default Home
