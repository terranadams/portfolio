import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'

const PlayerOne = (props) => {
  return (
       <div>
           <Button onClick={props.onClick}>Get Card</Button>
       </div>
  )
};

export default PlayerOne;
