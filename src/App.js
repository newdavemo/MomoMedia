import React from 'react';

function App() {
  return (
    <div style={{ backgroundColor: '#0a0a0f', minHeight: '100vh', position: 'relative' }}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/animated_logo.gif`}
        alt="MomoMedia Logo"
        style={{
          position: 'absolute',
          top: '2rem',
          left: '2rem',
          width: '150px',
          zIndex: 10,
        }}
      />
      <img
        src={`${process.env.PUBLIC_URL}/assets/Header_Body_Footer.png`}
        alt="MomoMedia Full Layout"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
        }}
      />
    </div>
  );
}

export default App;
