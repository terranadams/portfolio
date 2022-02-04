import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { CardContext } from "./CardContext";
import PlayerField from "./PlayerField";

const BlackJack = () => {
  const [deck, setDeck] = useState();
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);

  useEffect(() => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((response) => response.json())
      .then((data) => setDeck(data));
  });

  const showHands = () => {
    console.log(playerOneHand)
    console.log(playerTwoHand)
  };

  return (
    <CardContext.Provider value={{playerOneHand, setPlayerOneHand, playerTwoHand, setPlayerTwoHand}}>
      <div className="text-center">
        {deck && (
          <Row>
            <Col>
              <PlayerField player="1" deckId={deck.deck_id} />
            </Col>
          <Col>
          <Button onClick={showHands}>Show player hands</Button>
          </Col>
            <Col>
              <PlayerField player="2" deckId={deck.deck_id} />
            </Col>
          </Row>
        )}
      </div>
    </CardContext.Provider>
  );
};

export default BlackJack;
