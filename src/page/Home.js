import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CloudService } from '../assets/icons';
import { AScout, Basketball, BicycleRace, Building, CaddieRobot, Cameras, Fun, Golf, GolfCulture, GolfPose, Handshaking, Networking, Robot, Soccer, SwingAnalyze, SwingTracker, TennisLesson, Trophy, Volleyball } from '../assets/images';
import styles from './Home.module.css'

function Home() {
    const { t } = useTranslation("home")

    return (
        <div className={styles.container}>
            <h1>home page</h1>

            {/* Intro Section */}
            <section className={styles.intro}>
                <h2 className="heading-1">
                    The Next Level of
                    <br />
                    Sports Technologies
                </h2>
            </section>
            {/* Intro Section 끝 */}

            {/* Mission Section */}
            <section className={styles.mission}>
                <div className={styles.content_wrap}>
                    <div className={styles.title_wrap}>
                        <p className="heading-3">{t("mission.title")}</p>
                        <h2>
                            <ul className={styles.keyword_wrap}>
                                <li className="heading-1">{t("mission.keywords.keyword_1")}</li>
                                <li className="heading-1">{t("mission.keywords.keyword_2")}</li>
                                <li className="heading-1">{t("mission.keywords.keyword_3")}</li>
                            </ul>
                        </h2>
                        <p className="heading-3">
                            <span className="heading-3">{t("mission.sub_title.part_1")}</span>
                            {t("mission.sub_title.part_2")}<br />
                            {t("mission.sub_title.part_3")}
                        </p>
                    </div>

                    <div className={styles.image_wrap}>
                        <div className={styles.image}>
                            <img src={Basketball} alt="농구 경기 이미지" />
                        </div>
                        <div className={styles.image}>
                            <img src={TennisLesson} alt="테니스 레슨 이미지" />
                        </div>
                        <div className={styles.image}>
                            <img src={Soccer} alt="축구 이미지" />
                        </div>
                        <div className={styles.image}>
                            <img src={BicycleRace} alt="자전거 경주 이미지" />
                        </div>
                        <div className={styles.image}>
                            <img src={Volleyball} alt="배구 경기 이미지" />
                        </div>
                        <div className={styles.image}>
                            <img src={Golf} alt="골프 이미지" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Mission Section 끝 */}

            {/* Goal Section */}
            <section className={styles.goal}>
                <h2 className="heading-1">{t("goal.title")}</h2>
                <p className="sub-title-1">
                    {t("goal.description.part_1")}<br />
                    {t("goal.description.part_2")}<br />
                    {t("goal.description.part_3")}
                </p>
                <p className="heading-3">{t("goal.sub_title")}</p>
            </section>
            {/* Goal Section 끝 */}

            {/* Way Section */}
            <section className={styles.way}>
                <div className={styles.content_wrap}>
                    <div className={styles.title_wrap}>
                        <h3 className="heading-3">{t("way.sub_title")}</h3>
                        <h2 className="heading-1">{t("way.title")}</h2>
                    </div>
                    
                    <div className={styles.board_wrap}>
                        <div className={`sub-title-1 ${styles.caption}`}>
                            AI-3D Vision Based Total Golf Solutions
                        </div>

                        <ul className={styles.board}>
                            <li>
                                <label className="sub-title-1">Self-Skill Improvement</label>
                                <ul className={styles.detail_wrap}>
                                    <li className="body-text-1">{t("way.board_1.desc_1")}</li>
                                    <li className="body-text-1">{t("way.board_1.desc_2")}</li>
                                    <li className="body-text-1">{t("way.board_1.desc_3")}</li>
                                    <li className="body-text-1">{t("way.board_1.desc_4")}</li>
                                </ul>
                                <img src={GolfPose} alt="골프 자세 일러스트" />
                            </li>
                            <li>
                                <label className="sub-title-1">Social Networking</label>
                                <ul className={styles.detail_wrap}>
                                    <li className="body-text-1">{t("way.board_2.desc_1")}</li>
                                    <li className="body-text-1">{t("way.board_2.desc_2")}</li>
                                    <li className="body-text-1">{t("way.board_2.desc_3")}</li>
                                </ul>
                                <img src={Networking} alt="네트워킹 일러스트" />
                            </li>
                            <li>
                                <label className="sub-title-1">Fun</label>
                                <ul className={styles.detail_wrap}>
                                    <li className="body-text-1">{t("way.board_3.desc_1")}</li>
                                    <li className="body-text-1">{t("way.board_3.desc_2")}</li>
                                    <li className="body-text-1">{t("way.board_3.desc_3")}</li>
                                    <li className="body-text-1">{t("way.board_3.desc_4")}</li>
                                </ul>
                                <img src={Fun} alt="즐거운 일러스트" />
                            </li>
                            <li>
                                <label className="sub-title-1">New Culture</label>
                                <ul className={styles.detail_wrap}>
                                    <li className="body-text-1">{t("way.board_4.desc_1")}</li>
                                    <li className="body-text-1">{t("way.board_4.desc_2")}</li>
                                </ul>
                                <img src={GolfCulture} alt="골프 문화 일러스트" />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* Way Section 끝 */}

            {/* Technology Section */}
            <section className={styles.technology}>
                <div className={styles.content_wrap}>
                    <ul className={styles.keyword_wrap}>
                        <li className="sub-title-1">AI</li>
                        <li className="sub-title-1">Big Data</li>
                        <li className="sub-title-1">Cloud</li>
                        <li className="sub-title-1">5G/LTE</li>
                        <li className="sub-title-1">Analysis Algorithm</li>
                        <li className="sub-title-1">Autonomous Control</li>
                        <li className="sub-title-1">Optical System</li>
                        <li className="sub-title-1">Ball Tracking</li>
                        <li className="sub-title-1">.</li>
                        <li className="sub-title-1">.</li>
                        <li className="sub-title-1">.</li>
                    </ul>

                    <div className={styles.title_wrap}>
                        <h3 className="heading-3">{t("technology.sub_title")}</h3>
                        <h2 className="heading-1">{t("technology.title")}</h2>
                    </div>

                    <ul className={styles.list}>
                        <li>
                            <div className={styles.image}>
                                <img src={Robot} alt="로봇 이미지" />
                            </div>

                            <ul className={styles.content_wrap}>
                                <label className="sub-title-1">{t("technology.board_1.title")}</label>
                                <ul className={styles.detail_wrap}>
                                    <li className="body-text-1">{t("technology.board_1.desc_1")}</li>
                                    <li className="body-text-1">{t("technology.board_1.desc_2")}</li>
                                    <li className="body-text-1">{t("technology.board_1.desc_3")}</li>
                                    <li className="body-text-1">{t("technology.board_1.desc_4")}</li>
                                </ul>
                            </ul>
                        </li>
                        <li>
                            <div className={styles.image}>
                                <img src={SwingAnalyze} alt="스윙 분석 이미지" />
                            </div>

                            <ul className={styles.content_wrap}>
                                <label className="sub-title-1">{t("technology.board_2.title")}</label>
                                <ul className={styles.detail_wrap}>
                                    <li className="body-text-1">{t("technology.board_2.desc_1")}</li>
                                    <li className="body-text-1">{t("technology.board_2.desc_2")}</li>
                                    <li className="body-text-1">{t("technology.board_2.desc_3")}</li>
                                    <li className="body-text-1">{t("technology.board_2.desc_4")}</li>
                                </ul>
                            </ul>
                        </li>
                        <li>
                            <div className={styles.image}>
                                <img src={Cameras} alt="카메라 이미지" />
                            </div>

                            <ul className={styles.content_wrap}>
                                <label className="sub-title-1">{t("technology.board_3.title")}</label>
                                <ul className={styles.detail_wrap}>
                                    <li className="body-text-1">{t("technology.board_3.desc_1")}</li>
                                    <li className="body-text-1">{t("technology.board_3.desc_2")}</li>
                                    <li className="body-text-1">{t("technology.board_3.desc_3")}</li>
                                    <li className="body-text-1">{t("technology.board_3.desc_4")}</li>
                                </ul>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
            {/* Technology Section 끝 */}

            {/* Production Section 끝 */}
            <section className={styles.production}>
                <div className={styles.content_wrap}>
                    <CloudService />

                    <div className={styles.title_wrap}>
                        <h3 className="heading-3">{t("production.sub_title")}</h3>
                        <h2 className="heading-1">{t("production.title")}</h2>
                    </div>

                    <ul className={styles.product_list}>
                        <li>
                            <div className={styles.image_wrap}>
                                <img src={SwingTracker} alt="3D Swing Tracker 제품 이미지" />
                            </div>

                            <div className={styles.content_wrap}>
                                <div className="sub-title-1">3D Swing Tracker</div>
                                <p className="body-text-1">{t("production.desc_1")}</p>
                                <button>
                                    <Link to="/product/swing-tracker">{t("production.detail_button")} →</Link>
                                </button>
                            </div>
                        </li>
                        <li>
                            <div className={styles.image_wrap}>
                                <img src={AScout} alt="A-Scout 제품 이미지" />
                            </div>

                            <div className={styles.content_wrap}>
                                <div className="sub-title-1">A-Scout</div>
                                <p className="body-text-1">{t("production.desc_2")}</p>
                                <button>
                                    <Link to="/product/a-scout">{t("production.detail_button")} →</Link>
                                </button>
                            </div>
                        </li>
                        <li>
                            <div className={styles.image_wrap}>
                                <img src={CaddieRobot} alt="캐디 로봇 이미지" />
                            </div>

                            <div className={styles.content_wrap}>
                                <div className="sub-title-1">
                                    Caddie-Robot<br />
                                    Platform Service
                                </div>
                                <p className="body-text-1">{t("production.desc_3")}</p>
                                <button>
                                    <Link to="/product/caddie-robot">{t("production.detail_button")} →</Link>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            {/* Production Section 끝 */}

            {/* History Section 끝 */}
            <section className={styles.history}>
                <div className={styles.content_wrap}>
                    <div className={styles.title_wrap}>
                        <h2 className="heading-1">{t("history.title")}</h2>
                    </div>

                    <div className={styles.board}>
                        <div className={styles.image_wrap}>
                            <div className={styles.image}>
                                <img src={Building} alt="빌딩 이미지" />
                            </div>
                            <div className={styles.row_2}>
                                <div className={styles.image}>
                                    <img src={Trophy} alt="트로피 이미지" />
                                </div>
                                <div className={styles.image}>
                                    <img src={Handshaking} alt="악수 이미지" />
                                </div>
                            </div>
                        </div>

                        <ul className={styles.list}>
                            <li className={`sub-title-1 ${styles.year}`}>2023</li>
                            <ul className={styles.month}>
                                <li>
                                    <label className="body-text-1">{t("history.list_1.month")}</label>
                                    <p className="body-text-1">{t("history.list_1.desc")}</p>
                                </li>
                                <li>
                                    <label className="body-text-1">{t("history.list_2.month")}</label>
                                    <p className="body-text-1">{t("history.list_2.desc")}</p>
                                </li>
                                <li>
                                    <label className="body-text-1">{t("history.list_3.month")}</label>
                                    <p className="body-text-1">{t("history.list_3.desc")}</p>
                                </li>
                                <li>
                                    <label className="body-text-1">{t("history.list_4.month")}</label>
                                    <p className="body-text-1">{t("history.list_4.desc")}</p>
                                </li>
                                <li>
                                    <label className="body-text-1">{t("history.list_5.month")}</label>
                                    <p className="body-text-1">{t("history.list_5.desc")}</p>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </section>
            {/* History Section 끝 */}

            {/* News Section */}
            <section className={styles.news}>
                <div className={styles.content_wrap}>
                    <h2 className="heading-1">NEWS</h2>
                    
                    <ul className={styles.board}>
                        <li>
                            <p className="body-text-2">{t("news.list_1.title")}</p>
                            <p className="body-text-2">{t("news.list_1.desc")}</p>
                        </li>
                        <li>
                            <p className="body-text-2">{t("news.list_2.title")}</p>
                            <p className="body-text-2">
                                {t("news.list_2.desc")}
                                <Link
                                    to='https://news.mt.co.kr/mtview.php?no=2023101317163112591'
                                    target='blank'
                                >
                                    <span class="material-symbols-outlined">link</span>
                                </Link>
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
            {/* News Section 끝 */}
        </div>
    );
}

export default Home;