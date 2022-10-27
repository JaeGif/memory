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
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState([]);

  let [cardArray, setCardArray] = useState(defaultCardArray);

  const randomizeCards = () => {
    setCardArray([...shuffle(cardArray)]);
  };

  const onCardClick = (key) => {
    /*     setClicked([...clicked, key]);
     */
    randomizeCards();
    setScore(score + 1);

    console.log('made it dad');
    console.log(score);

    // check that the card has NOT yet been clicked.
    // if it has, lose, else
    // increment score and
    // randomize cards
  };

  return (
    <div>
      <Scoreboard />
      {isLost ? <Loss /> : <Win />}
      <CardContainer onClick={onCardClick} cardArray={cardArray} />
    </div>
  );
}
