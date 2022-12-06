import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Title from "./components/Title";
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <Title name="Mobile Developer" />
      <Title name="Front Developer" />
      <Title name="Solidity Developer" />
    </div>
  );
}

export default App;
