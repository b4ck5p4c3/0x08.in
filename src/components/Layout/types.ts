import {SiteMetadata, SiteData} from '../../types';

export type Props = {
	children?: Element;
};

export type RootProps = Props & {
	siteMetadata: SiteMetadata;
};

export type QueryData = {
	site: SiteData;
};
