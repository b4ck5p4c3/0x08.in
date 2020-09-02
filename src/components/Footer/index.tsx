import React from 'react';
import styled from 'styled-components';

import vkIcon from '../../assets/img/vk-icon-white.svg';
import emailIcon from '../../assets/img/email-icon-white.svg';
import phoneIcon from '../../assets/img/phone-icon-white.svg';
import githubIcon from '../../assets/img/github-icon-white.svg';
import twitterIcon from '../../assets/img/twitter-icon-white.svg';
import messageIcon from '../../assets/img/message-icon-white.svg';
import discordIcon from '../../assets/img/discord-icon-white.svg';
import matrixChatIcon from '../../assets/img/matrix-icon-white.svg';
import telegramgBotIcon from '../../assets/img/bot-icon-white.svg';
import telegramIcon from '../../assets/img/telegram-icon-white.svg';

import {Props} from './types';
import {URLS} from './constants';

const Wrapper = styled.footer`
	background-color: var(--theme-dark-bg-dark);
	color: var(--typo-backspace-yellow);
	font-family: Helvetica, sans-serif;
	line-height: var(--footer-height);
	height: var(--footer-height);
	text-align: center;
	position: sticky;
	bottom: 0;

	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

const FooterLink = styled.a`

`;

const Left = styled.div``;
const Right = styled.div``;
const Center = styled.div``;

const Icon = styled.img`
	margin: 2px;
	width: 20px;
	opacity: 0.6;
	vertical-align: middle;

	&:hover {
		opacity: 1;
	}
`;

export default (props: Props) => (
	<Wrapper>
		<Left>
			<FooterLink href={URLS.vk} title='Добавиться в VK'><Icon src={vkIcon} /></FooterLink>
			<FooterLink href={URLS.twitter} title='Подписаться на twitter'><Icon src={twitterIcon} /></FooterLink>
			<FooterLink href={URLS.tgAnnouncements} title='Подписаться на telegram-канал с анонсами'><Icon src={telegramIcon} /></FooterLink>
			<FooterLink href={URLS.tgLive} title='Подписаться на telegram-блог участников'><Icon src={telegramIcon} /></FooterLink>
		</Left>
		<Center>
			<FooterLink href={URLS.phone} title='Позвонить по телефону'><Icon src={phoneIcon} /></FooterLink>
			<FooterLink href={URLS.email} title='Написать письмо'><Icon src={emailIcon} /></FooterLink>
			<FooterLink href={URLS.tgBot} title='Спросить бота'><Icon src={telegramgBotIcon} /></FooterLink>
		</Center>
		<Right>
			<FooterLink href={URLS.tgChat} title='Войти в telegram-чат'><Icon src={telegramIcon} /></FooterLink>
			<FooterLink href={URLS.matrix} title='Войти в matrix-чат'><Icon src={matrixChatIcon} /></FooterLink>
			<FooterLink href={URLS.github} title='Посмотреть код на GitHub'><Icon src={githubIcon} /></FooterLink>
		</Right>
	</Wrapper>
)