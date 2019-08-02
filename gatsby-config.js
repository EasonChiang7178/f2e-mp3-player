module.exports = {
  pathPrefix: "/f2e-mp3-player",
  siteMetadata: {
    title: `Music Player`,
    description: `Designed by Tia`,
    author: `@EasonChiang7178`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mp3`,
        path: `${__dirname}/src/mp3`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lists`,
        path: `${__dirname}/src/lists`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `music-player`,
        short_name: `mp3-player`,
        start_url: `/`,
        background_color: `#FFF498`,
        theme_color: `#F5CD40`,
        display: `minimal-ui`,
        icon: `src/images/mp3-player-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
