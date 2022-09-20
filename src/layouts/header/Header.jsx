import React, { useState, useEffect } from "react";

import {
  StyledHeader,
  StyledContainer,
  StyledLogo,
} from "./headerStyle";

const Header = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <StyledHeader className={offset >= 80 && "header--scroll"}>
      <StyledContainer className="container">
        <StyledLogo href="/">Password Generator</StyledLogo>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
