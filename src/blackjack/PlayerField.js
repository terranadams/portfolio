import React, { useState, useEffect, useContext } from 'react';
import { CardContext } from './CardContext';
import { Button } from 'react-bootstrap'

const PlayerField = (props) => {

  const { playerOneHand, setPlayerOneHand, playerTwoHand, setPlayerTwoHand } = useContext(CardContext);

  const playerDraw = async () => {
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/${props.deckId}/draw/?count=2`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(`Player ${props.player} drew cards.`)
        // console.log(data.cards)
        if (props.player == '1') setPlayerOneHand(data.cards)
        else if (props.player == '2') setPlayerTwoHand(data.cards)
      });
  };


  return (
       <div>
         <p>Player {props.player}</p>
           <Button onClick={playerDraw}>Draw a Card</Button>
       </div>
  )
};

export default PlayerField;
