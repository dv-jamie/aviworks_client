import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Note, Play } from '../assets/icons';
import { AScout, CaddieRobot, GolfClub1, GolfClub2, GolfClub3, MockupScreen1, MockupScreen2, MockupScreen3, Screen1, Screen2, SwingTracker } from '../assets/images';
import styles from './Product.module.css'

function Product() {
    const { t } = useTranslation("product")

    const productName = useLocation().pathname.substring(8)
    const SwingTrackerSectionRef = useRef()
    const AScoutSectionRef = useRef()
    const CaddieRobotSectionRef = useRef()

    useEffect(() => {
        switch (productName) {
            case "/swing-tracker" :
                SwingTrackerSectionRef.current.scrollIntoView()
                break
            case "/a-scout" :
                AScoutSectionRef.current.scrollIntoView()
                break
            case "/caddie-robot" :
                CaddieRobotSectionRef.current.scrollIntoView()
                break
        }
    }, [])

    return (
        <div className={styles.container}>
            <h1>product page</h1>

            {/* Swing Tracker */}
            <div className={styles.swing_tracker} ref={SwingTrackerSectionRef}>
                {/* Intro Section */}
                <section className={styles.intro}>
                    <div className={styles.content_wrap}>
                        <div className={styles.title_wrap}>
                            <h2 className="heading-1">{t("swing_tracker.title")}</h2>
                            <h3 className="heading-4">{t("swing_tracker.sub_title")}</h3>
                        </div>

                        <div className={styles.image_wrap}>
                            <img src={SwingTracker} alt="swing tracker 이미지" />
                        </div>
                    </div>
                </section>
                {/* Intro Section 끝 */}
                
                {/* Data Section */}
                <section className={styles.data}>
                    <div className={styles.content_wrap}>
                        <div className={styles.title_wrap}>
                            <h2 className="heading-1">
                                If you can't measure it,<br />
                                you can't improve it
                            </h2>
                            <h3 className="heading-4">{t("swing_tracker.data.title")}</h3>
                        </div>
                        
                        <div className={styles.vertical_line}></div>

                        <ul className={styles.detail_wrap}>
                            <li>
                                 <div className={styles.number_wrap}>
                                    <span className={`impact-text-1 ${styles.number}`}>{t("swing_tracker.data.list_1.number")}</span>
                                    <span className={`impact-text-2 ${styles.unit}`}>{t("swing_tracker.data.list_1.unit")}</span>
                                 </div>
                                 <p className="body-text-2">{t("swing_tracker.data.list_1.desc")}</p>
                            </li>
                            <li>
                                <div className={styles.number_wrap}>
                                    <span className={`impact-text-1 ${styles.number}`}>{t("swing_tracker.data.list_2.number")}</span>
                                    <span className={`impact-text-2 ${styles.unit}`}>{t("swing_tracker.data.list_2.unit")}</span>
                                 </div>
                                 <p className="body-text-2">{t("swing_tracker.data.list_2.desc")}</p>
                            </li>
                            <li>
                                <div className={styles.number_wrap}>
                                    <span className={`impact-text-1 ${styles.number}`}>{t("swing_tracker.data.list_3.number")}</span>
                                    <span className={`impact-text-2 ${styles.unit}`}>{t("swing_tracker.data.list_3.unit")}</span>
                                 </div>
                                 <p className="body-text-2">{t("swing_tracker.data.list_3.desc")}</p>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* Data Section 끝 */}

                {/* Summary Section */}
                <section className={styles.summary}>
                    <div className={styles.content_wrap}>
                        <div className={styles.image_wrap}>
                            <div className={styles.image}>
                                <img src={Screen1} alt="데이터 분석 화면 1" />
                            </div>
                            <div className={styles.image}>
                                <img src={Screen2} alt="데이터 분석 화면 2" />
                            </div>
                        </div>

                        <div className={styles.detail_wrap}>
                            <ul>
                                <li>
                                    <div className={`sub-title-1 ${styles.title}`}>{t("swing_tracker.summary.list_1.title")}</div>
                                    <p className="body-text-2">{t("swing_tracker.summary.list_1.desc")}</p>
                                </li>
                                <li>
                                    <div className={`sub-title-1 ${styles.title}`}>{t("swing_tracker.summary.list_2.title")}</div>
                                    <p className="body-text-2">{t("swing_tracker.summary.list_2.desc")}</p>
                                </li>
                                <li>
                                    <div className={`sub-title-1 ${styles.title}`}>{t("swing_tracker.summary.list_3.title")}</div>
                                    <p className="body-text-2">{t("swing_tracker.summary.list_3.desc")}</p>
                                </li>
                            </ul>

                            <button className={styles.button}>
                                <Link to="https://youtu.be/67OOjc5YUNU?si=_75A5jCiqZ8AiREH" target="_blank">
                                    <div className={styles.button_content_wrap}>
                                        <Play />
                                        <span>{t("swing_tracker.summary.video_button")}</span>
                                    </div>
                                </Link>
                            </button>
                        </div>
                    </div>
                </section>
                {/* Summary Section 끝 */}

                {/* Description Section */}
                <section className={styles.description}>
                    <div className={styles.content_wrap}>
                        <div className={styles.title_wrap}>
                            <h2 className="heading-3">{t("swing_tracker.description.sub_title")}</h2>
                            <h3 className="heading-1">{t("swing_tracker.description.title")}</h3>
                        </div>

                        <ul>
                            <li>
                                <div className={styles.image_wrap}>
                                    <img src={MockupScreen1} alt="스크린 목업 이미지 1" />
                                </div>
                                <div className={styles.text_wrap}>
                                    <div className={`sub-title-1 ${styles.title}`}>
                                        {t("swing_tracker.description.list_1.title")}
                                    </div>
                                    <p className="body-text-2">{t("swing_tracker.description.list_1.desc")}</p>
                                    <p className={`body-text-2 ${styles.caption}`}>{t("swing_tracker.description.list_1.caption")}</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.text_wrap}>
                                    <div className={`sub-title-1 ${styles.title}`}>
                                        {t("swing_tracker.description.list_2.title")}
                                    </div>
                                    <p className="body-text-2">{t("swing_tracker.description.list_2.desc")}</p>
                                    <p className={`body-text-2 ${styles.caption}`}>{t("swing_tracker.description.list_2.caption")}</p>
                                </div>
                                <div className={styles.image_wrap}>
                                    <img src={MockupScreen2} alt="스크린 목업 이미지 2" />
                                </div>
                            </li>
                            <li>
                                <div className={styles.image_wrap}>
                                    <img src={MockupScreen3} alt="스크린 목업 이미지 3" />
                                </div>
                                <div className={styles.text_wrap}>
                                    <div className={`sub-title-1 ${styles.title}`}>
                                        {t("swing_tracker.description.list_3.title")}
                                    </div>
                                    <p className="body-text-2">{t("swing_tracker.description.list_3.desc")}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* Description Section 끝 */}
            </div>
            {/* Swing Tracker Section 끝 */}

            {/* A-Scout Section */}
            <div className={styles.a_scount} ref={AScoutSectionRef}>
                {/* Intro Section */}
                <section className={`${styles.intro} ${styles.a_scount}`}>
                    <div className={styles.content_wrap}>
                        <div className={styles.image_wrap}>
                            <img src={AScout} alt="swing tracker 이미지" />
                        </div>

                        <div className={styles.title_wrap}>
                            <h2 className="heading-1">{t("a_scout.title")}</h2>
                            <h3 className="heading-4">{t("a_scout.sub_title")}</h3>
                        </div>
                    </div>
                </section>
                {/* Intro Section 끝 */}

                {/* Summary Section */}
                <section className={styles.summary}>
                    <div className={styles.content_wrap}>
                        <div className={styles.image_wrap}>
                            <div className={styles.column}>
                                <div className={styles.image}>
                                    <img src={GolfClub1} alt="골프채 이미지 1" />
                                </div>
                                <div className={styles.image}>
                                    <img src={GolfClub2} alt="골프채 이미지 2" />
                                </div>
                            </div>

                            <div className={styles.image}>
                                <img src={GolfClub3} alt="골프채 이미지 3" />
                            </div>
                        </div>

                        <div className={styles.detail_wrap}>
                            <ul>
                                <li>
                                    <div className={`sub-title-1 ${styles.title}`}>{t("a_scout.summary.list_1.title")}</div>
                                    <p className="body-text-2">{t("a_scout.summary.list_1.desc")}</p>
                                </li>
                                <li>
                                    <div className={`sub-title-1 ${styles.title}`}>{t("a_scout.summary.list_2.title")}</div>
                                    <p className="body-text-2">{t("a_scout.summary.list_2.desc")}</p>
                                </li>
                            </ul>

                            <div className={styles.button_wrap}>
                                <button className={styles.button}>
                                    <Link to="http://naver.me/5Ghyy6Wt" target="_blank">
                                        <div className={styles.button_content_wrap}>
                                            <Note />
                                            <span>{t("a_scout.summary.button_1")}</span>
                                        </div>
                                    </Link>
                                </button>
                                <button className={styles.button}>
                                    <Link to="http://naver.me/xjJeewVF" target="_blank">
                                        <div className={styles.button_content_wrap}>
                                            <Note />
                                            <span>{t("a_scout.summary.button_2")}</span>
                                        </div>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Summary Section 끝 */}
            </div>
            {/* A-Scout Section 끝 */}

            {/* Caddie-Robot Section */}
            <div className={styles.caddie_robot} ref={CaddieRobotSectionRef}>
                {/* Intro Section */}
                <section className={`${styles.intro} ${styles.caddie_robot}`}>
                    <div className={styles.content_wrap}>
                        <div className={styles.image_wrap}>
                            <img src={CaddieRobot} alt="swing tracker 이미지" />
                        </div>

                        <div className={styles.title_wrap}>
                            <h2 className="heading-1">{t("caddie_robot.title")}</h2>
                            <h3 className="heading-4">{t("caddie_robot.sub_title")}</h3>
                            <div className={styles.keyword_wrap}>
                                <span>{t("caddie_robot.keyword_1")}</span>
                                <span>{t("caddie_robot.keyword_2")}</span>
                                <span>{t("caddie_robot.keyword_3")}</span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Intro Section 끝 */}
                
                {/* Value Section 끝 */}
                <section className={styles.value}>
                    <div className={styles.content_wrap}>
                        <div className={styles.title_wrap}>
                            <h2 className="heading-1">{t("caddie_robot.value.title")}</h2>
                            <h3 className="heading-3">{t("caddie_robot.value.sub_title")}</h3>
                        </div>

                        <ul className={styles.value_list}>
                            <li>
                                <div className={styles.title_wrap}>
                                    <div className="sub-title-1">{t("caddie_robot.value.list_1.title")}</div>
                                    <div className="body-text-1">{t("caddie_robot.value.list_1.sub_title")}</div>
                                </div>
                                
                                <ul className={styles.detail_list}>
                                    <li className="body-text-2">{t("caddie_robot.value.list_1.desc_1")}</li>
                                    <li className="body-text-2">{t("caddie_robot.value.list_1.desc_2")}</li>
                                </ul>
                            </li>
                            <li>
                                <div className={styles.title_wrap}>
                                    <div className="sub-title-1">{t("caddie_robot.value.list_2.title")}</div>
                                    <div className="body-text-1">{t("caddie_robot.value.list_2.sub_title")}</div>
                                </div>
                                
                                <ul className={styles.detail_list}>
                                    <li className="body-text-2">{t("caddie_robot.value.list_2.desc_1")}</li>
                                    <li className="body-text-2">{t("caddie_robot.value.list_2.desc_2")}</li>
                                </ul>
                            </li>
                            <li>
                                <div className={styles.title_wrap}>
                                    <div className="sub-title-1">{t("caddie_robot.value.list_3.title")}</div>
                                    <div className="body-text-1">{t("caddie_robot.value.list_3.sub_title")}</div>
                                </div>
                                
                                <ul className={styles.detail_list}>
                                    <li className="body-text-2">{t("caddie_robot.value.list_3.desc_1")}</li>
                                    <li className="body-text-2">{t("caddie_robot.value.list_3.desc_2")}</li>
                                    <li className="body-text-2">{t("caddie_robot.value.list_3.desc_3")}</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* Value Section 끝 */}
            </div>
            {/* Caddie-Robot Section 끝 */}

        </div>
    );
}

export default Product;