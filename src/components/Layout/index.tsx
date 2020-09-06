import React from 'react';
import styled from 'styled-components';
import {MDXProvider} from '@mdx-js/react';
import {StaticQuery, graphql} from 'gatsby';

import Code from '../Code';
import Head from '../Head';
import Header from '../Header';
import Footer from '../Footer';
import Content from '../Content';

import {MetadataQuery} from '../../types';
import {Props} from './types';

const Page = styled.main`
  background-color: var(--theme-dark-bg-light);
  min-height: 95vh;
  color: white;
`;

const Pre = (props: any) => (
  <div {...props} />
);

const mdxComponents = {
  code: Code,
  pre: Pre
};

export default ({children, ...rest}: Props) => (
  <StaticQuery
    query={metadataQuery}
    render={({site}: MetadataQuery) => (
      <MDXProvider components={mdxComponents}>
        <Head {...site} {...rest} />
        <Header {...site} {...rest} />
        <Page>
          <Content {...site} {...rest}  >
            {children}
          </Content>
        </Page>
        <Footer {...site} {...rest} />
      </MDXProvider>
    )}
  />
);

const metadataQuery = graphql`
  query metatada {
    site {
      siteMetadata {
        siteRoot
        siteTitle
        siteKeywords
        gitHubProject
        gitHubBranch
        streetAddress
        addressLocality
        postalCode
        email
      }
    }
    allMdx {
      edges {
        node {
          frontmatter {
						pageTitle
            pageDescription
            pageKeywords
            startDate
            endDate
            anchors
            covers
          }
        }
      }
    }
  }
`;
