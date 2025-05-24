import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import entrancePhoto from './entrance.jpg'

const WherePage: React.FC = () => {
  return (
    <article>
      <header>
        <h1>Как до нас добраться?</h1>
      </header>
      <section>
        <p>
          <b>Полный адрес: </b>
          197343, Санкт-Петербург, Ланское шоссе, 14, корп. 1
        </p>
        <p>
          Мы живем на цокольном этаже жилого дома.
          Отдельный вход расположен справа от седьмой парадной, на внешней стороне дома,
          смотрящей в направлении метро &quot;Черная речка&quot;.
        </p>
      </section>

      <section>
        <header>
          <h2>Метро</h2>
        </header>
        <ul>
          <li>
            <b>Синяя ветка: </b>
            <span>станция &quot;Черная речка&quot; находится в 15 минутах пешком.</span>
          </li>
          <li>
            <b>Красная ветка: </b>
            <span>
              от станции &quot;Площадь Мужества&quot; ходит троллейбус №6. Выходите на остановке &quot;Омская&quot;.
            </span>
          </li>
        </ul>
      </section>

      <section>
        <header>
          <h2>Индивидуальная мобильность</h2>
        </header>
        <ul>
          <li>
            <b>Кикшейринг: </b>
            <span>парковка находится с другой стороны дома.</span>
          </li>
          <li>
            <b>Велосипеды: </b>
            <span>можно пристегнуть велосипед к забору у входа.</span>
          </li>
        </ul>
      </section>

      <section>
        <header>
          <h2>Вход</h2>
        </header>
        <p>
          Застекленный спуск справа от седьмой парадной.
        </p>
        <Image
          alt='Фотография входа в Бэкспейс и отметка на карте, указывающее его положение'
          className='rounded-md'
          src={entrancePhoto}
        />
      </section>

      <article>
        <header>
          <h2>Карта</h2>
        </header>
        <iframe className='rounded-md min-h-96' src='https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=29206101690' />
      </article>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Как до нас добраться? • B4CKSP4CE'
}

export default WherePage
