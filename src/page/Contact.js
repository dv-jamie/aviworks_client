import { useEffect, useRef, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send } from '../assets/icons';
import styles from './Contact.module.css'

function Contact() {
    const { t } = useTranslation("contact")

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
    
            alert(t("send_mail.alert"))
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
            title: t("aiviworks"),
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
                <h2 className="heading-1">{t("title")}</h2>
            </section>
            {/* Intro Section 끝 */}

            {/* Send Mail Section */}
            <section className={styles.send_mail}>
                <div className={styles.content_wrap}>
                    <h2 className="heading-2">{t("send_mail.title")}</h2>

                    <div className={styles.table_wrap}>
                        <ul>
                            <li className={styles.table_row}>
                                <label>{t("send_mail.row_1.label")}</label>
                                <div className={styles.input_box}>
                                    <input
                                        placeholder={t("send_mail.row_1.placeholder")}
                                        value={inputCompany}
                                        onChange={(e) => setInputCompany(e.target.value)}
                                    />
                                </div>
                            </li>

                            <li className={styles.table_row}>
                                <label>{t("send_mail.row_2.label")}</label>
                                <div className={styles.input_box}>
                                    <input
                                        placeholder={t("send_mail.row_2.placeholder")}
                                        value={inputName}
                                        onChange={(e) => setInputName(e.target.value)}
                                    />
                                </div>
                            </li>

                            <li className={styles.table_row}>
                                <label>{t("send_mail.row_3.label")}</label>
                                <div className={styles.input_box}>
                                    <input
                                        placeholder={t("send_mail.row_3.placeholder")}
                                        value={inputContact}
                                        onChange={(e) => setInputContact(e.target.value)}
                                    />
                                </div>
                            </li>

                            <li className={styles.table_row}>
                                <label>{t("send_mail.row_4.label")}</label>
                                <div className={styles.input_box}>
                                    <input
                                        placeholder={t("send_mail.row_4.placeholder")}
                                        value={inputEmail}
                                        onChange={(e) => setInputEmail(e.target.value)}
                                    />
                                </div>
                            </li>

                            <li className={styles.table_row}>
                                <label>{t("send_mail.row_5.label")}</label>
                                <div className={styles.input_box}>
                                    <textarea
                                        placeholder={t("send_mail.row_5.placeholder")}
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
                            <span>{t("send_mail.button")}</span>
                        </div>
                    </button>
                </div>                
            </section>
            {/* Send Mail Section 끝 */}

            {/* Location Section */}
            <section className={styles.location}>
                <div className={styles.content_wrap}>
                    <h2 className="heading-2">{t("location.title")}</h2>

                    <ul className={styles.info_wrap}>
                        <li className={styles.address}>{t("location.address")}</li>
                        <li>
                            <ul className={styles.contact_number}>
                                <li>
                                    <label>Tel. </label>
                                    031-697-8386
                                </li>
                                <li>
                                    <label>Fax. </label>
                                    0504-361-9288
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