/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Moonlet - A Gatsby Design Portfolio`,
    description: `Gatsby-based portfolio app utilizing a full-width grid and large images.`,
    author: `Tiotype`,
    siteUrl: `https://moonlet.netlify.app`,
    image: `/images/share.jpg`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Moonlet`,
        short_name: `MO`,
        start_url: `/`,
        background_color: `#ffff00`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/assets/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Recursive:300,400,500,600,700,800,900"],
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
  ],
}
