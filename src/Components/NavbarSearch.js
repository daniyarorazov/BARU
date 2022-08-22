import React from "react";
import styles from './NavbarSearch.module.scss'

function NavbarSearch() {
    return (
    <div className={styles['navbar-search']}>
        <form className={styles['search-form']}>
            <input className={styles['search-form__input']} placeholder="Search..."/>
        </form>
    </div>
    );
  }
  
  export default NavbarSearch;