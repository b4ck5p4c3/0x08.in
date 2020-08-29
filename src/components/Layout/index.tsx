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

const Page = styled.div`
  min-height: calc(100vh - var(--footer-height));
  background-color: var(--theme-dark-bg-light);
  color: white;
`;

const defaultLayoutMeta = graphql`
  query defaultLayoutMeta {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const DefaultLayout = ({children, ...rest}: RootProps) => (
  <main>
    <Page>
      <Head {...rest} />
      <Header {...rest} />
      <Content {...rest} >
        {children}
      </Content>
    </Page>
    <Footer {...rest} />
  </main>
);

const components = {
  code: Code,
  pre: (props: any) => (<div {...props} />)
};

export default (props: Props) => (
  <StaticQuery
    query={defaultLayoutMeta}
    render={({site}: QueryData) => (
      <MDXProvider components={components}>
        <DefaultLayout
          {...props}
          siteMetadata={site.siteMetadata}
        />
      </MDXProvider>
    )}
  />
);
