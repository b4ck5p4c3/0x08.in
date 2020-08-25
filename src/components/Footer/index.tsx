import React from 'react';
import styled from 'styled-components';

import {Props} from './types';

const Wrapper = styled.footer`
	background-color: var(--theme-dark-bg-dark);
	color: var(--typo-backspace-yellow);
	font-family: Helvetica, sans-serif;
	line-height: var(--footer-height);
	height: var(--footer-height);
	text-align: center;
	position: sticky;
	bottom: 0;
`;

export default (props: Props) => (
	<Wrapper><div>Just a footer</div></Wrapper>
)