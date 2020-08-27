/**
 * Project level common types 
 */

export type MenuItem = {
	to: string;
	key: string;
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