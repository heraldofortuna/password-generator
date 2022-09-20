import React, { useState, Fragment } from "react";

import GlobalStyle from "./styles/globalStyles";
import "./App.css";
import generatePassword from "./constants/generatePassword";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Form from "./components/form/Form";
import Input from "./components/input/Input";

const App = () => {
  const [password, setPassword] = useState("");

  const setSubmitValue = (words) => {
    setPassword(generatePassword(words));
  };

  return (
    <Fragment>
      <GlobalStyle />
      <div className="app">
        <Header />
        <main>
          <section className="section">
            <h2>
              Genere sus propias contraseñas
              <br />
              de forma <span className="highlight">
                rápida
              </span> y <span className="highlight">segura</span>
            </h2>
          </section>
          <section className="section">
            <Form getSubmitValue={setSubmitValue} />
          </section>
          <section className="section section--secondary">
            <Input
              label="Contraseña generada"
              value={password}
              readOnly
            />
          </section>
        </main>
        <Footer />
      </div>
    </Fragment>
  );
};

export default App;
