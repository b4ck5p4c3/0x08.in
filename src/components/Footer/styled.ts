import styled from 'styled-components';

export const Wrapper = styled.footer`
	background-color: var(--theme-dark-bg-dark);
	font-family: Helvetica, sans-serif;
	line-height: 30px;
	text-align: center;
	position: sticky;
	bottom: 0;

	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

export const Inner = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`; 

export const FooterLink = styled.a`
	color: white;
	opacity: 0.6;
	font-size: 14px;
	font-weight: 100;

	&:hover {
		opacity: 1;
	}
`;

export const Icon = styled.img`
	margin: 2px;
	width: 20px;
	vertical-align: middle;	
`;
