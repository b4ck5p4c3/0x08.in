import React from 'react';
import styled from 'styled-components';

import Section from '../Section';

import {Props} from './types';
import Brancher from '../Brancher';

const Content = styled.article`
  padding: 30px 10px;
  line-height: 20px;
  max-width: 1024px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    max-width: none;
  }
`;

const Heading = styled.section<{anchors: boolean}>`
  padding-left: 60px;
  background-color: var(--theme-dark-bg-slightly);
  padding-bottom: 10px;
  margin-bottom: 30px;
  line-height: 2rem;
  padding-top: 10px;
`;

const Title = styled.h1``;

const Description = styled.p<{anchors: boolean}>`
  
  font-style: italic;
`;

export default ({children, pageContext}: Props) => {
  const {
    frontmatter,
    frontmatter: {
      anchors,
      pageTitle,
      pageDescription
    }
  } = pageContext;

  const hasPageDescription = Boolean(pageDescription);

  return (
    <Content>
      <Heading anchors={anchors}>
        <Title>{pageTitle}</Title>
        <Brancher
          when={hasPageDescription}
          then={
            <Description>
              {pageDescription}
            </Description>
          }
        />
      </Heading>
      {
        React.Children.map(
          children,
          (elem, id) => (
            <Section id={`${id}`} frontmatter={frontmatter} >
              {elem}
            </Section>
          )
        )
      }
    </Content>
  );
}