import React from 'react';

const Bird = (props) => {
  return <div style={{
      position: 'absolute',
      backgroundColor: 'green',
      height: '20px',
      width: '20px',
      top: props.top,
      borderRadius: '50%'
  }}></div>;
};

export default Bird;
