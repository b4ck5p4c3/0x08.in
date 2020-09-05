import React from 'react';
import styled from 'styled-components';
import {StaticQuery, graphql} from 'gatsby';

import Menu from '../Menu';
import Shell from '../Shell';

import {Props, Query} from './types';

export const Wrapper = styled.header`
  top: 0;
  display: flex;
  position: sticky;
  justify-content: end;
  flex-direction: column;
  line-height: var(--line-height-header);
  background-color: var(--theme-dark-bg-dark);
`;

const metadata = graphql`
  query headerMetadataQuery {
    site {
      siteMetadata {
        siteRoot
        siteTitle
        gitHubProject
        gitHubBranch
      }
    }
  }
`;

export default (props: Props) =>  (
  <StaticQuery
    query={metadata}
    render={({site}: Query) => (
      <Wrapper>
        <Shell siteTitle={site.siteMetadata.siteTitle} />
        <Menu />
      </Wrapper>
    )}
  />
);
