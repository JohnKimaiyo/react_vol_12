import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="your name"
        />
        <p>{name}</p>
      </form>
    </div>
  );
}

export default Form;
