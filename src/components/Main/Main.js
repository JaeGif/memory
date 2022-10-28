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
  const [cardArray, setCardArray] = useState(defaultCardArray);
  useEffect(() => {
    console.log('aync made it dad');
    console.log(clicked);
  }, [clicked]);

  const randomizeCards = () => {
    setCardArray([...shuffle(cardArray)]);
  };

  const onCardClick = (id) => {
    if (!isAlreadyClicked(id, clicked)) {
      setClicked([...clicked, id]);
      randomizeCards();
      setScore(score + 1);
    } else {
      setIsLost(true);
      console.log('lose');
    }

    // check that the card has NOT yet been clicked.
    // if it has, lose, else
    // increment score and
    // randomize cards
  };
  const isAlreadyClicked = (id, clickedArray) => {
    for (let i = 0; i < clickedArray.length; i++) {
      if (id === clickedArray[i]) {
        return true;
      }
    }
    return false;
  };

  return (
    <div>
      <Scoreboard />
      {isLost ? <Loss /> : <Win />}
      <CardContainer onClick={onCardClick} cardArray={cardArray} />
    </div>
  );
}
