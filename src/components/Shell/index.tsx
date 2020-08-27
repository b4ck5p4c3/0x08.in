import React from 'react';
import Link from 'gatsby-link'; 
import styled from 'styled-components';

import logo from '../../assets/img/logo.svg';

import {Props} from './types';

const Wrapper = styled.div`
	font-family: 'Special Elite', cursive;
	font-size: 50px;
	display: flex;
`;


const LogoLink = styled(Link)`
	display: flex;
`;

const User = styled(Link)`
	color: var(--typo-backspace-yellow);
	margin-left: 5px;

	@media screen and (max-width: 1024px) {
		display: none;
	}
`;

const Dir = styled(Link)`
	color: var(--typo-just-inactive);

	&:hover {
		color: var(--typo-mickey-purple);
	}
`;

const Dollar = styled(Link)`
	margin-left: 20px;
	color: var(--typo-just-inactive);

	&:hover {
		color: green;
	}
`;

const Wiki = styled(Link)`
	margin-left: 20px;
	color: var(--typo-just-inactive);

	&:hover {
		color: var(--typo-special-blue);
	}
`;

export default ({title}: Props) => (
	<Wrapper>
		<LogoLink to='/' title='⌫'>
			<img src={logo} alt={title} />
		</LogoLink>
		<User to='/' title={title}>{title}:</User>
		<Dir to='/' title='home'>~</Dir>
		<Dollar to='/fees' title='$upport us'>$</Dollar>
		<Wiki to='/wiki' title={title + ' W1KI'}>cd ~/W1KI</Wiki>
	</Wrapper>
);
