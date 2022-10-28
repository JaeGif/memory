import React from 'react';
import style from './Scoreboard.module.css';

export default function Scoreboard({ score, highScore }) {
  return (
    <div className={style.scoreBoardContainer}>
      <h1>Score: {score}</h1>
      <h1>HighScore: {highScore}</h1>
    </div>
  );
}
