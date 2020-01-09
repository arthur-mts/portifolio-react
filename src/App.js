import React from 'react';
import './App.css';

import Info from './components/Info';
import Navbar from './components/Navbar';

import Router from './routes';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <Info />
        <Router/>
      </div>

    </div>
  );
}

export default App;

// https://github.com/artenks/gympoint/tree/master/web