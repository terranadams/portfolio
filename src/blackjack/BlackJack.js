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

  const findWinner = () => {
    if (playerOneResult <= 21 && playerTwoResult !== 21 && playerOneResult > playerTwoResult) {
      playerOneWins = true
    } else if (playerOneResult !== 21 && playerTwoResult <= 21 && playerOneResult < playerTwoResult) {
      playerTwoWins = true
    } else if (playerOneResult == playerTwoResult) {
      draw = true
    } else if (playerOneResult <= 21 && playerTwoResult > 21) {
      playerOneWins = true
    } else if (playerOneResult > 21 && playerTwoResult <= 21) {
      playerTwoWins = true
    }
  };

  if (playerOneDone && playerTwoDone) {
    findWinner();
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
                {(playerOneWins || playerTwoWins || draw) && <a href='blackjack'><Button style={{marginBottom: '10px'}}>Play Again</Button></a>}
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
