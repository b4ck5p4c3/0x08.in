import React from 'react';
import Helmet from 'react-helmet';

import '../../assets/css/normalize.css';
import '../../assets/css/variables.css';
import '../../assets/css/common.css';

import {Props} from './types';

export default ({siteMetadata}: Props) => {
	return (
		<Helmet>
			<html />
			<meta charSet='utf-8' />
			<title>{siteMetadata.title}</title>
		</Helmet>
	)
};