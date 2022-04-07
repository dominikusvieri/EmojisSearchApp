import styles from './Navbar.module.css'
import searchIcon from '../../assets/search-icon.svg'
import emojiIcon from '../../assets/emoji-icon.svg'
import React from 'react'


const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <img style={{marginRight: 8}} className={styles.navIcon} src={emojiIcon} alt="Emoji" />
            <img style={{marginTop: 3}} className={styles.navIcon} src={searchIcon} alt="Search" />
            <span className={styles.navTitle}>Er</span>
        </nav>
    )
}

export default Navbar;