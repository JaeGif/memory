import React from 'react';
import github from '../../assets/icons/github.png';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={`${styles.footerContainer} ${styles.footerDiv}`}>
      <a className={styles.footerContainer} href='https://github.com/JaeGif'>
        <h2>JaeGif</h2>
        <img className={styles.githubIcon} src={github} alt='github'></img>
      </a>
    </div>
  );
}
