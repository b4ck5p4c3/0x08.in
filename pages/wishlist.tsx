import type { NextPage } from 'next'
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Whishlist: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Список желаний • B4CKSP4CE</title>
      </Head>
      <main className={styles.main}>
        <Link href="/" passHref>
          <Image src="/logo.svg" className={styles.logo} width={100} height={65} alt="" />
        </Link>
        <h1 className={styles.title}>Список желаний</h1>

        <article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet quis est? Quod ullam quos soluta repellendus nihil dolor, mollitia reiciendis aperiam dolores tempora eveniet numquam exercitationem ad at porro!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eveniet rem quas repudiandae fuga voluptates iure dicta, facilis in velit aliquid nesciunt pariatur, officiis temporibus consequatur adipisci. Omnis, aut impedit?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt vitae maxime harum repudiandae, quo nostrum odit. Itaque, reprehenderit iste blanditiis impedit veritatis commodi voluptatem accusamus ad reiciendis quae, quam est?
          </p>
        </article>
      </main>
    </div>
  )
}

export default Whishlist;
