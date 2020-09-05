import React, { MouseEvent } from 'react';
import Brancher from '../Brancher';

import {Wrapper, Anchor, Line, Elem} from './styled';
import {Props} from './types';

const setAnchor = ({target}: MouseEvent) => {
  const {id} = target as HTMLElement;
  const anchor = `#${id}`;

  window.location.href = anchor;
};

export default ({children, id, frontmatter}: Props) => {
  const {anchors} = frontmatter;

	return (
		<Wrapper>
      <Brancher when={anchors} then={
          <Anchor id={id} />
        }
      />
			<>
        <Brancher when={anchors} then={
            <Line onClick={setAnchor} id={id}>{id}</Line>
          }
        />
				<Elem>{children}</Elem>
			</>
		</Wrapper>
	)
} 