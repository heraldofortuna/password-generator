import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;

    setCurrentPassword(value);
  };

  const handleClick = () => {
    setPassword(currentPassword);
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
            <label>
              Ingrese palabra clave
              <input onChange={handleChange} />
            </label>
            <span id="password">{password}</span>
            <button onClick={handleClick}>Generar</button>
          </div>
        </main>
        <footer>
          <div className="wrapper">
            <p>- Hecho por Heraldo Fortuna -</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
