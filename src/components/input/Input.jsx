import React from "react";

import { StyledContainer, StyledInput } from "./inputStyle";

const Input = ({ label, name, value, readOnly, onChange }) => {
  return (
    <StyledContainer>
      {label}
      <StyledInput
        name={name}
        value={value}
        readOnly={readOnly}
        onChange={onChange}
      />
    </StyledContainer>
  );
};

export default Input;
