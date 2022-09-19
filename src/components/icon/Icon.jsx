import React from "react";

import { StyledContainer, StyledIcon } from "./iconStyle";

const Icon = ({ iconClass, href }) => {
  return (
    <StyledContainer href={href} target="_blank" rel="noreferrer">
      <StyledIcon className={iconClass} />
    </StyledContainer>
  );
};

export default Icon;
