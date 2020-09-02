import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

import Menu from '../Menu';
import Shell from '../Shell';

import {Props} from './types';

export const Wrapper = styled.header`
  top: 0;
  display: flex;
  position: sticky;
  justify-content: end;
  flex-direction: column;
  line-height: var(--line-height-header);
  background-color: var(--theme-dark-bg-dark);
`;

export default ({siteMetadata}: Props) =>  (
  <Wrapper>
    <Shell title={siteMetadata.title} />
    <Menu />
  </Wrapper>
);
