import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Gnb.module.css";

function Gnb({ device, isMenuOpen, setIsMenuOpen, changeLanguage }) {
    const { i18n } = useTranslation()
    const { pathname } = useLocation()

    const menuRef = useRef(null)
    const menuIcon = isMenuOpen ? "close" : "menu"

    const closeMenu = () => {
        menuRef.current.classList.remove(`${styles.visible}`)
        document.body.classList.remove("scroll_disabled")
        setIsMenuOpen(false)
    }

    const openMenu = () => {
        menuRef.current.classList.add(`${styles.visible}`)
            document.body.classList.add("scroll_disabled")
            setIsMenuOpen(true)
    }

    const clickMenuIcon = () => {
        if(isMenuOpen) {
            closeMenu()
        } else {
            openMenu()
        }
    }

    const clickLanguageButton = (e) => {
        isMenuOpen && closeMenu()
        changeLanguage(e.target.id)
    }

    useEffect(() => {
        isMenuOpen && closeMenu()
        window.scrollTo(0, 0);
    }, [pathname])

    return (
        <nav className={styles.gnb}>
            { device === "PC"
                ? <ul className={styles.gnb_pc}>
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

                : <>
                    <span
                        className={`${styles.menu_icon} material-symbols-outlined`}
                        onClick={clickMenuIcon}
                    >{menuIcon}</span>

                    <ul className={styles.gnb_mobile} ref={menuRef}>
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

                        {/* 언어 선택 */}
                        <ul className={styles.language_list}>
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
                    </ul>
                </>
            }
        </nav>
    );
}

export default Gnb;