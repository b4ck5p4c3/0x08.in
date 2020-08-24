/**
 * Project level common types 
 */

export type MenuItem = {
	to?: string;
	label: string;
	href?: string;
};


export type SiteMetadata = {
	title: string;
	rootUrl: string;
	description?: string;
	keywords?: string;
};

export type SiteData = {
	siteMetadata: SiteMetadata
};