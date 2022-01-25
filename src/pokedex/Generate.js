import React from "react";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const Generate = (props) => {

  const [input, setInput] = useState('')

  return (
    <div className="text-center">
      <Button className="m-4" variant="success" onClick={props.onClick}>
        Get Random Pokémon
      </Button>
      or 
      <Form onSubmit={() => {
        props.handleSubmit(input)
        setInput('')
      }}>
      <input
        type='text'
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder='Enter a Pokémon name'
        required
      />
      <Button className="m-4" variant="success">Search for Pokémon</Button>
    </Form>
    </div>
  );
};

export default Generate;
