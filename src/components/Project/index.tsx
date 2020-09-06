import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

import {Props} from './types'; 

const Wrapper = styled.section`
	display: block;
	margin-bottom: 3rem;
`;

const ProjectTitle = styled.h2`
	margin: 1rem 0;
`;

export default ({pageTitle, excerpt, slug}: Props) => (
	<Wrapper>
		<ProjectTitle><Link to={slug}>{pageTitle}</Link></ProjectTitle>
		<div>{excerpt}</div>
	</Wrapper>
);