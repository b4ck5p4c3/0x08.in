/**
 * Please note that the gatsby-*.js files (like gatsby-node.js) currently don't support TypeScript yet.
 *
 * See: https://www.gatsbyjs.com/docs/typescript/
 */

module.exports = {
  siteMetadata: {
    title: 'B4CKSP4CE',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx']
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'B4CKSP4CE',
        short_name: '0x08',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/gatsby-icon.png' // This path is relative to the root of the site.
      }
    }
    // 'gatsby-plugin-offline' is an optional plugin which enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
  ]
};
