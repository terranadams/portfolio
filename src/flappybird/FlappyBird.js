import React, { useEffect, useState } from "react";
import Bird from "./Bird";

const FlappyBird = () => {
  const [birdPosition, setBirdPosition] = useState(250);
  const birdSize = 20
  const gameHeight = 500
  const gameWidth = 500
  const gravity = 6

  useEffect(() => {
    let timeId
    if (birdPosition < gameHeight - birdSize) {
      timeId = setInterval(() => {
        setBirdPosition((birdPosition) => birdPosition + gravity);
      }, 24)
    }

    return () => {
      clearInterval(timeId)
    }
  })
  

  return (
    <div className="flappyDiv" style={{ marginTop: "30px" }}>
      <div style={{ height: `${gameHeight}px`, width: `${gameWidth}px`, backgroundColor: "blue" }}>
        <Bird top={birdPosition} size={birdSize}/>
      </div>
    </div>
  );
};

export default FlappyBird;
