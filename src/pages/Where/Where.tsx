import Head from 'next/head';
import type { NextPage } from 'next';
import css from './Where.module.scss';
import Image from '@/components/Image';
import EntrancePhoto from '@/assets/entrance.jpg';

const Where: NextPage = () => {
  return (
    <>
      <Head>
        <title>Как добраться • B4CKSP4CE</title>
        <meta name="description" content="Информация о том, как добраться до Бэкспейса" />
        <meta name="keywords" content="b4cksp4ce, backspace, бэкспейс, хакспейс, хакспейс спб" />
      </Head>

      <h1>Как добраться?</h1>
      <article>
        <p>
          <b>Полный адрес: </b>
          197343, Санкт-Петербург, Ланское шоссе, 14, корп. 1
        </p>
        <p>
          Мы живем на цокольном этаже жилого дома.
          Отдельный вход расположен справа от седьмой парадной, на внешней стороне дома
          смотрящей в направлении метро &quot;Черная речка&quot;.
        </p>
      </article>

      <article>
        <header>
          <h2>Метро</h2>
        </header>
        <ol>
          <li>
            <b>Синяя ветка: </b>
            <span>станция &quot;Черная речка&quot; находится в 15 минутах пешком</span>
          </li>
          <li>
            <b>Красная ветка: </b>
            <span>от станции &quot;Площадь мужества&quot; ходит троллейбус №6. Выходите на остановке &quot;Омская&quot;.</span>
          </li>
        </ol>
      </article>

      <article>
        <header>
          <h2>Индивидуальная мобильность</h2>
        </header>
        <ol>
          <li>
            <b>Кикшейринг: </b>
            <span>парковка Whoosh находится с другой стороны дома</span>
          </li>
          <li>
            <b>Велосипеды: </b>
            <span>у нас нет велопарковки, но можно пристягнуть велосипед к забору у входа</span>
          </li>
        </ol>
      </article>

      <article>
        <header>
          <h2>Вход</h2>
        </header>
        <p>
          Застекленный спуск справа от седьмой парадной. 
        </p>
        <Image 
            unoptimized 
            className={css.entrancePhoto} 
            src={EntrancePhoto}
            alt="Фотография входа в Бэкспейс и отметка на карте, указывающее его положение" 
          />
      </article>

      <article>
        <header>
          <h2>Карта</h2>
        </header>
        <iframe src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=29206101690" className={css.embedMap}></iframe>
      </article>
    </>
  );

}

export default Where;
