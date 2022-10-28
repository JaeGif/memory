import React from 'react';

export default function Scoreboard({ score, highScore }) {
  return (
    <div>
      <h1>Score: {score}</h1>
      <h1>HighScore: {highScore}</h1>
    </div>
  );
}
