import React from 'react';
import Card from '../Card/Card';

const CardContainer = ({ cardArray }) => {
  const cards = cardArray.map((char) => <Card key={char.id} card={char} />);

  return <>{cards}</>;
};
export default CardContainer;
