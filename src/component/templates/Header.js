import { Link } from 'react-router-dom';
import { ArrowDown, Internet } from '../../assets/icons';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import Gnb from '../molecules/Gnb';
import styles from "./Header.module.css";

function Header({ language }) {
    return (
        <header className={styles.header}>
            <div className={styles.header_inner}>
                <Link to={"/"}>
                    <Logo />
                </Link>
                
                <Gnb />

                <div className={styles.selectbox_language}>
                    <Internet />
                    <span>{ language }</span>
                    <ArrowDown />
                    
                    <ul className={styles.language_list}>
                        <li
                            className={language === "한국어"
                                ? styles.selected
                                : ""
                            }
                        >한국어</li>
                        <li
                            className={language === "English"
                                ? styles.selected
                                : ""
                            }
                        >English</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;