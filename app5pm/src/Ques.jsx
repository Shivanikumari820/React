import React from 'react';

function Boxes() {
  const containerStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const outerBoxStyle = {
    backgroundColor: 'skyblue',
    border: '4px solid purple',
    padding: '20px',
    borderRadius: '20px',
  };

  const middleBoxStyle = {
    backgroundColor: 'yellow',
    border: '4px solid green',
    padding: '20px',
    borderRadius: '20px',
  };

  const innerBoxStyle = {
    backgroundColor: 'orange',
    border: '4px solid red',
    padding: '20px',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: '20px',
  };

  return (
    <div style={containerStyle}>
      <div style={outerBoxStyle}>
        <div style={middleBoxStyle}>
          <div style={innerBoxStyle}>
            cybrom
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boxes;
