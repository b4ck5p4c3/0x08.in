import React from 'react';

import {MENU_ITEMS} from '../../constants';
import {MenuItem} from '../../types';

import corssIcon from '../../assets/img/circle-cross-icon-black.webp'; 
import pageIcon from '../../assets/img/text-icon-black.png';

import {Wrapper, Item, PageIcon, CrossIcon} from './styled'; 

const ACTIVE_CLASS_NAME = 'activePage';

export default () => {
	React.useEffect(() => {
		const active = document.getElementsByClassName(ACTIVE_CLASS_NAME)[0];
		active && active.scrollIntoView(false);
	}, []);

	return (
		<Wrapper>
			{
				MENU_ITEMS.map((item: MenuItem) => (
					<Item {...item} activeClassName={ACTIVE_CLASS_NAME} >
						<PageIcon src={pageIcon} />
						{item.key}
						<CrossIcon src={corssIcon} />
					</Item>
				))
			}
		</Wrapper>
	);
};

