import React, { ReactChild } from 'react';
import styled from 'styled-components';

import {Props} from './types';

const Content = styled.article`
  font-family: 'Roboto Mono', 'monospace';
  font-variation-settings: 'wght' 300;
  font-size: var(--fonr-size);
  padding: 30px 10px;
  line-height: 20px;
  max-width: 1024px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    max-width: none;
  }
`;


const Section = styled.section`
  display: flex;
`;

const Anchor = styled.a`
  position: relative;
  top: var(--header-height-negative);

  :target ~ div {
    background-color: var(--theme-dark-bg-highlighter);
  }
`;

const Elem = styled.div<{line: number}>`
  display: flex;
  padding: 10px;

  &:before {
    content: '${({line}) => line}';
		color: var(--typo-secondary);
		min-width: 70px;
  }

  &:hover:before {
    color: white;
  }
`;

const wrap = (children?: ReactChild) => React.Children.map(
  children,
  (elem, line) => (
    <Section>
      <Anchor id={`${line}`} />
      <Elem line={line}>{elem}</Elem>
    </Section>
  )
);

export default ({children}: Props) => (
	<Content>
		{wrap(children)}
	</Content>
);