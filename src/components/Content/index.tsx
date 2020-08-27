import React, { ReactChild } from 'react';
import styled from 'styled-components';

import Section from '../Section';

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

export default ({children}: Props) => (
	<Content>
    {
      React.Children.map(
        children,
        (elem, id) => (
          <Section id={id}>
            {elem}
          </Section>
        )
      )
    }
	</Content>
);