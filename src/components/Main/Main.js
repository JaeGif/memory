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

  const [cardArray, setCardArray] = useState([]);
  useEffect(() => setCardArray(shuffle(defaultCardArray)), []);

  const randomizeCards = () => {
    setCardArray(shuffle(cardArray));
  };
  /* 
  const onCardClick = () => {
    // check that the card has NOT yet been clicked.
    // if it has, lose, else
    // increment score and
    // randomize cards
  };
  const wasClicked = (cardID) => {};
 */
  return (
    <div>
      <Scoreboard />
      {isLost ? <Loss /> : <Win />}
      <CardContainer cardArray={cardArray} />
    </div>
  );
}
