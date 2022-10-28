import React from 'react';

export default function Loss({ score, onClick }) {
  return (
    <>
      <h1>
        Sorry... You lost. Better luck next time. <br />
        Your score was {score}.
      </h1>
      <button onClick={() => onClick()}>Try Again?</button>
    </>
  );
}
