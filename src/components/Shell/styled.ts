import Link from 'gatsby-link'; 
import styled from 'styled-components';

export const Wrapper = styled.div`
	font-family: 'Special Elite', cursive;
	justify-content: space-between;
	font-size: 50px;
	display: flex;
`;

export const LogoLink = styled(Link)`
	display: flex;
`;

export const Image = styled.img`
	@media screen and (max-width: 444px) {
		width: 65px;
	}
`;

export const Title = styled.span`
	color: var(--typo-backspace-yellow);
	margin-left: 5px;

	@media screen and (max-width: 444px) {
		font-size: 35px;
	}
`;

export const Dollar = styled(Link)`
	color: #13FF37;
	margin-right: 20px;
	animation: dollar 7s ease-in-out infinite alternate;

	@keyframes dollar {
		from {
			opacity: .25;
			filter: hue-rotate(0deg);
		}
		to {
			opacity: 1;
			filter: hue-rotate(360deg);
		}
	}
`;