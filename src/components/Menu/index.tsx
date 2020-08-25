import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

import {MENU_ITEMS} from '../../constants';
import {MenuItem} from '../../types';

import corssIcon from '../../assets/img/circle-cross-icon.webp'; 
import pageIcon from '../../assets/img/text-icon.png'; 

const PageIcon = styled.img`
	width: 12px;
	height: 16px;
	opacity: 0.8;
	filter: invert();
	margin-right: 10px;
`;

const CrossIcon = styled.img`
	width: 12px;
	height: 12px;
	opacity: 0.6;
	filter: invert();
	margin-left: 10px;
	visibility: hidden;

	&:hover {
		opacity: 1;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	font-size: 14px;
	align-items: end;
	font-weight: 300;
	line-height: 20px;
	flex-direction: row;
	font-family: Helvetica, sans-serif;

	& > * {
		border-right: 1px solid var(--theme-dark-bg-dark);
		background-color: var(--theme-dark-bg-light);
		color: var(--typo-secondary);
		padding: 7px 7px 7px 14px;
		cursor: pointer;	

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		&[aria-current] {
			background-color: var(--theme-dark-bg-active)
		}

    &:hover img {
      visibility: visible;
		}
  }

  & > *:last-child {
    border-right: none;
  }
`;

export default () => (
	<Wrapper>
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
						<>
							<Link key={label} to={to}>
								<PageIcon src={pageIcon} />
								{label}
								<CrossIcon src={corssIcon} />
							</Link>
						</>
					);
				}
			})
		}
	</Wrapper>
);

