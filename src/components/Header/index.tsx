import React from 'react';

import Container from '../Container';
import { HeaderWrapper, HeaderInner, SiteTitle, Navigation } from './styled';

interface IHeader {
  title: string;
  navigation: JSX.Element[];
}

const Header = ({ title, navigation }: IHeader) => (
  <HeaderWrapper>
    <Container>
      <HeaderInner>
        <SiteTitle>{title}</SiteTitle>
        {navigation && <Navigation>{navigation}</Navigation>}
      </HeaderInner>
    </Container>
  </HeaderWrapper>
);

Header.defaultProps = {
  title: null,
  navigation: null,
};

export default Header;
