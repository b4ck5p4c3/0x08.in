import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
`;

export const Anchor = styled.a`
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

export const Elem = styled.div`
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

export const Line = styled.span`
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