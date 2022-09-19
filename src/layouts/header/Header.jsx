import React from "react";

import {
  StyledHeader,
  StyledContainer,
  StyledLogo,
} from "./headerStyle";

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer className="container">
        <StyledLogo href="/">Password Generator</StyledLogo>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
