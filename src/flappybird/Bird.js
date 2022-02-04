import React from 'react';

const Bird = (props) => {
  return <div style={{
      position: 'absolute',
      backgroundColor: 'red',
      height: `${props.size}px`,
      width: `${props.size}px`,
      top: `${props.top}px`,
      borderRadius: '50%'
  }}></div>;
};

export default Bird;
