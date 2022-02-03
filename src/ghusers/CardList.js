import React from "react";
import Card from "./Card";

const CardList = (props) => {
  return (
    <div>
      {props.profiles.map((profile) => (
        <Card key={profile.id} profile={profile} /> // CardList takes in an array of objects as a prop, and maps through them creating a Card for each one.
      ))}
    </div>
  );
};

export default CardList;
