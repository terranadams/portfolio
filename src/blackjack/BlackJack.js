import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import PlayerOne from "./PlayerOne";
import PlayerTwo from "./PlayerTwo";

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
        if (player == 1) {
          setPlayerOneHand(data.cards[0].code);
          console.log('Player 1 drew ' + data.cards[0].code)
        } else if (player == 2) {
          setPlayerTwoHand(data.cards[0].code);
          console.log('Player 2 drew ' + data.cards[0].code)
        }
      });
  };

  const showHands = () => {
    console.log("Player1 got " + playerOneHand + " while Player2 got " + playerTwoHand);
  };

  return (
    <div className="text-center">
      <Row>
        <Col>
          <PlayerOne onClick={() => playerDraw(1)} />
        </Col>
        <Col>
          <PlayerTwo onClick={() => playerDraw(2)} />
        </Col>
      </Row>
      <Button onClick={showHands}>Show player hands</Button>
    </div>
  );
};

export default BlackJack;
