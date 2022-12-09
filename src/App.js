import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Title from "./components/Title";
import MyName from "./components/MyName";
import Form from "./components/Form";
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <Title name="Mobile Developer" />
      <Title name="Front Developer" />
      <Title name="Solidity Developer" />
      <MyName/>
      <Form/>
    </div>
  );
}

export default App;
