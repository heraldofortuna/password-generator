import styled from "styled-components";

const StyledButton = styled.button`
  background-color: unset;
  color: var(--color-dark);
  text-align: center;
  font: var(--button);
  inline-size: 100%;
  padding-block-start: 16px;
  padding-block-end: 16px;
  padding-inline-start: 24px;
  padding-inline-end: 24px;
  border: 1px solid var(--color-dark);
  border-radius: 24px;
  cursor: pointer;
  transition: var(--transition);
`;

export { StyledButton };
