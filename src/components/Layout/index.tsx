import React from 'react';
import styled from 'styled-components';
import {MDXProvider} from '@mdx-js/react';
import {StaticQuery, graphql} from 'gatsby';

import Code from '../Code';
import Head from '../Head';
import Header from '../Header';
import Footer from '../Footer';
import Content from '../Content';

import {Props, RootProps, QueryData} from './types';

const Page = styled.main`
  min-height: calc(100vh - var(--footer-height));
  background-color: var(--theme-dark-bg-light);
  color: white;
`;

const DefaultLayout = ({children, ...rest}: RootProps) => (
  <>
    <Head {...rest} />
    <Header {...rest} />
    <Page>
      <Content {...rest} >
        {children}
      </Content>
    </Page>
    <Footer {...rest} />
  </>
);


/**
 * frontmatter data would be injected to props.pageContext automaticaly by GraphQL
 * @see https://www.gatsbyjs.com/docs/adding-markdown-pages/#frontmatter-for-metadata-in-markdown-files
 */
const defaultLayoutMeta = graphql`
  query defaultLayoutMeta {
    site {
      siteMetadata {
        root
        title
        keywords
        gitHubProject
        gitHubBranch
      }
    }
    allMdx {
      edges {
        node {
          frontmatter {
            description
            keywords
            starts
            ends
            anchors
          }
        }
      }
    }
  }
`;



const Pre = (props: any) => (
  <div {...props} />
);

const mdxComponents = {
  code: Code,
  pre: Pre
};

export default (props: Props) => (
  <StaticQuery
    query={defaultLayoutMeta}
    render={({site}: QueryData) => (
      <MDXProvider components={mdxComponents}>
        <DefaultLayout
          {...props}
          siteMetadata={site.siteMetadata}
        />
      </MDXProvider>
    )}
  />
);
