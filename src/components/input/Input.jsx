import React from "react";

import { StyledContainer, StyledInput } from "./inputStyle";

const Input = ({ label, name, onChange }) => {
  return (
    <StyledContainer>
      {label}
      <StyledInput name={name} onChange={onChange} />
    </StyledContainer>
  );
};

export default Input;
