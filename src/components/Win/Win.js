import React from 'react';

export default function Win({ score, onClick }) {
  return (
    <>
      <h1>
        Congratulations! You won! <br />
        Your score was {score}.
      </h1>
      <button onClick={() => onClick()}>Try Again?</button>
    </>
  );
}
