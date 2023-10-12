import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_inner}>
                <ul className={styles.list_wrap}>
                    <li>㈜에이비웍스</li>
                    <li>
                        <span>주소&#32;&#32;|</span>
                        <span>경기도 성남시 중원구 양현로 405번길 7 (여수동), 신야탑푸르지오시티2, 801호</span>
                    </li>
                    <li>
                        <span>문의&#32;&#32;|</span>
                        <span>info@aiviworks.com</span>
                    </li>
                </ul>

                <p className={styles.copyright}>Copyright 2023, AIVIWORKS all rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;