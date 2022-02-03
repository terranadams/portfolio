import React, { useState } from "react";
import axios from 'axios'



const Form = (props) => {
  const [userName, setUserName] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault(); // keeps the page from being refreshed by the form submission
    const response = await axios.get(
      `https://api.github.com/users/${userName}`
    );
    console.log(response.data);
    props.onSubmit(response.data); // whatever function gets passed into the 'onSubmit' prop will take 'response.data' as an argument.
    // and that's how we pass data to a parent from a child. The function is defined in the parent, and the argument is defined in the child.
    // We're adding this JSON object to an array that is kept in the parent component with the 'addNewProfile' function within it.
    setUserName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
        placeholder="What's your Github?"
        required
      />
      <br></br><br></br>
      <button className="btn btn-success">Add Github User</button>
    </form>
  );
};

export default Form;