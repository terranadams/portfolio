import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { CardContext } from "./CardContext";
import PlayerField from "./PlayerField";

const BlackJack = () => {
  const [deck, setDeck] = useState();
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerOneResult, setPlayerOneResult] = useState();
  const [playerTwoResult, setPlayerTwoResult] = useState();
  const [playerOneDone, setPlayerOneDone] = useState(false);
  const [playerTwoDone, setPlayerTwoDone] = useState(false);

  useEffect(() => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((response) => response.json())
      .then((data) => setDeck(data));
  });

  let playerOneWins = false;
  let playerTwoWins = false;
  let draw = false;
  let gameOver = false;

    if (playerOneDone && playerTwoDone) {
      gameOver = true
    }
  
 
  return (
    <CardContext.Provider
      value={{
        playerOneHand,
        setPlayerOneHand,
        playerTwoHand,
        setPlayerTwoHand,
        playerOneResult,
        setPlayerOneResult,
        playerTwoResult,
        setPlayerTwoResult,
        playerOneDone,
        setPlayerOneDone,
        playerTwoDone,
        setPlayerTwoDone,
      }}
    >
      <div className="text-center whiteText" style={{ marginTop: "30px" }}>
        {deck && (
          <>
            <Row>
              <Col>
                {gameOver && <h3>Game Over!</h3>}
                {playerOneWins && <h3>Player 1 wins!</h3>}
                {playerTwoWins && <h3>Player 2 wins!</h3>}
                {draw && <h3>It's a draw!</h3>}
              </Col>
            </Row>

            <Row>
              <Col>
                <PlayerField player="1" deckId={deck.deck_id} />
              </Col>

              <Col>
                <PlayerField player="2" deckId={deck.deck_id} />
              </Col>
            </Row>
          </>
        )}
      </div>
    </CardContext.Provider>
  );
};

export default BlackJack;
