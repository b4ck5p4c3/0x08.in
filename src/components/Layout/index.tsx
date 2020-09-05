import React from 'react';
import styled from 'styled-components';
import {MDXProvider} from '@mdx-js/react';

import Code from '../Code';
import Head from '../Head';
import Header from '../Header';
import Footer from '../Footer';
import Content from '../Content';

import {Props} from './types';

const Page = styled.main`
  min-height: calc(100vh - var(--footer-height));
  background-color: var(--theme-dark-bg-light);
  color: white;
`;

const Pre = (props: any) => (
  <div {...props} />
);

const mdxComponents = {
  code: Code,
  pre: Pre
};

export default ({children, ...rest}: Props) => (
  <MDXProvider components={mdxComponents}>
    <Head {...rest} />
    <Header {...rest} />
    <Page>
      <Content {...rest} >
        {children}
      </Content>
    </Page>
    <Footer {...rest}/>
  </MDXProvider>
);
