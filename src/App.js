import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header.js'
import Home from './components/Home.js'
import Section from './components/Section.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <Section /> */}
    </div>
  );
}

export default App;
