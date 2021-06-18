import React from 'react';
import './bulma.css';
import Cam from './components/zerocam.js'
import Bar from './components/navbar.js'
import Config from './components/config.js'

function App() {
  return (
    <div>
      <Bar/>
      <Cam/>
    </div>
  );
}

export default App;
