// src/App.js
import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Qualifications from './components/Qualifications';
import MyServices from './components/MyServices';
import MyPortfolioProjects from './components/MyPortfolioProjects';
import Contacts from './components/Contacts';

function App(
) {
  return (
    <div className="App">
      <header className="App-header">
      <p>Your portfolio website</p>
      </header>
      <main className="App-main">
        <Intro />
        <Skills />
        <Qualifications />
        <MyServices />
        <MyPortfolioProjects />
        <Contacts />
      </main>
    </div>
  );
}

export default App;
