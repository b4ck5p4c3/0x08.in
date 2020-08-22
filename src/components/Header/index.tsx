import React from 'react';
import {Link} from 'gatsby';

import Menu from '../Menu';

import { HeaderWrapper, HeaderInner, SiteTitle } from './styled';
import { Props } from './types';

const Header = ({ title }: Props) => (
  <HeaderWrapper>
    <HeaderInner>
      <Link to='/'>
        <SiteTitle>{title}</SiteTitle>
      </Link>
      <Menu />
    </HeaderInner>
  </HeaderWrapper>
);

export default Header;
