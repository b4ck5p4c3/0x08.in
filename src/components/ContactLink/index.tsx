import React from 'react';
import styled from 'styled-components';

import Icon from '../Icon';
import Brancher from '../Brancher';

import {Props} from './types';

const Wrapper = styled.div`
`;

const Link = styled.a`
	color: white;
`;

const Text = styled.span`
`;

export default ({src, href, title, name}: Props) => (
	<Wrapper>
		<Icon src={src} />
		<Brancher when={!!title} then={
			<Text>{`${title}: `}</Text>
		}/>
		<Link href={href} title={title} >
			{name}
		</Link>
	</Wrapper>
);
