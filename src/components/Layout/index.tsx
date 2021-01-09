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

export default ({children, ...props}: Props) => (
  <StaticQuery
    query={metadataQuery}
    render={({...query}: MetadataQuery) => {
      const {
        pageContext
      } = props;

      const {
        site: {
          siteMetadata
        },
        file: {
          sourceInstanceName
        }
      } = query;

      const commonProps = {
        pageContext,
        siteMetadata,
        sourceInstanceName
      };

      return (
        <MDXProvider components={mdxComponents}>
          <Head {...commonProps} />
          <Header {...commonProps} />
          <Page>
            <Content {...commonProps} >
              {children}
            </Content>
          </Page>
          <Footer {...commonProps} />
        </MDXProvider>
      );
    }}
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
    file {
      sourceInstanceName
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
