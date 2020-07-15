module.exports = {
  siteMetadata: {
    title: `Musiclink`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql', 
      options: {
        typeName: 'HASURA',
        fieldName: 'hasura',
        url: `https://musiclink-db.herokuapp.com/v1/graphql`,
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1FTTJORE5ETlVJM1JUbEJOVGd6T0RFeVF6VTRRVGsxUVVKRVJrSXlSalU1TVVSRU1FVXdSQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6Imdvb2dsZS1vYXV0aDJ8MTEyNzcxNDQwNTI5OTQ4MzAzMjY3In0sImdpdmVuX25hbWUiOiJQYXVsbyIsImZhbWlseV9uYW1lIjoiVGVqYWRhIiwibmlja25hbWUiOiJwYXVsb3RlamFkYS4xMjNhIiwibmFtZSI6IlBhdWxvIFRlamFkYSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHakIyNGFfb1ZKNElONzFRajJmT3BBenkyT0dHX3RyOXlqOWlwdF8yZyIsImxvY2FsZSI6ImVzLTQxOSIsInVwZGF0ZWRfYXQiOiIyMDIwLTA2LTE4VDIyOjU4OjIwLjMyNFoiLCJpc3MiOiJodHRwczovL2Rldi1wdmdodnYtbS5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTI3NzE0NDA1Mjk5NDgzMDMyNjciLCJhdWQiOiJ1TjhORWc0NXNOTTA4OEk5bjNCSjVvNlhpWG9EU2padCIsImlhdCI6MTU5MjUyMTEwMSwiZXhwIjoxNTkyNTU3MTAxLCJhdF9oYXNoIjoiVDFnUVJiSHhHQ3pEcGtQRy1xTEFnUSIsIm5vbmNlIjoiSUwxUEsuVkw3dWFPMmN3d1hfM01TLmVCUmRPRDhuUS4ifQ.FUPzU8n0uJ17nzoZESWtX2i4kjO3NnKbZjmVhRl0sBhbzWyGMJJdVvlzLpNGhywNDY8fUcSK0d2rpSIeAVXT9e0osPysWRkas3eylA2OOxOyekFT1CjIYOYjXyO-7vft81RE_G8R8r5VO3Bn3idZdpOIK4H-xYabB211UFJxvdHMXsruk04P6NxVKf4jUT34G4rkKu9Byat_cW6JYtB68xJv6q_BbYk_ql24DoudXIj72fklzsxF9V2x3I3jKDqoTKa4KKGvptV9ianNx_wrgQcKWwbIyui7frY5BQ09uzCyXz0cCXL1Lwkg3cVlXECzFTkLK3Nnk0Tc8b2TGNH3QQ`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto\:300,400,400i,700, 900`,
        ],
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
