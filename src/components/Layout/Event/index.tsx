import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';

import '../../../assets/normalize.css';
import '../../../assets/variables.css';
import '../../../assets/reset.css';

import Header from '../../Header';

import { Props } from '../types';

export default ({ children }: Props) => (
  <StaticQuery
    query={graphql`
      query EventsTitleQuery {
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
        <Header title='EVNT' />
        {children}
      </>
    )}
  />
);
