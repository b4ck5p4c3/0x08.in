import React from 'react';

import vkIcon from '../../assets/img/vk-icon-white.svg';
import emailIcon from '../../assets/img/email-icon-white.svg';
import phoneIcon from '../../assets/img/phone-icon-white.svg';
import githubIcon from '../../assets/img/github-icon-white.svg';
import twitterIcon from '../../assets/img/twitter-icon-white.svg';
import matrixChatIcon from '../../assets/img/matrix-icon-white.svg';
import telegramgBotIcon from '../../assets/img/bot-icon-white.svg';
import telegramIcon from '../../assets/img/telegram-icon-white.svg';

import {Wrapper, Inner, FooterLink, Icon} from './styled';

import {URLS} from './constants';
import {Props} from './types';

export default (props: Props) => (
	<Wrapper>
		<div>
			<FooterLink href={URLS.vk} title='Добавиться в VK'><Icon src={vkIcon} /></FooterLink>
			<FooterLink href={URLS.twitter} title='Подписаться на twitter'><Icon src={twitterIcon} /></FooterLink>
			<FooterLink href={URLS.tgAnnouncements} title='Подписаться на telegram-канал с анонсами'><Icon src={telegramIcon} /></FooterLink>
			<FooterLink href={URLS.tgLive} title='Подписаться на telegram-блог участников'><Icon src={telegramIcon} /></FooterLink>
		</div>
		<div>
			<FooterLink href={URLS.license} title='Licensed under Creative Commons Attribution 4.0 International License'>CC BY 4.0</FooterLink>
		</div>
		<div>
			<FooterLink href={URLS.phone} title='Позвонить по телефону'><Icon src={phoneIcon} /></FooterLink>
			<FooterLink href={URLS.email} title='Написать письмо'><Icon src={emailIcon} /></FooterLink>
			<FooterLink href={URLS.tgBot} title='Спросить бота'><Icon src={telegramgBotIcon} /></FooterLink>
		</div>
		<div>
			<FooterLink href={URLS.tgChat} title='Войти в telegram-чат'><Icon src={telegramIcon} /></FooterLink>
			<FooterLink href={URLS.matrix} title='Войти в matrix-чат'><Icon src={matrixChatIcon} /></FooterLink>
			<FooterLink href={URLS.github} title='Посмотреть код на GitHub'><Icon src={githubIcon} /></FooterLink>
		</div>
	</Wrapper>
)