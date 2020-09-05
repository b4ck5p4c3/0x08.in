import Link from 'gatsby-link'; 
import styled from 'styled-components';

export const Wrapper = styled.div`
	font-family: 'Special Elite', cursive;
	font-size: 50px;
	display: flex;
`;

export const LogoLink = styled(Link)`
	display: flex;
`;

export const User = styled(Link)`
	color: var(--typo-backspace-yellow);
	margin-left: 5px;

	@media screen and (max-width: 1024px) {
		display: none;
	}
`;

export const Dir = styled(Link)`
	color: var(--typo-just-inactive);

	&:hover {
		color: var(--typo-mickey-purple);
	}
`;

export const Dollar = styled(Link)`
	margin-left: 20px;
	color: var(--typo-just-inactive);

	&:hover {
		color: green;
	}
`;

export const Wiki = styled(Link)`
	margin-left: 20px;
	color: var(--typo-just-inactive);

	&:hover {
		color: var(--typo-special-blue);
	}
`;