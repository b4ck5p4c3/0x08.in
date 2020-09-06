import React from 'react';
import styled from 'styled-components'
import {parse, compareDesc} from 'date-fns'
import {graphql, useStaticQuery} from 'gatsby';

import Event from '../Event';

import {EVENT_DATE_FORMAT} from '../../constants';
import {EventsQuery, EventInfo} from '../../types';

const List = styled.section`
	margin-top: 2rem;
`;

export default () => {
	const data = useStaticQuery(eventsQuery);
	const events = extractEvents(data);
	const sorted = sortByStart(events);

	return (
		<List>
			{sorted.map((event) => <Event {...event} />)}
		</List>
	);
};

const eventsQuery = graphql`
 query events {
		allFile(
			filter: {
				sourceInstanceName: {
					eq: "event"
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
					childMdx {
						frontmatter {
							pageTitle
							startDate
							endDate
						}
						excerpt
						slug
					}
				}
			}
		}
	}
`;

const extractEvents = ({allFile: {edges}}: EventsQuery): EventInfo[] => edges.map(
	({
		node: {
			childMdx:{
				slug = '',
				excerpt = '',
				frontmatter: {
					pageTitle = '',
					startDate = '',
					endDate = ''
				} = {}
			} = {}
		}
	}) => ({
		slug,
		excerpt,
		pageTitle,
		startDate,
		endDate
	})
);

const sortByStart = (events: EventInfo[]) => events.sort((a, b) => {
	const dateA = parseEventDate(a.startDate);
	const dateB = parseEventDate(b.startDate);

	if (!dateA) {
		return 0;
	}

	if (!dateB) {
		return 0;
	}

	return compareDesc(dateA, dateB);
});

const parseEventDate = (eventDate?: string) =>
	eventDate && parse(eventDate, EVENT_DATE_FORMAT, new Date);
