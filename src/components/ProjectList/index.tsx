import React from 'react';
import styled from 'styled-components'
import {parse, compareDesc} from 'date-fns'
import {graphql, useStaticQuery} from 'gatsby';

import ProjectItem from '../ProjectItem';

import {PROJECT_DATE_FORMAT} from '../../constants';
import {ProjectQuery, ProjectInfo} from '../../types';

const List = styled.section`
	margin-top: 1rem;
`;

export default () => {
	const data = useStaticQuery(projectsQuery);
	const projects = extractProjects(data);
	const sorted = sortByModified(projects);

	return (
		<List>
			{sorted.map((project) => <ProjectItem {...project} />)}
		</List>
	);
};

const projectsQuery = graphql`
 query projects {
		allFile(
			filter: {
				sourceInstanceName: {
					eq: "project"
				},
				extension: {
					in: "md"
				},
				name: {
					glob: "index"
				}
			}
		)
		{
			edges {
				node {
					modifiedTime
					childMdx {
						frontmatter {
							pageDescription
							pageTitle
						}
						slug
					}
				}
			}
		}
	}
`;

const extractProjects = ({allFile: {edges}}: ProjectQuery): ProjectInfo[] => edges.map(
	({
		node: {
			modifiedTime,
			childMdx:{
				slug = '',
				frontmatter: {
					pageDescription = '',
					pageTitle = '',
				} = {}
			} = {}
		}
	}) => ({
		slug,
		pageDescription,
		pageTitle,
		modifiedTime
	})
);

const sortByModified = (projects: ProjectInfo[]) => projects.sort((a, b) => {
	const dateA = parseProjectDate(a.startDate);
	const dateB = parseProjectDate(b.startDate);

	if (!dateA) {
		return 0;
	}

	if (!dateB) {
		return 0;
	}

	return compareDesc(dateA, dateB);
});

const parseProjectDate = (eventDate?: string) =>
	eventDate && parse(eventDate, PROJECT_DATE_FORMAT, new Date);
