import React, { ReactElement } from 'react'
import Header from '@/components/Header';
import css from './Layout.module.scss';

export default function Layout({ children }) {
  return;
}

Layout.getLayout = function getLayout(page: ReactElement) {
  return (
    <main className={css.main}>
      <Header />
      {page}
    </main>
  );
}
