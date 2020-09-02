import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import Brancher from '../Brancher';

const Wrapper = styled.section`
  display: flex;
`;

const Anchor = styled.a`
  position: relative;
  top: var(--margin-anchor);

  :target ~ div,
  :target ~ span {
    background-color: var(--theme-dark-bg-highlight);
  }

  :target ~ span {
    border-left: 1px solid var(--typo-backspace-yellow);
  }
`;

const Elem = styled.div`
  display: flex;
  padding: var(--padding-section);
  width: 100%;

  & a {
    color: var(--typo-cyan);
    text-decoration: underline;
  }

  & a:hover {
    text-decoration: none;
  }

  & a:visited {
    color: var(--typo-mickey-purple);
  }
`;

const Line = styled.span`
  min-width: var(--width-line-number);
  border-left: 1px solid transparent;
  padding: var(--padding-section);
  color: var(--typo-tertiary);
  user-select: none;
  cursor: pointer;

  &:hover {
    border-left: 1px solid var(--typo-backspace-yellow);
  }
`;

const setAnchor = ({target}: MouseEvent) => {
  const {id} = target as HTMLElement;
  const anchor = `#${id}`;

  window.location.href = anchor;
};

export default ({children, id, frontmatter}) => {
  const {anchors} = frontmatter;

	return (
		<Wrapper>
      <Brancher when={anchors} then={
          <Anchor id={`${id}`} />
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