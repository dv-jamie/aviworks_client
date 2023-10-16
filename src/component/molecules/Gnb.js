import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import styles from "./Gnb.module.css";

function Gnb({ language, device }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { pathname } = useLocation()
    const menuRef = useRef(null)
    const menuIcon = isMenuOpen ? "close" : "menu"

    const clickMenuIcon = () => {
        if(isMenuOpen) {
            menuRef.current.classList.remove(`${styles.visible}`)
            document.body.classList.remove("scroll_disabled")
            setIsMenuOpen(false)
        } else {
            menuRef.current.classList.add(`${styles.visible}`)
            document.body.classList.add("scroll_disabled")
            setIsMenuOpen(true)
        }
    }

    useEffect(() => {
        menuRef.current.classList.remove(`${styles.visible}`)
        document.body.classList.remove("scroll_disabled")
        setIsMenuOpen(false)
    }, [])

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
                        class={`${styles.menu_icon} material-symbols-outlined`}
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
                    </ul>
                </>
            }
        </nav>
    );
}

export default Gnb;