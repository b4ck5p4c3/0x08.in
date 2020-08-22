# Сайт и Wiki хакерспейса B4CKSP4CE

Реопзиторий содержит код и содержимое [сайта](https://0x08.in) и [Wiki](https://0x08.in/wiki), а в Issues обсуждаются любые вопросы касательно происходящего в спэйсе.

Сайт доступен на публичном домене 0x08.in с помощью механизма GitHub Pages. Исходный код проекта и связанные с ним файлы находятся в ветке `dev`.

Новые страницы добавляются в виде [.md и .mdx](https://mdxjs.com/getting-started) файлов, а код компонентов и обвязки пишется на TypeScript с использованием GraphQL и Styled Components.

Дистрибутив собирается с помощью [Gatsby.js](https://www.gatsbyjs.com/docs/) и [автоматически публикуется](https://www.gatsbyjs.com/docs/how-gatsby-works-with-github-pages/#deploying-to-a-github-pages-subdomain-at-githubio) в ветку `master`.

## Как поднять это локально? 

```shell
# Склонировать репозиторий
git pull https://github.com/b4ck5p4c3/0x08.in

# Перейти в директорию проекта
cd 0x08.in

# Запустить сборку
npm i && npm start

# Дождаться окончания:

...

Your site is now running at http://localhost:8000

...

```

После – можно открыть локальный сайт и разрабатывать :) Изменения в файлах автоматически обновят страницы!

На `http://localhost:8000/___graphql` можно будет поиграться с данными через GraphQL API (см. [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql))

## Файловая структура проекта

```
events/                     # Мероприятия

	example/				# Разовое

		README.md			# Анонс, подробное описание

		assets/				# Файлы анонса
			invitation.mp4
			cover.gif
			...
		
		photos/				# Фотографии с события
			00.jpg
			...

		misc/				# Любые другие файлы
			slides.pdf
			tracklist.txt
			...


	regular-example_0/		# Регулярное
		
		README.md		
		...

	...

```


## Структура проекта

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── src/
    ├──── assets
    ├──── components/
    ├──── pages/
        ├── wiki/
        ├── events/
        └── projects/
    ├── CNAME
    ├── gatsby-*.js
    ├── google*.html
    ├── robots.txt
    └── yandex_*.html

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

5.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

6.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

7.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

8. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

9. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

10. **`README.md`**: A text file containing useful reference information about your project.

## Features

- [Gatsby MDX](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-mdx) for JSX in Markdown loading, parsing, and rendering of pages
- [Styled Components](https://www.styled-components.com/) for CSS-in-JS
- [ESLint](https://eslint.org/) with [Airbnb's config](https://www.npmjs.com/package/eslint-config-airbnb)
- [Prettier](https://prettier.io/) integrated into ESLint

## Development

```shell
# install dependencies
npm i

# serve site  with hot reload
npm start

# serve with hot reload for development (localhost:8000)
npm run develop

# lint project
npm run lint

# format project source
npm run format

# run tests
npm test

# build for production
npm run build

# serve locally (after building)
npm run serve

# clean the local build
npm run clean
```

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.


## Лицензия

![Creative Commons License](https://i.creativecommons.org/l/by/4.0/80x15.png)
[Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).
