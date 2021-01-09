import React from 'react';
import styled from 'styled-components'
import {parse, compareDesc} from 'date-fns'
import {graphql, useStaticQuery} from 'gatsby';

import EventItem from '../EventItem';

import {EVENT_DATE_FORMAT} from '../../constants';
import {EventsQuery, EventInfo} from '../../types';

const List = styled.div`
	margin-top: 2rem;
`;

export default () => {
	const data = useStaticQuery(eventsQuery);
	const events = extractEvents(data);
	const sorted = sortByStart(events);

	return (
		<List>
			{sorted.map((event) => <EventItem {...event} />)}
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
							pageDescription
							pageTitle
							startDate
							endDate
						}
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
				frontmatter: {
					pageDescription = '',
					pageTitle = '',
					startDate = '',
					endDate = ''
				} = {}
			} = {}
		}
	}) => ({
		slug,
		pageDescription,
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
