import React from 'react';
import styled from 'styled-components';

import Icon from '../Icon';
import Brancher from '../Brancher';

import {Props} from './types';

const IconLink = styled.a`
	opacity: 0.6;
	color: white;

	&:hover {
		opacity: 1;
	}
`;

export default ({src, href, title}: Props) => (
	<IconLink href={href} title={title} >
		<Icon src={src} />
	</IconLink>
);
