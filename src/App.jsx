import React, { useState, Fragment } from "react";

import GlobalStyle from "./styles/globalStyles";
import "./App.css";
import generatePassword from "./constants/generatePassword";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Form from "./components/form/Form";

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
    <Fragment>
      <GlobalStyle />
      <div className="App">
        <div className="wrapper">
          <Header />
          <main>
            <div className="container">
              <Form />
              <span>{password}</span>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
