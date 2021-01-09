/**
 * Please note that the gatsby-*.js files (like gatsby-node.js) currently don't support TypeScript yet.
 *
 * See: https://www.gatsbyjs.com/docs/typescript/
 */

module.exports = {
  siteMetadata: {
    siteRoot: 'https://0x08.in',
    siteTitle: 'B4CKSP4CE',
    siteDescription: 'Пространство для всех, кто интересуется технологиями, искусством, дизайном, разработкой, проектированием и созданием вещей своими руками.',
    siteKeywords: 'бэкспейс, бекспейс, бекспэйс, backspace, b4cksp4ce, хакспейс, хакспэйс, hackspace, хакерспэйс, хакерспейс, hackerspace, мастерская, workshop, shop',
    gitHubProject: 'b4ck5p4c3/0x08.in',
    gitHubBranch: 'feature/new-site',
    streetAddress: 'Ланское шоссе, 14к1',
    addressLocality: 'Санкт-Петербург',
    postalCode: '197343',
    email: 'info@0x08.in'
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-remark-images',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'B4CKSP4CE Hackerspace',
        short_name: '0x08',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/img/logo.svg' // This path is relative to the root of the site.
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
          default: require.resolve('./src/components/Layout/index.tsx')
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
          }
        ],
      }
    }
    // 'gatsby-plugin-offline' is an optional plugin which enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
  ]
};
