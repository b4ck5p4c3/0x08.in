import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../../Header';

import { Props } from '../types';

export default ({ children }: Props) => (
  <StaticQuery
    query={graphql`
      query ProjectsTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Sample'
            },
            {
              name: 'keywords',
              content: 'sample, something'
            }]
          }
        >
          <html />
        </Helmet>
        <Header title='PRJ' />
        {children}
      </>
    )}
  />
);
