import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: var(--rebecca-purple);
  border-bottom: 0.2rem solid var(--rebecca-purple);
`;

export const HeaderInner = styled.div`
  display: flex;
  flex-flow: nowrap row;
`;

export const SiteTitle = styled.h1`
  margin: 0;
  color: white;
`;

export const Navigation = styled.div`
  margin-left: auto;
  display: flex;
  flex-flow: nowrap row;
  align-items: flex-end;

  & > * {
    margin-left: 1rem;
    color: white
    cursor: pointer;

    &:focus,
    &:hover {
      color: white;
      filter: brightness(85%);
    }
  }

  & > *:first-child {
    margin-left: 0;
  }
`;
