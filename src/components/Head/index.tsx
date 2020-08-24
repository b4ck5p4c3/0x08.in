import React from 'react';
import Helmet from 'react-helmet';

import {Props} from './types';

export default ({siteMetadata}: Props) => {
	return (
		<Helmet>
			<html />
			<meta charSet="utf-8" />
			<title>{siteMetadata.title}</title>
			<link rel="canonical" href="http://mysite.com/example" />
		</Helmet>
	)
};