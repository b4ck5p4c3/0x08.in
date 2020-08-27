import React, { ReactChild } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
`;

const Anchor = styled.a`
  position: relative;
  top: var(--header-height-negative);

  :target ~ div {
    background-color: var(--theme-dark-bg-highlighter);
  }
`;

const Elem = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
`;

const Line = styled.div`
  color: var(--typo-secondary);
  cursor: pointer;
  min-width: 70px;
  padding: 10px;

  &:hover {
    color: white;
  }
`;

const test = () => {
  console.log(123);
}

export default ({children, id}) => {
	return (
		<Wrapper>
			<Anchor id={`${id}`} />
			<>
				<Line className='line-number' onClick={test}>{id}</Line>
				<Elem>{children}</Elem>
			</>
		</Wrapper>
	)
} 