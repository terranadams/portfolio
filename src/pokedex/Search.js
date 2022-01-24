import React from "react";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const Search = (props) => {
    
  const [input, setInput] = useState("");

  return (
    <div>
      <Form>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        ></input>
        <Button
          className="m-4"
          variant="success"
          onSubmit={() => props.onSubmit(input)}
        >
          Search Pokemon
        </Button>
      </Form>
    </div>
  );
};

export default Search;
