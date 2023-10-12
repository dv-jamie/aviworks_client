import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Gnb.module.css";

function Gnb({ language, device }) {
    const location = useLocation()
    const pathname = location.pathname

    const clickMenuIcon = (e) => {
        e.currentTarget.nextSibling.classList.toggle(`${styles.visible}`)
        document.body.classList.toggle("scroll_disabled")
    }

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
                    >menu</span>

                    <ul className={styles.gnb_mobile}>
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