import {Frontmatter} from '../../types'; 

export type Props = {
	hasAnchors: boolean;
	frontmatter: Partial<Frontmatter>;
	sourceInstanceName: string;
};
