import React from "react";
import styles from './NavbarSearch.module.css'

function NavbarSearch() {
    return (
    <div className={styles.navbar__search}>
        <form className={styles.search__form}>
            <input className={styles.search__form__input} placeholder="Search..."></input>
        </form>
    </div>
    );
  }
  
  export default NavbarSearch;