import styles from "./Header.module.css";

function Gnb() {
    return (
        <nav className={styles.gnb}>
            <ul>
                <li className={styles.menu}>AIVIWORKS</li>
                <li className={styles.menu}>PRODUCT</li>
                <li className={styles.menu}>CONTACT</li>
                <li className={styles.menu}>RECRUIT</li>
            </ul>
        </nav>
    );
}

export default Gnb;