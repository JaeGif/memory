import React, { useEffect } from 'react';
import Scoreboard from '../Scoreboard/Scoreboard';
import Win from '../Win/Win';
import Loss from '../Loss/Loss';
import CardContainer from '../CardContainer/CardContainer';
import { useState } from 'react';
import defaultCardArray from './defaults';
import shuffle from '../shuffle';
import { click } from '@testing-library/user-event/dist/click';

export default function Main() {
  const [isLost, setIsLost] = useState(false);
  const [score, setScore] = useState(0);

  let [cardArray, setCardArray] = useState(defaultCardArray);

  const randomizeCards = () => {
    setCardArray([...shuffle(cardArray)]);
  };

  const onCardClick = () => {
    randomizeCards();

    console.log('made it dad');
    console.log(score);

    // check that the card has NOT yet been clicked.
    // if it has, lose, else
    // increment score and
    // randomize cards
  };
  const wasClicked = (cardID) => {};

  return (
    <div>
      <Scoreboard />
      {isLost ? <Loss /> : <Win />}
      <CardContainer onClick={onCardClick} cardArray={cardArray} />
    </div>
  );
}
