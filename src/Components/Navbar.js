import React from "react";
import calendarIcon from '../images/calendar-icon.svg';
import profileIcon from '../images/profile-icon.svg';
import styles from './Navbar.module.css'
import NavbarSearch from "./NavbarSearch";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <a href = "#" className={styles.navbar__header}>
        <div className={styles.navbar__header__logo}></div>
        <p className={styles.navbar__header__title}>BARU</p>
      </a>
      <NavbarSearch/>
      <a href = "#" className={styles.navbar__link}>
        <img src={calendarIcon} alt="poster" className={styles.navbar__link__icon}></img>
        <p className={styles.navbar__link__title}>Poster</p>
      </a>
      <a href="#" className={styles.navbar__profile}>
        <img src={profileIcon} alt="profile" className={styles.navbar__profile__icon}></img>
      </a>
    </div>
  );
}

export default Navbar;