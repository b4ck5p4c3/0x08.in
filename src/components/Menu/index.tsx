import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

import {MENU_ITEMS} from '../../constants';
import {MenuItem} from '../../types';

export const MenuWrapper = styled.div`
  margin-left: auto;
  display: flex;
  flex-flow: nowrap row;
  align-items: flex-end;

  & > * {
    margin-left: 1rem;
    color: white;
    cursor: pointer;

    &:focus,
    &:hover {
      filter: brightness(85%);
    }
  }

  & > *:first-child {
    margin-left: 0;
  }
`;

export default () => (
	<MenuWrapper>
		{
			MENU_ITEMS.map(({ to, href, label }: MenuItem) => {
				if (href) {
					return (
						<a key={label} href={href}>
							{label}
						</a>
					);
				}

				if (to) {
					return (
						<Link key={label} to={to}>
							{label}
						</Link>
					);
				}
			})
		}
	</MenuWrapper>
);

