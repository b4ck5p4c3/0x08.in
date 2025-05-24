import Image from 'next/image'
import Link from 'next/link'

import logo from './logo.svg'

const Header: React.FC = () => {
  return (
    <>
      <header>
        <Link href='/'>
          <Image
            alt='B4CKSP4CE logo – a white-black image of a backspace button'
            className='dark:invert'
            height={65}
            src={logo}
            unoptimized
            width={100}
          />
        </Link>
      </header>
    </>
  )
}

export default Header
