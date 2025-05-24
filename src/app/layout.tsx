import type { Metadata } from 'next'

import { IBM_Plex_Sans as IBMPlexSans } from 'next/font/google'

import './globals.css'
import Header from './_components/header'

const nunitoSans = IBMPlexSans({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-geist-sans',
  weight: ['400'],
})

export const metadata: Metadata = {
  description: 'Сообщество энтузиастов и энтузиасток, обьединённых вокруг технологий и искусства. Вместе мы разбираемся в сложных вещах, проводим события, работаем над проектами и просто хорошо проводим время.',
  keywords: 'b4cksp4ce, backspace, бэкспейс, хакспейс, хакспейс спб, bksp, b4ck',
  title: 'B4CKSP4CE'
}

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body
        className={`${nunitoSans.variable} antialiased`}
      >
        <main className='flex flex-col gap-8 max-w-4xl md:mx-auto px-6 py-12'>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
