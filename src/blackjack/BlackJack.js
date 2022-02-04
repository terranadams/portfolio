import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import PlayerOne from "./PlayerOne";
import PlayerTwo from "./PlayerTwo";

const BlackJack = () => {

  useEffect(() => {
    getNewDeck();
  });

  const [deck, setDeck] = useState()

  const getNewDeck = async () => {
    const response = await fetch(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    ).then(res => {
        const data = res.json()
        console.log(data)
    })
    
  };

  return (
    <div>
      <Row>
        <Col>
          <PlayerOne />
        </Col>
        <Col>
          <PlayerTwo />
        </Col>
      </Row>
    </div>
  );
};

export default BlackJack;
