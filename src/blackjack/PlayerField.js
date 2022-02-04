import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'

const PlayerField = (props) => {
  return (
       <div>
         <p>Player {props.player}</p>
           <Button onClick={props.onClick}>Draw a Card</Button>
       </div>
  )
};

export default PlayerField;
