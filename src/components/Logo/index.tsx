import React from 'react';
import Link from 'gatsby-link'; 
import styled from 'styled-components';

import logo from '../../assets/logo.svg';

import {Props} from './types';

const StyledTitle = styled.span`
	font-family: 'Special Elite', cursive;
	color: var(--backspace-yellow);
	margin-left: 15px;
	line-height: 80px;
	font-size: 60px;
`;

const StyledLink = styled(Link)`
	display: flex;
`;

export default ({title}: Props) => (
	<StyledLink to='/' title={title}>
		<img src={logo} alt={title} />
		<StyledTitle>{title}</StyledTitle>
	</StyledLink>
);