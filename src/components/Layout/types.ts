import {ReactChild} from 'react';
import {InjectedProps} from '../../types';

export type Props = {
	children?: ReactChild;
} & InjectedProps;
