import React from 'react';
import styled from 'styled-components';

import Section from '../Section';
import Heading from '../Heading';

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

export default ({children, pageContext, sourceInstanceName}: Props) => {
  const {
    frontmatter,
    frontmatter: {
      anchors
    }
  } = pageContext;

  const hasAnchors = Boolean(anchors);
  
  return (
    <Content>
      <Heading
        hasAnchors={hasAnchors}
        frontmatter={frontmatter}
        sourceInstanceName={sourceInstanceName}
      />
      {
        React.Children.map(
          children,
          (elem, id) => (
            <Section id={`${id}`} hasAnchors={hasAnchors} >
              {elem}
            </Section>
          )
        )
      }
    </Content>
  );
}