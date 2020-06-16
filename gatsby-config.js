module.exports = {
  siteMetadata: {
    title: `Musiclink`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    // {
    //   resolve: 'gatsby-source-graphql', 
    //   options: {
    //     typeName: 'HASURA',
    //     fieldName: 'hasura', // <- fieldName under which schema will be stitched
    //     createLink: () =>
    //       createHttpLink({
    //         uri: `https://musiclink-db.herokuapp.com/v1/graphql`, // <- Configure connection GraphQL url
    //         headers: {},
    //         fetch,
    //       }),
    //     refetchInterval: 10, // Refresh every 10 seconds for new data
    //   },
    // },
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
