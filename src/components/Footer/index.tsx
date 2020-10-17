import React from 'react';

import botIcon from '../../assets/img/bot-icon-white.svg';
import liveIcon from '../../assets/img/live-icon-white.svg';
import emailIcon from '../../assets/img/email-icon-white.svg';
import phoneIcon from '../../assets/img/phone-icon-white.svg';
import githubIcon from '../../assets/img/github-icon-white.svg';
import telegramIcon from '../../assets/img/telegram-icon-white.svg';
import announcementsIcon from '../../assets/img/announcements-icon-white.svg';

import {Wrapper, FooterLink, Icon} from './styled';

import {URLS} from './constants';
import {Props} from './types';

export default (props: Props) => (
	<Wrapper>
		<div>
			<FooterLink href={URLS.tgAnnouncements} title='Подписаться на telegram-канал с анонсами'>
				<Icon src={announcementsIcon} />
			</FooterLink>
			<FooterLink href={URLS.tgLive} title='Подписаться на telegram-блог участников'>
				<Icon src={liveIcon} />
			</FooterLink>
		</div>
		<div>
			<FooterLink href={URLS.phone} title='Позвонить по телефону'>
				<Icon src={phoneIcon} />
			</FooterLink>
			<FooterLink href={URLS.email} title='Написать письмо'>
				<Icon src={emailIcon} />
			</FooterLink>
			<FooterLink href={URLS.tgBot} title='Спросить бота'>
				<Icon src={botIcon} />
				</FooterLink>
		</div>
		<div>
			<FooterLink href={URLS.tgChat} title='Войти в telegram-чат'>
				<Icon src={telegramIcon} />
			</FooterLink>
			<FooterLink href={URLS.github} title='Посмотреть код на GitHub'>
				<Icon src={githubIcon} />
			</FooterLink>
		</div>
	</Wrapper>
)