import React from "react";

import { StyledButton } from "./buttonStyle";

const Button = ({ type = "text", text, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
