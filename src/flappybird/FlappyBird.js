import React, { useEffect, useState } from "react";
import Bird from "./Bird";

const FlappyBird = () => {
  const [birdPosition, setBirdPosition] = useState(250);
  const birdSize = 20
  const gameHeight = 505
  const gameWidth = 500
  const gravity = 6
  const jumpHeight = 50

  useEffect(() => {
    let timeId
    if (birdPosition < gameHeight - birdSize) {
      timeId = setInterval(() => {
        setBirdPosition((birdPosition) => birdPosition + gravity);
      }, 30)
    }

    return () => {
      clearInterval(timeId)
    }
  })
  
  const handleClick = () => {
    let newBirdPosition = birdPosition - jumpHeight
    if (newBirdPosition < 0) {
      setBirdPosition(0)
    } else {
          setBirdPosition(newBirdPosition)
    }
  }

  return (
    <div className="flappyDiv" style={{ marginTop: "30px" }} onClick={handleClick}>
      <div style={{ height: `${gameHeight}px`, width: `${gameWidth}px`, backgroundColor: "blue" }}>
        <Bird top={birdPosition} size={birdSize}/>
      </div>
    </div>
  );
};

export default FlappyBird;
