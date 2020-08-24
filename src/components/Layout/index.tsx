import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';

import '../../assets/normalize.css';
import '../../assets/variables.css';
import '../../assets/reset.css';

import Head from '../Head';
import Header from '../Header';

import { Props, RootProps, QueryData } from './types';

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
      <Head {...rest} />
      <Header {...rest} />
      {children}
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
