import React from 'react';
import Card from '../Card/Card';
import styles from '../CardContainer/CardContainer.module.css';

const CardContainer = ({ cardArray }) => {
  const cards = cardArray.map((char) => <Card key={char.id} card={char} />);

  return <div className={styles.cardContainers}>{cards}</div>;
};

export default CardContainer;
