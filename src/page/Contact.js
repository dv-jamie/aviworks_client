import { Send } from '../assets/icons';
import styles from './Contact.module.css'

function Contact() {
    return (
        <div className={styles.container}>
            <h1>contact page</h1>

            {/* Intro Section */}
            <section className={styles.intro}>
                <h2 className="heading-1">
                    에이비웍스와 함께
                    <br />
                    스포츠산업의 혁신을 만들어보세요
                </h2>
            </section>
            {/* Intro Section 끝 */}

            {/* Send Mail Section */}
            <section className={styles.send_mail}>
                <div className={styles.content_wrap}>
                    <h2 className="heading-2">사업 제휴 / 투자 제안</h2>

                    <div className={styles.table_wrap}>
                        <ul>
                            <li className={styles.table_row}>
                                <label>회사(소속)</label>
                                <div className={styles.input_box}>
                                    <input placeholder='에이비웍스' />
                                </div>
                            </li>

                            <li className={styles.table_row}>
                                <label>이름(직위)</label>
                                <div className={styles.input_box}>
                                    <input placeholder='홍길동 팀장' />
                                </div>
                            </li>

                            <li className={styles.table_row}>
                                <label>연락처)</label>
                                <div className={styles.input_box}>
                                    <input placeholder='000-0000-0000' />
                                </div>
                            </li>

                            <li className={styles.table_row}>
                                <label>이메일</label>
                                <div className={styles.input_box}>
                                    <input placeholder='abc123@gmail.com' />
                                </div>
                            </li>

                            <li className={styles.table_row}>
                                <label>내용</label>
                                <div className={styles.input_box}>
                                    <textarea placeholder='내용 정보 입력' />
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <button className={styles.send_button}>
                        <div className={styles.button_content_wrap}>
                            <Send />
                            <span>문의하기</span>
                        </div>
                    </button>
                </div>                
            </section>
            {/* Send Mail Section 끝 */}

            {/* Location Section */}
            <section className={styles.location}>
                <div className={styles.content_wrap}>
                    <h2 className="heading-2">오시는 길</h2>

                    <ul className={styles.info_wrap}>
                        <li className={styles.address}>경기도 성남시 중원구 양현로 405번길 7 (여수동), 신야탑푸르지오시티2, 801호</li>
                        <li>
                            <ul className={styles.contact_number}>
                                <li>
                                    <label>Tel. </label>
                                    000-0000-0000
                                </li>
                                <li>
                                    <label>Fax. </label>
                                    000-0000-0000
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <div className={styles.map_wrap}>
                        지도 영역 (지도 API 사용 예정)
                    </div>
                </div>
            </section>
            {/* Map Section 끝 */}
        </div>
    );
}

export default Contact;