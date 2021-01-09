import {ReactChild} from 'react';
import {CommonProps} from '../../types';

export type Props = CommonProps & {
	children?: ReactChild;
};
