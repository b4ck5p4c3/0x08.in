import React from 'react';
import Helmet from 'react-helmet';

import {Props} from './types';

export default ({siteMetadata, pageContext}: Props) => {
	const {
		siteTitle,
		siteDescription,
		streetAddress,
		addressLocality,
		postalCode
	} = siteMetadata;

	const {
		pageTitle,
		pageDescription,
		startDate,
		endDate
	} = pageContext.frontmatter;

	const scheme = {
		'@context': "https://schema.org",
		'@type': "Event",
		name: pageTitle,
		startDate,
		endDate,
		description: pageDescription,
		location: {
			'@type': 'Place',
			name: siteTitle,
			description: siteDescription,
			address: {
				'@type': 'PostalAddress',
				'addressCountry': 'RU',
				streetAddress,
				addressLocality,
				postalCode
			}
		}
	}

	return (
		<Helmet>
			<script type='application/ld+json'>{JSON.stringify(scheme)}</script>
		</Helmet>
	);
};
