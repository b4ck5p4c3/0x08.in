import React from 'react';
import styled from 'styled-components';

import Section from '../Section';

import {Props} from './types';

const Content = styled.article`
  padding: 30px 10px;
  line-height: 20px;
  max-width: 1024px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    max-width: none;
  }
`;

const Heading = styled.h1<{anchors: boolean}>`
  margin-left: ${({anchors}) => anchors ? '60px' : '10px'};
  margin-bottom: 30px;
  line-height: 2rem;
  margin-top: 10px;
`;

export default ({children, pageContext}: Props) => {
  const {
    frontmatter,
    frontmatter: {
      anchors,
      pageTitle
    }
  } = pageContext;

  return (
    <Content>
      <Heading anchors={anchors}>{pageTitle}</Heading>
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