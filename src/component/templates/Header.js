import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Internet } from '../../assets/icons';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import Gnb from '../molecules/Gnb';
import styles from "./Header.module.css";

function Header({ language }) {
    const [prevScrollTop, setPrevScrollTop] = useState(window.scrollY)
    const [visible, setVisible] = useState(true)

    useEffect(()=> {
        const handleScroll = () => {
           let nextScrollTop = window.scrollY
           
           setVisible(prevScrollTop > nextScrollTop);
           setPrevScrollTop(nextScrollTop)
        };

        window.addEventListener("scroll", handleScroll);

        return(() => {
           window.removeEventListener("scroll", handleScroll);
        })
    })

    return (
        <header className={`${styles.header} ${visible ? styles.visible : styles.hidden}`}>
            <div className={styles.header_inner}>
                <Link to={`${process.env.PUBLIC_URL}`}>
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