/**
 * Project level common types 
 */

export type MenuItem = {
	to: string;
	key: string;
};

// siteMeatadata from gatsby-config.js
export type SiteMetadata = {
	siteRoot: string;
	siteTitle: string;
	siteDescription?: string;
	siteKeywords?: string;
	gitHubProject: string;
	gitHubBranch: string;
	streetAddress: string;
	addressLocality: string;
	postalCode: string;
};

export type Frontmatter = {
	pageTitle: string;
	pageDescription?: string;
	pageKeywords?: string;
	startDate?: string;
	endDate?: string;
	anchors: boolean;
	covers: boolean;
};

export type PageContext = {
  frontmatter: Frontmatter;
};

export type InjectedProps = {
	pageContext: PageContext;
};

export type Site = {
	siteMetadata: SiteMetadata; 
}  