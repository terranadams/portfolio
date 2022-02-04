import React from "react";
import Bird from "./Bird";

const FlappyBird = () => {
  return (
    <div className="flappyDiv">
      <div style={{width: '500px', height: '500px', backgroundColor: 'blue'}}>
        <Bird size={"20px"} />
      </div>
    </div>
  );
};

export default FlappyBird;
