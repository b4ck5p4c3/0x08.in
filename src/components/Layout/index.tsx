import React, { ReactChild } from 'react';
import styled from 'styled-components';
import {StaticQuery, graphql} from 'gatsby';

import Head from '../Head';
import Header from '../Header';
import Footer from '../Footer';
import Content from '../Content';

import {Props, RootProps, QueryData} from './types';

const Root = styled.div`
  min-height: calc(100vh - var(--footer-height));
  background-color: var(--theme-dark-bg-light);
  color: white;
`;

const defaultLayoutQuery = graphql`
  query defaultLayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const DefaultRoot = (props: RootProps) => {
  const {children, ...rest} = props;

  return (
    <>
      <Root>
        <Head {...rest} />
        <Header {...rest} />
        <Content {...props} />
      </Root>
      <Footer {...rest} />
    </>
  )
};

export default (props: Props) => (
  <StaticQuery
    query={defaultLayoutQuery}
    render={({site}: QueryData) => (
      <DefaultRoot
        {...props}
        siteMetadata={site.siteMetadata}
      />
    )}
  />
);
