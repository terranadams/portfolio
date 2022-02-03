import React from "react";
import Card from "./Card";

const CardList = (props) => {
  return (
      <div>
        {props.profiles.map((profile) => (
          <a key={Math.random()} href={profile.html_url} target='_blank' style={{textDecoration: 'none'}}>
          <Card profile={profile} /> {/* CardList takes in an array of objects as a prop, and maps through them creating a Card for each one. */}
          </a>
        ))}
      </div>
  );
};

export default CardList;
