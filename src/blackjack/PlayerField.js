import React, { useState, useEffect, useContext } from "react";
import { CardContext } from "./CardContext";
import { Button, Row, Col } from "react-bootstrap";

const PlayerField = (props) => {
  const { playerOneHand, setPlayerOneHand, playerTwoHand, setPlayerTwoHand } =
    useContext(CardContext);

  const [handValue, setHandValue] = useState();
  const [initialDraw, setInitialDraw] = useState(false);
  const [holding, setHolding] = useState(false);
  const [busted, setBusted] = useState(false);
  const [matched, setMatched] = useState(false);

  const getHandValue = (cards) => {
    let totalValue = 0;
    let ace = false;
    cards.map((card) => {
      if (Number(card.value)) totalValue = totalValue + Number(card.value);
      else if (
        card.value === "KING" ||
        card.value === "QUEEN" ||
        card.value === "JACK"
      ) {
        totalValue = totalValue + 10;
      } else {
        if (totalValue + 11 > 20) {
          totalValue = totalValue + 1;
          ace = true;
        } else {
          totalValue = totalValue + 11;
          ace = true;
        }
      }
    });
    if (ace && totalValue > 21) {
      totalValue = totalValue - 10;
    }
    // console.log(totalValue)
    setHandValue(totalValue);
    if (totalValue == 21) {
      setMatched(true);
      setHolding(true);
    } else if (totalValue > 21) {
      setBusted(true);
      setHolding(true);
    }
  };

  const playerDraw2 = async () => {
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/${props.deckId}/draw/?count=2`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(`Player ${props.player} drew cards.`, data.cards);
        if (props.player === "1") {
          setPlayerOneHand(data.cards);
          getHandValue(data.cards);
          setInitialDraw(true);
        } else {
          setPlayerTwoHand(data.cards);
          getHandValue(data.cards);
          setInitialDraw(true);
        }
      });
  };

  const playerDraw1 = async () => {
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/${props.deckId}/draw/?count=1`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(`Player ${props.player} drew one card.`, data.cards);
        if (props.player === "1") {
          let newHand = [...playerOneHand, data.cards[0]];
          setPlayerOneHand(newHand);
          getHandValue(newHand);
        } else {
          let newHand = [...playerTwoHand, data.cards[0]];
          setPlayerTwoHand(newHand);
          getHandValue(newHand);
        }
      });
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <p>Player {props.player}</p>
      {!initialDraw && !holding && (
        <Button onClick={playerDraw2} style={{ marginBottom: "20px" }}>
          Draw 2 Cards
        </Button>
      )}
      {initialDraw && !holding && (
        <>
          <Button
            onClick={playerDraw1}
            variant="success"
            style={{ marginBottom: "20px" }}
          >
            Draw another card
          </Button>
          <Button
            onClick={() => setHolding(true)}
            variant="warning"
            style={{ marginBottom: "20px" }}
          >
            Hold
          </Button>
        </>
      )}
      <br></br>
      <Row>
        <Col>
          <h5>Current Hand Value: {handValue}</h5>
          <br></br>
        </Col>
      </Row>
      <Row>{busted && <Col><h4  style={{marginBottom: '20px'}}>You busted!</h4></Col>}</Row>
      <Row>{matched && <Col><h4 style={{marginBottom: '20px'}}>You matched!</h4></Col>}</Row>
      <Row>
        {props.player === "1"
          ? playerOneHand.map((card) => (
              <Col key={Math.random()}>
                <img width="200" height="250" src={card.image} />
              </Col>
            ))
          : playerTwoHand.map((card) => (
              <Col key={Math.random()}>
                <img width="200" height="250" src={card.image} />
              </Col>
            ))}
      </Row>
    </div>
  );
};

export default PlayerField;
