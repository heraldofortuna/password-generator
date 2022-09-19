import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-white);
  position: sticky;
  top: 0;
  z-index: 1;
  transition: var(--transition);
`;

const StyledContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    height: 80px;
  }
`;

const StyledLogo = styled.a`
  color: var(--color-dark);
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;

  &: hover {
    color: var(--color-blue);
  }

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`;

export { StyledHeader, StyledContainer, StyledLogo };
