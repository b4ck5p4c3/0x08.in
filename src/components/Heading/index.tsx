import React from 'react';
import styled from 'styled-components';

import Brancher from '../Brancher';

import {Props} from './types';

const Heading = styled.section<{hasAnchors: boolean}>`
  background-color: var(--theme-dark-bg-slightly);
	padding: 10px 10px 25px 25px;
  margin-bottom: 20px;
  
`;

const Title = styled.h1`
  line-height: 2rem;
`;

const Description = styled.p`
  font-style: italic;
`;

export default ({hasAnchors, frontmatter, sourceInstanceName}: Props) => {
	const {
		pageTitle,
		pageDescription,
		startDate,
		endDate
	} = frontmatter;

	const isEvent = sourceInstanceName === 'event';
	const hasPageDescription = Boolean(pageDescription);
	
	return (
		<Heading hasAnchors={hasAnchors}>
			<Title>{pageTitle}</Title>
			<Brancher
				when={hasPageDescription}
				then={
					<Description>
						{pageDescription}
					</Description>
				}
			/>
			{/* <Brancher
				when={isEvent}
				then={
					<EventDate frontmatter={frontmatter} />
				}
			/> */}
		</Heading>
	);
};