import React from "react";
import styles from './styles/NavbarSearch.module.sass'
import { useState } from 'react';

function NavbarSearch(props) {
    return (
        
        <div className={styles['navbar-search']}>
            <form className={styles['search-form']}>
                <input className={styles['search-form__input']} 
                    placeholder="Search..."
                    // onChange={(event) => props.setSearchEvent()
                                            
                    // }
                    value = {props.value}
                    type = {props.type}
                    autoComplete= {props.autoComplete}
                    onChange = {props.onChange}
    />
            </form>
        </div>
    );
  }
  
  export default NavbarSearch;