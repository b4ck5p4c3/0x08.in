import React from 'react';

import {MENU_ITEMS} from '../../constants';
import {MenuItem} from '../../types';

import corssIcon from '../../assets/img/circle-cross-icon-black.webp'; 
import pageIcon from '../../assets/img/text-icon-black.png';

import {Wrapper, Item, PageIcon, CrossIcon} from './styled'; 

export default () => (
	<Wrapper>
		{
			MENU_ITEMS.map((item: MenuItem) => (
				<Item {...item} >
					<PageIcon src={pageIcon} />
					{item.key}
					<CrossIcon src={corssIcon} />
				</Item>
			))
		}
	</Wrapper>
);

