import React from 'react'
import Link from 'next/link';
import Image from '@/components/Image';
import css from './Header.module.scss';
import logo from '@/assets/logo.svg';

export default function Header() {
  return (
    <header>
      <Link href="/" passHref>
        <a>
          <Image 
            unoptimized 
            className={css.logo} 
            src={logo} 
            width={100} 
            height={65}
            alt="Backspace logo – a white-black image of a backspace button" 
          />
        </a>
      </Link>
    </header>
  )
}
