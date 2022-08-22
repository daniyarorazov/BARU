import React from "react";
import styles from './styles/Footer.module.sass';
import homeIcon from '../images/icons/home-icon.svg';
import contactIcon from '../images/icons/chat-icon.svg';
import aboutIcon from '../images/icons/note-icon.svg';

function Footer() {
    return (
      <footer className={styles['footer']}>
        <a href="#" className={styles['footer-link']}>
          <div className={styles['footer-link__icon']}></div>
          <p className={styles['footer-link__title']}>BARU</p>
        </a>
        <nav className={styles['footer-nav']}>
          <a href="#" className={styles['nav-item']}>
            <img src={homeIcon} className={styles['nav-item__icon']}/>
            <p className={styles['nav-item__title']}>Главная</p>
          </a>
          <a href="#" className={styles['nav-item']}>
            <img src={contactIcon} className={styles['nav-item__icon']}/>
            <p className={styles['nav-item__title']}>Контакты</p>
          </a>
          <a href="#" className={styles['nav-item']}>
            <img src={aboutIcon} className={styles['nav-item__icon']}/>
            <p className={styles['nav-item__title']}>О проекте</p>
          </a>
        </nav>
      </footer>
    );
  }

  export default Footer;