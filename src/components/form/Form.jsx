import React, { useState } from "react";

import { StyledForm } from "./formStyle";
import Input from "../input/Input";
import Button from "../button/Button";
import generatePassword from "../../constants/generatePassword";

const Form = () => {
  const [words, setWords] = useState({ keyword: "", app: "" });
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setWords({ ...words, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setPassword(generatePassword(words));
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        label="Ingrese palabra clave"
        name="keyword"
        onChange={handleChange}
      />
      <Input
        label="Ingrese nombre de la aplicación"
        name="app"
        onChange={handleChange}
      />
      <Button type="submit" text="Generar" />
    </StyledForm>
  );
};

export default Form;
