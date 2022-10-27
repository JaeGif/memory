import React from 'react';
import Card from '../Card/Card';
import styles from '../CardContainer/CardContainer.module.css';

const CardContainer = (props) => {
  const cards = props.cardArray.map((char) => (
    <Card onClick={props.onClick} key={char.id} card={char} />
  ));

  return <div className={styles.cardContainers}>{cards}</div>;
};

export default CardContainer;
