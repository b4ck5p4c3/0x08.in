import React from 'react';
import styled from 'styled-components';

import {Props} from './types';

const Icon = styled.img<{size: string}>`
	vertical-align: middle;	
	margin: 2px;
	width: 20px;
`;

const DEFAULT_SIZE = '20';

export default ({src, size = DEFAULT_SIZE}: Props) => (
	<Icon src={src} size={size} />
);
