"use client"
import styles from './header.module.css'
export default function Header({search, onSearchChange}) {
    return(
        <header className={styles.header}>
            <nav className={styles.searchbar}>
                <input className={styles.search} value={search} onChange={(e) => onSearchChange(e.target.value)} type="search" />
                <img className={styles.searchicon} src='/magnifying-glass-bold.svg' />
            </nav>
            <img src='/test.PNG' className={styles.img}/>
            <nav className={styles.navigation}>
                <a className={styles.link} href='#home'>Home</a>
                <div className={styles.line} />
                <a className={styles.link} href='#dinosaurs'>Dinosaurs</a>
                <div className={styles.line} />
                <a className={styles.link} href='#about' >About</a>
            </nav>
        </header>
    );
}