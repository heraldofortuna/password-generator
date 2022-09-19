import styled from "styled-components";

const StyledContainer = styled.a`
  text-decoration: none;
`;

const StyledIcon = styled.i`
  color: var(--color-white);
  font-size: 24px;
  vertical-align: middle;

  &: hover {
    color: var(--color-yellow);
  }

  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
`;

export { StyledContainer, StyledIcon };
