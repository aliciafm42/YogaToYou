import { useState } from "react";

export default function Form() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You submitted: ${inputValue}`);
    setInputValue(""); // reset input
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
