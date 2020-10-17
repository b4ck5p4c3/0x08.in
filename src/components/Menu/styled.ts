import {Link} from 'gatsby';
import styled from 'styled-components';

export const Wrapper = styled.nav`
	display: flex;
	font-size: 14px;
	align-items: end;
	font-weight: 300;
	line-height: 20px;
	overflow-y: scroll;
	flex-direction: row;
	scrollbar-width: none;
	font-family: Helvetica, sans-serif;
`;

export const Item = styled(Link)`
	border-right: 2px solid var(--theme-dark-bg-dark);
	background-color: var(--theme-dark-bg-light);
	color: var(--typo-secondary);
	padding: 7px 7px 7px 14px;
	cursor: pointer;

	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;

	&[aria-current] {
		color: white;
		background-color: var(--theme-dark-bg-active)
	}

	&:hover img {
		visibility: visible;
	}

	&:last-child {
		border-right: none;
	}
`;

export const PageIcon = styled.img`
	width: 12px;
	height: 16px;
	opacity: 0.8;
	filter: invert();
	margin-right: 10px;
`;

export const CrossIcon = styled.img`
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