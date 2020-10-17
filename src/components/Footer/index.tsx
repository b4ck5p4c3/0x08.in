import React from 'react';
import styled from 'styled-components';

import botIcon from '../../assets/img/bot-icon-white.svg';
import liveIcon from '../../assets/img/live-icon-white.svg';
import emailIcon from '../../assets/img/email-icon-white.svg';
import phoneIcon from '../../assets/img/phone-icon-white.svg';
import githubIcon from '../../assets/img/github-icon-white.svg';
import telegramIcon from '../../assets/img/telegram-icon-white.svg';
import announcementsIcon from '../../assets/img/announcements-icon-white.svg';

import IconLink from '../IconLink';

import {URLS} from './constants';
import {Props} from './types';

const Wrapper = styled.footer`
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

export default (props: Props) => (
	<Wrapper>
		<div>
			<IconLink
				src={announcementsIcon}
				href={URLS.tgAnnouncements}
				title='Подписаться на telegram-канал с анонсами'
			/>
			<IconLink
				src={liveIcon}
				href={URLS.tgLive}
				title='Подписаться на telegram-блог участников'
			/>
		</div>
		<div>
			<IconLink
				src={phoneIcon}
				href={URLS.phone}
				title='Позвонить по телефону'
			/>
			<IconLink
				src={emailIcon}
				href={URLS.email}
				title='Написать письмо'
			/>
			<IconLink
				src={botIcon}
				href={URLS.tgBot}
				title='Спросить бота'
			/>
		</div>
		<div>
			<IconLink
				src={telegramIcon}
				href={URLS.tgChat}
				title='Войти в telegram-чат'
			/>
			<IconLink
				src={githubIcon}
				href={URLS.github}
				title='Посмотреть код на GitHub'
			/>
		</div>
	</Wrapper>
)