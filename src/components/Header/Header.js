import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <h3>Memory Game</h3>
      <p>Click only cards you haven't clicked before!</p>
    </div>
  );
}
