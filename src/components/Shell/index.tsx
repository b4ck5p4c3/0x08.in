import React from 'react';

import logo from '../../assets/img/logo.svg';

import {Wrapper, LogoLink, User, Dir, Dollar, Wiki} from './styled';
import {Props} from './types';

export default ({siteTitle}: Props) => (
	<Wrapper>
		<LogoLink to='/' title='⌫'>
			<img src={logo} alt={siteTitle} />
		</LogoLink>
		<User to='/' title={siteTitle}>{siteTitle}:</User>
		<Dir to='/' title='home'>~</Dir>
		<Dollar to='/fees' title='$upport us'>$</Dollar>
		<Wiki to='/wiki' title={siteTitle + ' W1KI'}>cd ~/W1KI</Wiki>
	</Wrapper>
);
