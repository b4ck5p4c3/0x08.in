import React from 'react';

import {Props} from './types'; 

export default ({when, then, otherwise}: Props): JSX.Element =>
	when ? then : otherwise ? otherwise : <></>;
