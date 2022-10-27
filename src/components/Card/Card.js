import React from 'react';
import styles from './Card.module.css';
// each card contains and img and a name which are props passed when they're created.

export default function Card({ onClick, card, id }) {
  return (
    <div onClick={() => onClick(id)} className={styles.cardWrapper}>
      <img className={styles.person} src={card.url} alt='missing person' />
      <h2 className={styles.name}>{card.name}</h2>
    </div>
  );
}
