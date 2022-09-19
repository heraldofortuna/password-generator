import React from "react";

import {
  StyledFooter,
  StyledContainer,
  StyledIcons,
} from "./footerStyle";

import Icon from "../../components/icon/Icon";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer className="container">
        <StyledIcons>
          <Icon
            iconClass="ri-twitter-fill"
            href="https://twitter.com/heraldofortuna"
          />
          <Icon
            iconClass="ri-github-fill"
            href="https://github.com/heraldofortuna"
          />
          <Icon
            iconClass="ri-linkedin-fill"
            href="https://www.linkedin.com/in/heraldo-fortuna/"
          />
        </StyledIcons>
        <p>Design by Heraldo Fortuna - Copyright 2022</p>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
