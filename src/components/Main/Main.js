import React, { useEffect } from 'react';
import Scoreboard from '../Scoreboard/Scoreboard';
import Win from '../Win/Win';
import Loss from '../Loss/Loss';
import CardContainer from '../CardContainer/CardContainer';
import { useState } from 'react';
import defaultCardArray from './defaults';
import shuffle from '../shuffle';

export default function Main() {
  const [isLost, setIsLost] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [cardArray, setCardArray] = useState(defaultCardArray);

  useEffect(() => {
    console.log(clicked);
  }, [clicked]);

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
      setIsLost(true);
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
    } else {
      return;
    }
  };

  const gameOverFunction = () => {
    setGameOver(true);
    updateHighScore();
  };

  const resetGame = () => {
    console.log('clicked');
    setGameOver(false);
    setIsLost(false);
    setScore(0);
    setClicked([]);
    setCardArray(defaultCardArray);
  };

  return (
    <div>
      <Scoreboard score={score} highScore={highScore} />
      {gameOver ? (
        <div>
          {' '}
          {isLost ? (
            <Loss onClick={resetGame} score={score} />
          ) : (
            <Win onClick={resetGame} score={score} />
          )}
        </div>
      ) : (
        <></>
      )}
      <CardContainer onClick={onCardClick} cardArray={cardArray} />
    </div>
  );
}
