import React, { useState, useEffect, useContext } from "react";
import { CardContext } from "./CardContext";
import { Button, Row, Col } from "react-bootstrap";

const PlayerField = (props) => {
  const { playerOneHand, setPlayerOneHand, playerTwoHand, setPlayerTwoHand } =
    useContext(CardContext);
  const [player1, setPlayer1] = useState(false);

  const [handValue, setHandValue] = useState()

  const getHandValue = (cards) => {
    let totalValue = 0
    cards.map(card => {
      if (card.value === "KING" || card.value === "QUEEN" || card.value === "JACK") {
        totalValue = totalValue + 10
      } else if (card.value !== "ACE") {
        totalValue = totalValue + Number(card.value)
      } else {
        if (totalValue > 20) {
          totalValue = totalValue + 1
        } else {
          totalValue = totalValue + 11
        }
      }
    })
    // console.log(totalValue)
    setHandValue(totalValue)
  }

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
          getHandValue(data.cards)
        } else {
          setPlayerTwoHand(data.cards);
          setPlayer1(false);
          getHandValue(data.cards)
        }
      });
  };

  // make hook for handValue, setHandValue within a new function that takes parameter
  // and distinguishes the Ace, King, Queen, and Joker

  // make button switch to different function after initial card draws


  return (
    <div style={{marginLeft: '20px'}}>
      <p>Player {props.player}</p>
      <Button onClick={playerDraw} style={{marginBottom: '20px'}}>Draw 2 Cards</Button>
      <br></br>
      <Row>
        <Col>
        <h5>Current Hand Value: {handValue}</h5>
        <br></br>
        </Col>
      </Row>
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
