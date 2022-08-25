import React from "react";
import calendarIcon from "../../images/icons/calendar-icon.svg";
import profileIcon from "../../images/icons/profile-icon.svg";
import styles from "./styles/Navbar.module.sass";
import NavbarSearch from "./NavbarSearch";

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-wrapper']}>
        <a href="#" className={styles["navbar-header__link"]}>
          <div className={styles["navbar-header__logo"]}></div>
          <p className={styles["navbar-header__title"]}>BARU</p>
        </a>
      </div>
      <div className={styles['navbar-search-wrapper']}>
        <NavbarSearch searchName = {props.searchName} />
      </div>
      <a href="#" className={styles["navbar-poster"]}>
        <img
          src={calendarIcon}
          alt="poster"
          className={styles["navbar-poster__icon"]}
        />
        <p className={styles["navbar-poster__title"]}>Poster</p>
      </a>
      <a href="#" className={styles["navbar-profile"]}>
        <img
          src={profileIcon}
          alt="profile"
          className={styles["navbar-profile__icon"]}
        />
      </a>
    </nav>
  );
};

export default Navbar;
