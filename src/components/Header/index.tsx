import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

import Menu from '../Menu';
import Logo from '../Logo';

import {Props} from './types';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-flow: nowrap row;
  background-color: var(--rebecca-purple);
`;

const Header = ({siteMetadata}: Props) => (
  <HeaderWrapper>
    <Logo title={siteMetadata.title} />
    <Menu />
  </HeaderWrapper>
);

export default Header;
