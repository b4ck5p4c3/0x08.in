import React from 'react';
import Helmet from 'react-helmet';

import '../../assets/css/normalize.css';
import '../../assets/css/variables.css';
import '../../assets/css/common.css';

import Brancher from '../Brancher';
import EventSchema from './Schema/Event';
import OrganizationSchema from './Schema/Organization';

import {Props} from './types';

export default (props: Props) => {
	const {
		pageContext,
		siteMetadata
	} = props;

	const {
		siteTitle,
		siteKeywords,
		siteDescription
	} = siteMetadata;

	const {
		frontmatter: {
			pageTitle,
			pageKeywords,
			pageDescription,
			startDate
		}
	} = pageContext;

	const hasStartDate = Boolean(startDate);
	const titleTemplate = `${siteTitle} – %s`;
	const metaKeywords = pageKeywords ? `${siteKeywords}, ${pageKeywords}` : siteKeywords;
	const metaDescription = pageDescription ? `${siteDescription}. ${pageDescription}` : siteDescription;

	return (
		<>
			<Helmet
				defaultTitle={siteTitle}
				titleTemplate={titleTemplate}
			>
				<html lang='ru' />
				<meta charSet='utf-8' />
				<title>{pageTitle}</title>
				<meta name='keywords' content={metaKeywords} />
				<meta name='description' content={metaDescription} />
			</Helmet>
			<Brancher
				when={hasStartDate}
				then={<EventSchema {...props} />}
				otherwise={<OrganizationSchema {...props} />} 
			/>
		</>
	);
};
