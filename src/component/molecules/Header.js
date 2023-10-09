import { Link } from 'react-router-dom';
import { ArrowDown, Internet } from '../../assets/icons';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import Gnb from './Gnb';
import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header_inner}>
                <Link to={"/"}>
                    <Logo />
                </Link>
                
                <Gnb />

                <div className={styles.selectbox_language}>
                    <Internet />
                    <span>한국어</span>
                    <ArrowDown />
                    
                    <ul className={styles.language_list}>
                        <li className={styles.kor}>한국어</li>
                        <li className={styles.eng}>English</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;