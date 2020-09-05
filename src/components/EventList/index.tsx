import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const eventListQuery = graphql`
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
						}
						excerpt
					}
				}
			}
		}
	}
`;

export default () => {
	const {allFile: {edges}} = useStaticQuery(eventListQuery);
	return <div>{edges.length}</div>;
};