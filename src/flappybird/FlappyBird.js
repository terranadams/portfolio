import React, { useEffect, useState } from "react";
import Bird from "./Bird";
import Obstacle from "./Obstacle";

const birdSize = 20;
const gameHeight = 505;
const gameWidth = 500;
const gravity = 6;
const jumpHeight = 50;
const obstacleWidth = 40;
const obstacleGap = 200;

const FlappyBird = () => {
  const [birdPosition, setBirdPosition] = useState(250);
  const [gameHasStarted, setGameHasStarted] = useState(false);
  const [obstacleHeight, setObstacleHeight] = useState(100);
  const [obstacleLeft, setObstacleLeft] = useState(gameWidth - obstacleWidth);
  const [score, setScore] = useState(0);

  const bottomObstacleHeight = gameHeight - obstacleGap - obstacleHeight;

  useEffect(() => {
    let timeId;
    if (gameHasStarted && birdPosition < gameHeight - birdSize) {
      timeId = setInterval(() => {
        setBirdPosition((birdPosition) => birdPosition + gravity);
      }, 30);
    }

    return () => {
      clearInterval(timeId);
    };
  }, [birdPosition, gameHasStarted]);

  useEffect(() => {
    let obstacleId;
    if (gameHasStarted && obstacleLeft >= -obstacleWidth) {
      obstacleId = setInterval(() => {
        setObstacleLeft((obstacleLeft) => obstacleLeft - 5);
      }, 24);

      return () => {
        clearInterval(obstacleId);
      };
    } else {
      setObstacleLeft(gameWidth - obstacleWidth);
      setObstacleHeight(
        Math.floor(Math.random() * (gameHeight - obstacleGap * 2) + obstacleGap)
      );
      // setScore(score => score + 1)
    }
  }, [gameHasStarted, obstacleLeft]);

  useEffect(() => {
    const hasCollidedWithTopObstacle =
      birdPosition <= 0 && birdPosition < obstacleHeight;
    const hasCollidedWithBottomObstacle =
      birdPosition <= 500 && birdPosition <= 500 - bottomObstacleHeight;
    if (
      obstacleLeft >= 0 &&
      obstacleLeft <= obstacleWidth &&
      (hasCollidedWithTopObstacle || hasCollidedWithBottomObstacle)
    ) {
      setGameHasStarted(false);
    }
  }, [birdPosition, obstacleHeight, bottomObstacleHeight, obstacleLeft]);

  const handleClick = () => {
    let newBirdPosition = birdPosition - jumpHeight;
    if (!gameHasStarted) setGameHasStarted(true);
    else if (newBirdPosition < 0) {
      setBirdPosition(0);
    } else {
      setBirdPosition(newBirdPosition);
    }
  };

  return (
    <div>
      <br></br>
      <p className="text-center whiteText">This app is temporarily broken, but click in the square to give it a try anyway.</p>
      <div
        className="flappyDiv"
        style={{ marginTop: "30px" }}
        onClick={handleClick}
      >
        <div
          id="gameBox"
          style={{
            height: `${gameHeight}px`,
            width: `${gameWidth}px`,
            backgroundColor: "blue",
            overflow: "hidden",
          }}
        >
          <Obstacle
            top={0}
            width={obstacleWidth}
            height={obstacleHeight}
            left={obstacleLeft}
          />
          <Obstacle
            top={gameHeight - (obstacleHeight + bottomObstacleHeight)}
            width={obstacleWidth}
            height={bottomObstacleHeight}
            left={obstacleLeft}
          />
          <Bird top={birdPosition} size={birdSize} />
        </div>
      </div>
    </div>
  );
};

export default FlappyBird;
