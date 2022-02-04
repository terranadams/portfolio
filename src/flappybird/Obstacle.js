import React from 'react';

const Obstacle = (props) => {
  return <div style={{
      position: 'relative',
      top: `${props.top}px`,
      backgroundColor: 'green',
      width: `${props.width}px`,
      height: `${props.height}px`,
      left: `${props.left}px`
  }}></div>;
};

export default Obstacle;
