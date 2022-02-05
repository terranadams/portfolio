import React, { useState, useEffect, useContext } from "react";
import { CardContext } from "./CardContext";
import { Button, Row, Col } from "react-bootstrap";

const PlayerField = (props) => {
  const { playerOneHand, setPlayerOneHand, playerTwoHand, setPlayerTwoHand } =
    useContext(CardContext);
  const [player1, setPlayer1] = useState();

  const playerDraw = async () => {
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/${props.deckId}/draw/?count=2`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(`Player ${props.player} drew cards.`, data.cards);
        if (props.player === "1") {
          setPlayerOneHand(data.cards);
          setPlayer1(true);
        } else {
          setPlayerTwoHand(data.cards);
          setPlayer1(false);
        }
      });
  };

  return (
    <div style={{marginLeft: '20px'}}>
      <p>Player {props.player}</p>
      <Button onClick={playerDraw}>Draw 2 Cards</Button>
      <Row>
        {player1
          ? playerOneHand.map((card) => (
              <Col key={Math.random()}>
                <img
                  width="200"
                  height="250"
                  src={card.image}
                />
              </Col>
            ))
          : playerTwoHand.map((card) => (
              <Col key={Math.random()}>
                <img
                  width="200"
                  height="250"
                  src={card.image}
                />
              </Col>
            ))}
      </Row>
    </div>
  );
};

export default PlayerField;
