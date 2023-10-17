import { Link } from 'react-router-dom';
import { Note, Play } from '../assets/icons';
import { AScout, CaddieRobot, GolfClub1, GolfClub2, GolfClub3, MockupScreen1, MockupScreen2, MockupScreen3, Screen1, Screen2, SwingTracker } from '../assets/images';
import styles from './Product.module.css'

function Product() {
    return (
        <div className={styles.container}>
            <h1>product page</h1>

            {/* Swing Tracker */}
            <div className={styles.swing_tracker}>
                {/* Intro Section */}
                <section className={styles.intro}>
                    <div className={styles.content_wrap}>
                        <div className={styles.title_wrap}>
                            <h2 className="heading-1">
                                3D<br />
                                Swing Tracker
                            </h2>
                            <h3 className="heading-4">AI 기반 다 시점 3D 골프 스윙 분석 서비스</h3>
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
                                If you can&#39;t measure it,<br />
                                you can&#39;t improve it
                            </h2>
                            <h3 className="heading-4">
                                정밀한 AI 기반 3D 입체 분석을 통하여<br />
                                체계적으로 당신의 골프 실력 향상을 향상시킵니다
                            </h3>
                        </div>
                        
                        <div className={styles.vertical_line}></div>

                        <ul className={styles.detail_wrap}>
                            <li>
                                 <div className={styles.number_wrap}>
                                    <span className={`impact-text-1 ${styles.number}`}>2</span>
                                    <span className={`impact-text-2 ${styles.unit}`}>년</span>
                                 </div>
                                 <p className="body-text-2">
                                    나이, 인종, 성별, 체형별 데이터 확보,<br />
                                    Deep Learning 학습을 수행한 기간
                                 </p>
                            </li>
                            <li>
                                <div className={styles.number_wrap}>
                                    <span className={`impact-text-1 ${styles.number}`}>78</span>
                                    <span className={`impact-text-2 ${styles.unit}`}>개</span>
                                 </div>
                                 <p className="body-text-2">
                                    나이, 인종, 성별, 체형별 데이터 확보,<br />
                                    Deep Learning 학습을 수행한 기간
                                 </p>
                            </li>
                            <li>
                                <div className={styles.number_wrap}>
                                    <span className={`impact-text-1 ${styles.number}`}>101</span>
                                    <span className={`impact-text-2 ${styles.unit}`}>개</span>
                                 </div>
                                 <p className="body-text-2">
                                    나이, 인종, 성별, 체형별 데이터 확보,<br />
                                    Deep Learning 학습을 수행한 기간
                                 </p>
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
                                    <div className={`sub-title-2 ${styles.title}`}>AI 기반 3D 입체 분석 제공</div>
                                    <p className="body-text-2">생체역학을 바탕으로 체계적이고 정밀한 분석을 제공합니다</p>
                                </li>
                                <li>
                                    <div className={`sub-title-2 ${styles.title}`}>100여 개의 분석 데이터 제공</div>
                                    <p className="body-text-2">
                                        다 시점(여섯 방향)에서의 입체 스윙 영상과 함께 100여 개의<br />
                                        분석 데이터를 제공합니다
                                    </p>
                                </li>
                                <li>
                                    <div className={`sub-title-2 ${styles.title}`}>정밀 수치 데이터 제공</div>
                                    <p className="body-text-2">
                                        3D 기반 회전 정보(어깨 회전 각도, 힙 회전 각도),<br />
                                        머리, 가슴 움직임 정도, 척추 각도, 스웨이, X-Factor 등에 대한<br />
                                        정밀 수치 데이터를 제공합니다
                                    </p>
                                </li>
                            </ul>

                            <button className={styles.button}>
                                <Link to="https://youtu.be/67OOjc5YUNU?si=_75A5jCiqZ8AiREH" target="_blank">
                                    <div className={styles.button_content_wrap}>
                                        <Play />
                                        <span>동영상 보러가기</span>
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
                            <h2 className="heading-3">정밀 측정한 데이터와 수치화된 정보를 통한</h2>
                            <h3 className="heading-1">체계적인 코칭/학습 기회 제공</h3>
                        </div>

                        <ul>
                            <li>
                                <div className={styles.image_wrap}>
                                    <img src={MockupScreen1} alt="스크린 목업 이미지 1" />
                                </div>
                                <div className={styles.text_wrap}>
                                    <div className={`sub-title-2 ${styles.title}`}>
                                        데이터 기반의<br />
                                        정략적인 분석
                                    </div>
                                    <p className="body-text-2">정확하고 체계적인 코칭 및 학습 기회 제공</p>
                                    <p className={`body-text-2 ${styles.caption}`}>손목 각도 변화 그래프를 이용한 Casting 여부 판단</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.text_wrap}>
                                    <div className={`sub-title-2 ${styles.title}`}>정밀 데이터 제공</div>
                                    <p className="body-text-2">
                                        회전(Turn), 각도(Angle), 헤드업, 스웨이,<br />
                                        X-Factor 등
                                    </p>
                                    <p className={`body-text-2 ${styles.caption}`}>잘못된 2D 기반 스윙 분석 이슈 해결</p>
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
                                    <div className={`sub-title-2 ${styles.title}`}>
                                        스윙 단계별<br />
                                        코칭/학습 기회 제공
                                    </div>
                                    <p className="body-text-2">
                                        3부족하거나 개선해야 할 부분에 대해 정확한<br />
                                        수치 데이터(그래프) 기반 학습 계획(커리큘럼)
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* Description Section 끝 */}
            </div>
            {/* Swing Tracker Section 끝 */}

            {/* A-Scout Section */}
            <div className={styles.a_scount}>
                {/* Intro Section */}
                <section className={`${styles.intro} ${styles.a_scount}`}>
                    <div className={styles.content_wrap}>
                        <div className={styles.image_wrap}>
                            <img src={AScout} alt="swing tracker 이미지" />
                        </div>

                        <div className={styles.title_wrap}>
                            <h2 className="heading-1">
                                A-Scout<br />
                                Sports Camera
                            </h2>
                            <h3 className="heading-4">다양한 Sports에 특화된 고속/정밀 영상 촬영 카메라</h3>
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
                                    <div className={`sub-title-2 ${styles.title}`}>고속 정밀 촬영</div>
                                    <p className="body-text-2">
                                        골프, 테니스, 축구 등의 스포츠에서 빠르게 움직이는 대상체를<br />
                                        고속으로 정밀하게 촬영을 할 수 있습니다
                                    </p>
                                </li>
                                <li>
                                    <div className={`sub-title-2 ${styles.title}`}>골프 스윙 분석에 최적화된 영상</div>
                                    <p className="body-text-2">
                                        3D Swing Tracker를 사용한 골프 스윙 분석에 있어서<br />
                                        최고의 골프 스윙 영상을 제공해 줍니다
                                    </p>
                                </li>
                            </ul>

                            <div className={styles.button_wrap}>
                                <button className={styles.button}>
                                    <Link to="http://naver.me/5Ghyy6Wt" target="_blank">
                                        <div className={styles.button_content_wrap}>
                                            <Note />
                                            <span>[A-Scout_HE] 스펙 확인</span>
                                        </div>
                                    </Link>
                                </button>
                                <button className={styles.button}>
                                    <Link to="http://naver.me/xjJeewVF" target="_blank">
                                        <div className={styles.button_content_wrap}>
                                            <Note />
                                            <span>[A-Scout_LE] 스펙 확인</span>
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
            <div className={styles.caddie_robot}>
                {/* Intro Section */}
                <section className={`${styles.intro} ${styles.caddie_robot}`}>
                    <div className={styles.content_wrap}>
                        <div className={styles.image_wrap}>
                            <img src={CaddieRobot} alt="swing tracker 이미지" />
                        </div>

                        <div className={styles.title_wrap}>
                            <h2 className="heading-1">
                                Caddie-Robot<br />
                                Cloud Platform
                            </h2>
                            <h3 className="heading-4">AI 기반 다 시점 3D 골프 스윙 분석 서비스</h3>
                            <div className={styles.keyword_wrap}>
                                <span>자율주행 골프 Trolley</span>
                                <span>AI-based 3D 스윙 영상 분석</span>
                                <span>Caddie 서비스</span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Intro Section 끝 */}
                
                {/* Value Section 끝 */}
                <section className={styles.value}>
                    <div className={styles.content_wrap}>
                        <div className={styles.title_wrap}>
                            <h2 className="heading-1">
                                캐디 로봇 클라우드 플랫폼 서비스<br />
                                3가지 주요 핵심 가치
                            </h2>
                            <h3 className="heading-3">자연과 건강을 동시에 즐기는 혁신적인 골프 라운드를 경험하세요</h3>
                        </div>

                        <ul className={styles.value_list}>
                            <li>
                                <div className={styles.title_wrap}>
                                    <div className="sub-title-2">비용 절감</div>
                                    <div className="body-text-1">Cost Saving</div>
                                </div>
                                
                                <ul className={styles.detail_list}>
                                    <li className="body-text-2">매년 증가하는 라운딩 비용을 줄여 줍니다</li>
                                    <li className="body-text-2">워킹 골프를 통하여 건강도 지키고 캐디비와 카트비를 줄여 보세요</li>
                                </ul>
                            </li>
                            <li>
                                <div className={styles.title_wrap}>
                                    <div className="sub-title-2">편의 서비스</div>
                                    <div className="body-text-1">Convenience</div>
                                </div>

                                <ul className={styles.detail_list}>
                                    <li className="body-text-2">워킹 골프 (셀프 라운딩)을 위한 캐디 서비스를 제공합니다</li>
                                    <li className="body-text-2">골프 코스 정보, 스코어 등록, 남은 거리 정보 등을 포함한 빅데이터를 바탕으로 한 골퍼 개인별 맞춤형 필드 데이터를 제공합니다</li>
                                </ul>
                            </li>
                            <li>
                                <div className={styles.title_wrap}>
                                    <div className="sub-title-2">스윙 촬영ㆍ분석</div>
                                    <div className="body-text-1">Swing Tracking</div>
                                </div>

                                <ul className={styles.detail_list}>
                                    <li className="body-text-2">필드에서의 스윙 영상 촬영 서비스를 제공합니다</li>
                                    <li className="body-text-2">스윙 영상 앨범/비디오 클립을 제공합니다</li>
                                    <li className="body-text-2">AI 기반 3D 스윙 분석을 실시간으로 제공합니다</li>
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