import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--color-dark);
  border-top: 1px solid var(--color-gray-3);
  padding-block-start: 16px;
  padding-block-end: 16px;

  @media screen and (min-width: 768px) {
    padding-block-start: 32px;
    padding-block-end: 32px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }

  & > p {
    color: var(--color-white);
    text-align: center;
  }
`;

const StyledIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export { StyledFooter, StyledContainer, StyledIcons };
