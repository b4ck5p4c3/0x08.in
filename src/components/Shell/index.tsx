import React from 'react';

import logo from '../../assets/img/logo.svg';

import {Wrapper, LogoLink, Image, Title, Dollar} from './styled';
import {Props} from './types';

export default ({siteTitle}: Props) => (
	<Wrapper>
		<LogoLink to='/' title={siteTitle}>
			<Image src={logo} alt={siteTitle} />
			<Title>{siteTitle}</Title>
		</LogoLink>
		<Dollar to='/fees' title='$upport us'>$</Dollar>
	</Wrapper>
);
