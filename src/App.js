import React, { useState } from "react";

import "./App.css";
import generatePassword from "./constants/generatePassword";
import Footer from "./layouts/Footer";

const App = () => {
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
    <div className="App">
      <div className="wrapper">
        <header>
          <div>
            <h1>Password Generator</h1>
          </div>
        </header>
        <main>
          <div className="wrapper">
            <form onSubmit={handleSubmit}>
              <label>
                Ingrese palabra clave
                <input name="keyword" onChange={handleChange} />
              </label>
              <label>
                Ingrese nombre de la aplicación
                <input name="app" onChange={handleChange} />
              </label>
              <button type="submit">Generar</button>
            </form>
            <span>{password}</span>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
