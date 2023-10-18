import { useEffect, useRef, useCallback, useState } from 'react';
import { Send } from '../assets/icons';
import styles from './Contact.module.css'

function Contact() {
    const [isFillInput, setIsFillInput] = useState(false)
    const [inputCompany, setInputCompany] = useState("")
    const [inputName, setInputName] = useState("")
    const [inputContact, setInputContact] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const [inputContent, setInputContent] = useState("")
    const mapRef = useRef(null)

    const checkInput = () => {
        if(
            inputCompany.length !== 0 &&
            inputName.length !== 0 &&
            inputContact.length !== 0 &&
            inputEmail.length !== 0 &&
            inputContent.length !== 0
        )
            setIsFillInput(true)
    }

    const clickSendButton = () => {
        if(
            inputCompany.length !== 0 &&
            inputName.length !== 0 &&
            inputContact.length !== 0 &&
            inputEmail.length !== 0 &&
            inputContent.length !== 0
        ) {
            console.log(`
                회사 : ${inputCompany}
                이름 : ${inputName}
                연락처 : ${inputContact}
                이메일 : ${inputEmail}
                내용 : ${inputContent}
            `)
    
            setInputCompany("")
            setInputName("")
            setInputContact("")
            setInputEmail("")
            setInputContent("")
    
            alert('메시지가 전송되었습니다.\n빠른 시일 내에 답변드리겠습니다 :)')
        }
    }

    const initMap = useCallback(() => {
        const position = { lat: 37.4176482, lng: 127.1268875 }
        const newMap = new window.google.maps.Map(mapRef.current, {
            center: position,
            zoom: 16,
        })

        new window.google.maps.Marker({
            position,
            map: newMap,
            title: '에이비웍스',
        });
    });

    useEffect(() => {
        checkInput()
    }, [inputCompany, inputName, inputCompany, inputEmail, inputContent])

    useEffect(() => {
        initMap();
    }, [initMap]);
    
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
                                    <input
                                        placeholder='에이비웍스'
                                        value={inputCompany}
                                        onChange={(e) => setInputCompany(e.target.value)}
                                    />
                                </div>
                            </li>

                            <li className={styles.table_row}>
                                <label>이름(직위)</label>
                                <div className={styles.input_box}>
                                    <input
                                        placeholder='홍길동 팀장'
                                        value={inputName}
                                        onChange={(e) => setInputName(e.target.value)}
                                    />
                                </div>
                            </li>

                            <li className={styles.table_row}>
                                <label>연락처</label>
                                <div className={styles.input_box}>
                                    <input
                                        placeholder='000-0000-0000'
                                        value={inputContact}
                                        onChange={(e) => setInputContact(e.target.value)}
                                    />
                                </div>
                            </li>

                            <li className={styles.table_row}>
                                <label>이메일</label>
                                <div className={styles.input_box}>
                                    <input
                                        placeholder='abc123@gmail.com'
                                        value={inputEmail}
                                        onChange={(e) => setInputEmail(e.target.value)}
                                    />
                                </div>
                            </li>

                            <li className={styles.table_row}>
                                <label>내용</label>
                                <div className={styles.input_box}>
                                    <input
                                        placeholder='내용 정보 입력'
                                        value={inputContent}
                                        onChange={(e) => setInputContent(e.target.value)}
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <button className={isFillInput
                        ? styles.send_button
                        : `${styles.send_button} ${styles.disabled}`
                    }>
                        <div
                            className={styles.button_content_wrap}
                            onClick={clickSendButton}
                        >
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

                    <div className={styles.map_wrap} ref={mapRef}>
                        지도 영역 (지도 API 사용 예정)
                    </div>
                </div>
            </section>
            {/* Map Section 끝 */}
        </div>
    );
}

export default Contact;