import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Internet } from '../../assets/icons';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import Gnb from '../molecules/Gnb';
import styles from "./Header.module.css";

function Header({ language }) {
    const [device, setDevice] = useState("")
    const [isMenuOpen, setIsMenuOpen] = useState(false)

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
                    language={language}
                    device={device}
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                />

                <div className={`${styles.selectbox_language} ${device === "PC" ? styles.visible : styles.hidden}`}>
                    <Internet />
                    <span>{language}</span>
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