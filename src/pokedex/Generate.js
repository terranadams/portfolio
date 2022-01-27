import React from "react";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const Generate = (props) => {
  const [input, setInput] = useState("Charizard");

  const handleSubmit = (e) => {
    props.handleSearch(input);
    setInput("");
    e.preventDefault();
  };

  return (
    <div className="text-center">
      <Button
        className="m-4"
        variant="info"
        onClick={() => {
          props.randomButton();
          setInput("");
        }}
      >
        Get a Random Pokémon
      </Button>
      <h5>or</h5>
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
          variant="info"
          placeholder="Search for Pokémon"
        >
          Go
        </Button>
      </form>
    </div>
  );
};

export default Generate;
