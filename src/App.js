import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <img
        src={`${process.env.PUBLIC_URL}/assets/animated_logo.gif`}
        alt="MomoMedia Logo"
        className="logo"
      />
      <img
        src={`${process.env.PUBLIC_URL}/assets/Header_Body_Footer.png`}
        alt="MomoMedia Full Layout"
        className="layout"
      />
    </div>
  );
}

export default App;
