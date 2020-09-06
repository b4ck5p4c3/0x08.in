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
export type MetadataQuery = {
	site: Site;
}


export type EventMdx = {
	frontmatter: Frontmatter;
	excerpt: string;
	slug: string;
};
export type EventEdge = {
	node: {
		childMdx: EventMdx;
	}
};
export type EventAllFile = {
	edges: EventEdge[];
} 
export type EventsQuery = {
	allFile: EventAllFile;
}
export type EventInfo = {
	slug: string;
	excerpt: string;
} & Partial<Frontmatter>;

export type ProjectMdx = {
	frontmatter: Frontmatter;
	excerpt: string;
	slug: string;
};
export type ProjectEdge = {
	node: {
		childMdx: ProjectMdx;
		modifiedTime: string;
	}
};
export type ProjectAllFile = {
	edges: ProjectEdge[];
} 
export type ProjectQuery = {
	allFile: ProjectAllFile;
}
export type ProjectInfo = {
	slug: string;
	excerpt: string;
	modifiedTime: string;
} & Partial<Frontmatter>;
