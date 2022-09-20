import React, { useState } from "react";

import { StyledForm } from "./formStyle";
import Input from "../input/Input";
import Button from "../button/Button";

const Form = ({ getSubmitValue }) => {
  const [words, setWords] = useState({ keyword: "", app: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setWords({ ...words, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    getSubmitValue(words);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        label="Ingrese palabra clave"
        name="keyword"
        onChange={handleChange}
      />
      <Input
        label="Ingrese el dominio de la app"
        name="app"
        onChange={handleChange}
      />
      <Button type="submit" text="Generar" />
    </StyledForm>
  );
};

export default Form;
