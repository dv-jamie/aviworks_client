import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css'

function Footer() {
    const { t } = useTranslation("footer")

    return (
        <footer className={styles.footer}>
            <div className={styles.footer_inner}>
                <ul className={styles.list_wrap}>
                    <li>{t("name")}</li>
                    <li>
                        <span>{t("list_1.label")}</span>
                        <span>{t("list_1.desc")}</span>
                    </li>
                    <li>
                        <span>{t("list_2.label")}</span>
                        <span>{t("list_2.desc")}</span>
                    </li>
                </ul>

                <p className={styles.copyright}>Copyright 2023, AIVIWORKS all rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;