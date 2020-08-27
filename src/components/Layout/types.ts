import { ReactChild } from 'react';
import {SiteMetadata, SiteData} from '../../types';

export type Props = {
	children?: ReactChild;
};

export type RootProps = Props & {
	siteMetadata: SiteMetadata;
};

export type QueryData = {
	site: SiteData;
};
