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

  const getACard = async () => {
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
    )
      .then((res) => res.json())
      .then(data => console.log(data.cards[0]))
  };

  return (
    <div>
      <Row>
        <Button onClick={getACard}>Get Card</Button>
      </Row>
      {/* <Row>
        <Col>
          <PlayerOne />
        </Col>
        <Col>
          <PlayerTwo />
        </Col>
      </Row> */}
    </div>
  );
};

export default BlackJack;
