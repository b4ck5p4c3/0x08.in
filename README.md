Сайт и Wiki хакерспейса B4CKSP4CE

======

Реопзиторий содержит код [сайта](https://0x08.in) и [Wiki](https://0x08.in/wiki), а в Issues обсуждаются любые вопросы касательно происходящего в спэйсе.

Сайт доступен на публичном домене 0x08.in с помощью механизма GitHub Pages. Исходный код проекта и связанные с ним файлы находятся в ветке `dev`.

Новые страницы добавляются в виде [.mdx, .md](https://mdxjs.com/getting-started) файлов, а код компонентов и лэйаута пишется на TypeScript с использованием GraphQL.

Дистрибутив сайта собирается с помощью [Gatsby.js](https://www.gatsbyjs.com/docs/) и [автоматически публикуется](https://www.gatsbyjs.com/docs/how-gatsby-works-with-github-pages/#deploying-to-a-github-pages-subdomain-at-githubio) в ветку `master`.

## Как поднять это локально? 

1.  **Склонировать репозиторий и запустить сборку**

    ```shell
    git pull https://github.com/b4ck5p4c3/0x08.in
    cd 0x08.in
    npm i
    npm start
    ```

2.  **Открыть локальный сайт в бразуере и разрабатывать! :)**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `0x08.in` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## Features

- [Gatsby MDX](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-mdx) for JSX in Markdown loading, parsing, and rendering of pages
- [Styled Components](https://www.styled-components.com/) for CSS-in-JS
- [ESLint](https://eslint.org/) with [Airbnb's config](https://www.npmjs.com/package/eslint-config-airbnb)
- [Prettier](https://prettier.io/) integrated into ESLint

## Development

```shell
# install dependencies
npm i

# serve site and stroybook with hot reload
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

## Структура проекта

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── package-lock.json
    ├── package.json
    └── README.md

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

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.


## Лицензия

![Creative Commons License](https://i.creativecommons.org/l/by/4.0/80x15.png)
[Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).
