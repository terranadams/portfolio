import React from 'react';
import { Button } from 'react-bootstrap'

const PlayerTwo = (props) => {
  return (
    <div>
        <Button onClick={props.onClick}>Get Card</Button>
    </div>
)
};

export default PlayerTwo;
