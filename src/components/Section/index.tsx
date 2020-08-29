import React, { MouseEvent } from 'react';
import styled from 'styled-components';

import linkIcon from '../../assets/img/link-icon.png'; 

const Wrapper = styled.section`
  display: flex;
`;

const Anchor = styled.a`
  position: relative;
  top: var(--anchor-margin);

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
  padding: 10px;
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
  color: var(--typo-tertiary);
  cursor: pointer;
  min-width: 50px;
  padding: 10px;

  border-left: 1px solid transparent;

  &:hover {
    border-left: 1px solid var(--typo-backspace-yellow);
  }
`;

const setAnchor = ({target}: MouseEvent) => {
  const {id} = target as HTMLElement;
  const anchor = `#${id}`;

  window.location.href = anchor;
};

export default ({children, id}) => {
	return (
		<Wrapper>
			<Anchor id={`${id}`} />
			<>
				<Line onClick={setAnchor} id={id}>{id}</Line>
				<Elem>{children}</Elem>
			</>
		</Wrapper>
	)
} 