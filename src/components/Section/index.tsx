import React, { MouseEvent } from 'react';
import Brancher from '../Brancher';

import {Wrapper, Anchor, Line, Elem} from './styled';
import {Props} from './types';

const setAnchor = ({target}: MouseEvent) => {
  const {id} = target as HTMLElement;
  const anchor = `#${id}`;

  window.location.href = anchor;
};

export default ({children, id, hasAnchors}: Props) => (
  <Wrapper>
    <Brancher when={hasAnchors} then={
        <Anchor id={id} />
      }
    />
    <>
      <Brancher when={hasAnchors} then={
          <Line onClick={setAnchor} id={id}>{id}</Line>
        }
      />
      <Elem>{children}</Elem>
    </>
  </Wrapper>
);
