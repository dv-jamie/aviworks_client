import { Link, useLocation } from "react-router-dom";
import styles from "./Gnb.module.css";

function Gnb() {
    const location = useLocation()
    const pathname = location.pathname

    return (
        <nav className={styles.gnb}>
            <ul>
                <li
                    className={pathname ==='/'
                        ? `${styles.menu} ${styles.selected}`
                        : styles.menu
                    }
                >
                    <Link to="/">AIVIWORKS</Link>
                </li>
                <li
                    className={pathname ==='/product'
                        ? `${styles.menu} ${styles.selected}`
                        : styles.menu
                    }
                >
                    <Link to="/product">PRODUCT</Link>
                </li>
                <li
                    className={pathname ==='/contact'
                        ? `${styles.menu} ${styles.selected}`
                        : styles.menu
                    }
                >
                    <Link to="/contact">CONTACT</Link>
                </li>
                <li
                    className={pathname ==='/recruit'
                        ? `${styles.menu} ${styles.selected}`
                        : styles.menu
                    }
                >
                    <Link to="/recruit">RECRUIT</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Gnb;