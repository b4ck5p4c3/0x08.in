import React from 'react';
import styled from 'styled-components';
import {StaticQuery, graphql} from 'gatsby';

import Head from '../Head';
import Header from '../Header';
import Footer from '../Footer';

import {Props, RootProps, QueryData} from './types';

const StyledRoot = styled.div`
  min-height: calc(100vh - var(--footer-height));
  background-color: var(--theme-dark-bg-light);
  color: white;
`;

const StyledContent = styled.article`
  font-family: 'Roboto Mono', 'monospace';
  font-variation-settings: 'wght' 350;
  padding: 30px 40px;
  line-height: 20px;
  max-width: 1024px;
  font-size: 15px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    max-width: none;
  }
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
      <StyledRoot>
        <Head {...rest} />
        <Header {...rest} />
        <StyledContent>
          {children}
        </StyledContent>
      </StyledRoot>
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
