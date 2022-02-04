import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import PlayerField from "./PlayerField";

const BlackJack = () => {
  const [deck, setDeck] = useState();
  const [playerOneHand, setPlayerOneHand] = useState();
  const [playerTwoHand, setPlayerTwoHand] = useState();

  useEffect(() => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((response) => response.json())
      .then((data) => setDeck(data));
  });

  const playerDraw = async (player) => {
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
    )
      .then((res) => res.json())
      .then((data) => {
        //   setPlayerHand(data.cards[0].code)
        if (player === 1) {
          setPlayerOneHand(data.cards[0].code);
          console.log("Player 1 drew " + data.cards[0].code);
        } else if (player === 2) {
          setPlayerTwoHand(data.cards[0].code);
          console.log("Player 2 drew " + data.cards[0].code);
        }
      });
  };

  const showHands = () => {
    console.log(
      "Player1 got " + playerOneHand + " while Player2 got " + playerTwoHand
    );
  };

  return (
    <div className="text-center">
      <Row>
        <Col>
          <PlayerField player="1" onClick={() => playerDraw(1)} />
        </Col>
        <Col>
          <Button onClick={showHands}>Show player hands</Button>
        </Col>
        <Col>
          <PlayerField player="2" onClick={() => playerDraw(2)} />
        </Col>
      </Row>
    </div>
  );
};

export default BlackJack;
