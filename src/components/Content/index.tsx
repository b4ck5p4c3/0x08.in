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

const Heading = styled.h1`
  line-height: 2rem;
  margin-bottom: 30px;
  margin-top: 10px;

  margin-left: ${({anchors}) => anchors ? '60px' : '10px'};
`;

export default ({children, pageContext}: Props) => {
  const {frontmatter} = pageContext;

  return (
    <Content>
      <Heading anchors={frontmatter.anchors}>{frontmatter.title}</Heading>
      {
        React.Children.map(
          children,
          (elem, id) => (
            <Section id={id} frontmatter={frontmatter} >
              {elem}
            </Section>
          )
        )
      }
    </Content>
  );
}