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
  padding-top: 30px;
  justify-content: end;
  flex-direction: column;
  height: var(--header-height);
  line-height: var(--header-line-height);
  background-color: var(--theme-dark-bg-dark);
`;

const Header = ({siteMetadata}: Props) => (
  <Wrapper>
    <Shell title={siteMetadata.title} />
    <Menu />
  </Wrapper>
);

export default Header;
