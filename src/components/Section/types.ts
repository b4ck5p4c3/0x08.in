import {ReactChild} from 'react';
import {Frontmatter} from '../../types';

export type Props = {
	id: string;
	children?: ReactChild;
	frontmatter: Frontmatter;
};
