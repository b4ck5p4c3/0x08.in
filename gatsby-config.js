/**
 * Please note that the gatsby-*.js files (like gatsby-node.js) currently don't support TypeScript yet.
 *
 * See: https://www.gatsbyjs.com/docs/typescript/
 */

module.exports = {
  siteMetadata: {
    title: 'B4CKSP4CE',
    keywords: 'бэкспейс, бекспейс, бекспэйс, backspace, b4cksp4ce, хакспейс, хакспэйс, hackspace, хакерспэйс, хакерспейс, hackerspace'
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-remark-images',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
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
        name: 'page',
        path: `${__dirname}/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'wiki',
        path: `${__dirname}/content/wiki`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'event',
        path: `${__dirname}/content/events`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'project',
        path: `${__dirname}/content/projects`
      }
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/content`
      }
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/pages`
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        defaultLayouts: {
          default: require.resolve('./src/components/Layout/index.tsx'),
          wiki: require.resolve('./src/components/Layout/Wiki/index.tsx'),
          event: require.resolve('./src/components/Layout/Event/index.tsx'),
          project: require.resolve('./src/components/Layout/Project/index.tsx')
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              wrapperStyle: 'margin-left: 0;',
              withWebp: {
                quality: 80
              }
            },
          },
        ],
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
