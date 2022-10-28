import React, { useEffect } from 'react';
import Scoreboard from '../Scoreboard/Scoreboard';

import CardContainer from '../CardContainer/CardContainer';
import { useState } from 'react';
import defaultCardArray from './defaults';
import shuffle from '../shuffle';

export default function Main() {
  const checkForStoredHighScore = () => {
    if (localStorage.getItem('highScore') === null) {
      return 0;
    } else {
      return localStorage.getItem('highScore');
    }
  };

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(checkForStoredHighScore());
  const [clicked, setClicked] = useState([]);
  const [cardArray, setCardArray] = useState(defaultCardArray);

  useEffect(() => {
    updateHighScore();
  });
  useEffect(() => {});

  const randomizeCards = () => {
    setCardArray([...shuffle(cardArray)]);
  };

  const onCardClick = (id) => {
    if (clicked.length === cardArray.length) {
      return gameOverFunction();
    }
    if (!isAlreadyClicked(id, clicked)) {
      setClicked([...clicked, id]);
      randomizeCards();
      setScore(score + 1);
    } else {
      gameOverFunction();
    }
  };
  const isAlreadyClicked = (id, clickedArray) => {
    for (let i = 0; i < clickedArray.length; i++) {
      if (id === clickedArray[i]) {
        return true;
      }
    }
    return false;
  };

  const updateHighScore = () => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('highScore', highScore + 1);
    } else {
      return;
    }
  };

  const gameOverFunction = () => {
    updateHighScore();
    resetGame();
  };

  const resetGame = () => {
    setScore(0);
    setClicked([]);
    setCardArray(defaultCardArray);
  };

  return (
    <div>
      <Scoreboard score={score} highScore={highScore} />
      <CardContainer onClick={onCardClick} cardArray={cardArray} />
    </div>
  );
}
