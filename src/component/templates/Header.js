import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import i18n from '../../lang/i18n';

import { ArrowDown, Internet } from '../../assets/icons';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import Gnb from '../molecules/Gnb';
import styles from "./Header.module.css";

function Header() {
    const [device, setDevice] = useState("")
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLanguageListOpen, setIsLanguageListOpen] = useState(false)

    const clickLanguageSelectBox = () => {
        if(isLanguageListOpen) {
            setIsLanguageListOpen(false)
        } else {
            setIsLanguageListOpen(true)
        }
    }

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    const clickLanguageButton = (e) => {
        setIsLanguageListOpen(false)
        changeLanguage(e.target.id)
    }

    useEffect(() => {
        const innerWidth = window.innerWidth

        if(innerWidth > 768) {
            setDevice("PC")
            setIsMenuOpen(false)
        } else {
            setDevice("MOBILE")
        }
    }, [])

    useEffect(()=> {
        const handleResize = () => {
            let innerWidth = window.innerWidth

            if(innerWidth > 768) {
                setDevice("PC")
                setIsMenuOpen(false)
            } else {
                setDevice("MOBILE")
            }
        };

        window.addEventListener("resize", handleResize);

        return(() => {
           window.removeEventListener("resize", handleResize);
        })
    })

    return (
        <header className={styles.header}>
            <div className={styles.header_inner}>
                <Link to="/">
                    <Logo />
                </Link>
                
                <Gnb
                    device={device}
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                    changeLanguage={changeLanguage}
                />

                {/* 언어 선택 */}
                <div
                    className={`
                        ${styles.selectbox_language}
                        ${device === "PC" ? styles.visible : styles.hidden}
                    `}
                    onClick={clickLanguageSelectBox}
                >
                    <Internet />
                    <span>{i18n.language === "ko" ? "한국어" : "English"}</span>
                    <ArrowDown />
                    
                    <ul
                        className={isLanguageListOpen
                            ? `${styles.language_list} ${styles.visible}`
                            : styles.language_list
                        }
                    >
                        <li
                            id="ko"
                            className={i18n.language === "ko"
                                ? styles.selected
                                : ""
                            }
                            onClick={clickLanguageButton}
                        >한국어</li>
                        <li
                            id="en"
                            className={i18n.language === "en"
                                ? styles.selected
                                : ""
                            }
                            onClick={clickLanguageButton}
                        >English</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;