import React from "react";

export default function Event() {
  const testClick = () => {
    alert("good morning react developer");
  };

  return (
    <div className="App">
      <button onClick={testClick}>Click Me</button>
    </div>
  );
}
