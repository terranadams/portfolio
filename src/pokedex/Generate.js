import React from "react";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const Generate = (props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    props.handleSearch(input);
    setInput("");
    e.preventDefault();
  };

  return (
    <div className="text-center">
      <Button
        className="m-4"
        variant="success"
        onClick={() => {
          props.randomButton();
          setInput("");
        }}
      >
        Get Random Pokémon
      </Button>
      or
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Enter a Pokémon name"
          required
        />
        <Button
          type="submit"
          className="m-4"
          variant="success"
          placeholder="Search for Pokémon"
        >
          Go
        </Button>
      </form>
    </div>
  );
};

export default Generate;
