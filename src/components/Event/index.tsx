import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

import {Props} from './types'; 

const Wrapper = styled.section`
	display: block;
	margin-bottom: 3rem;
`;

const EventDate = styled.span`
	background-color: var(--theme-dark-bg-highlighter);
	font-family: 'Roboto Mono', monospace;
	font-variation-settings: 'wght' 200;
	border-radius: 2px;
	padding: 2px 4px;
	font-size: 14px;
`;

const EventTitle = styled.h2`
	margin: 1rem 0;
`;

export default ({startDate, pageTitle, excerpt, slug}: Props) => (
	<Wrapper>
		<EventDate>{startDate}</EventDate>
		<EventTitle><Link to={slug}>{pageTitle}</Link></EventTitle>
		<div>{excerpt}</div>
	</Wrapper>
);