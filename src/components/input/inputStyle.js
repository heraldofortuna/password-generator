import styled from "styled-components";

const StyledContainer = styled.label`
  inline-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const StyledInput = styled.input`
  color: var(--color-dark);
  width: 100%;
  font: var(--body1);
  border: 1px solid var(--color-gray-3);
  border-radius: 2px;
  padding: 4px;

  &: focus {
    outline: none !important;
    border: 1px solid var(--color-dark);
  }
`;

export { StyledContainer, StyledInput };
