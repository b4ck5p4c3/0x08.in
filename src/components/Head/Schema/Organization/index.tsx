import React from 'react';
import Helmet from 'react-helmet';

import {Props} from './types';

export default ({siteMetadata}: Props) => {
	const {
		siteTitle,
		siteDescription,
		streetAddress,
		addressLocality,
		postalCode
	} = siteMetadata;

	const scheme = {
		'@context': "https://schema.org",
		'@type': "Organization",
		name: siteTitle,
		description: siteDescription,
		location: {
			'@type': 'Place',
			name: siteTitle,
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
