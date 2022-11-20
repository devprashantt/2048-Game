import React, { useEffect, useState } from 'react';
import AboveGame from './components/AboveGame';
import Game from './components/Game';
import Header from './components/Header';
import About from './container/About/About';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useLocalStorage('bestScore', 0);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  });

  return (
    <div className="container">
      <Header score={score} bestScore={bestScore} />
      <AboveGame />
      <Game setScore={setScore} />
      <About />
    </div>
  );
}

export default App;
