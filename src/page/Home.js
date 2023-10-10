import { Link } from 'react-router-dom';
import { CloudService } from '../assets/icons';
import { AScout, Basketball, BicycleRace, Building, CaddieRobot, Cameras, Fun, Golf, GolfCulture, GolfPose, Handshaking, Networking, Robot, Soccer, SwingAnalyze, SwingTracker, TennisLesson, Trophy, Volleyball } from '../assets/images';
import styles from './Home.module.css'

function Home() {
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
                        <p className="heading-3">모든 사람들이 스포츠를</p>
                        <h2>
                            <ul className={styles.keyword_wrap}>
                                <li>좀 더 쉽게,</li>
                                <li>좀 더 즐겁게,</li>
                                <li>좀 더 잘 할 수 있게,</li>
                            </ul>
                        </h2>
                        <p className="heading-3">
                            <span>국내 최고의 스포츠 플랫폼</span>을 만드는<br />
                            스포츠테크 기업이 되고자 합니다
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
                <h2 className="heading-1">우리의 목표는</h2>
                <p>
                    혁신적이고, 분명하며, 용이하고,<br />
                    지속 가능한 기술과 솔루션을 통해<br />
                    스포츠 경험을 향상시킴으로써
                </p>
                <p className="heading-3">
                    더 많은 사람들에게 더 큰 기쁨과<br />
                    즐거움을 제공하는 것입니다
                </p>
            </section>
            {/* Goal Section 끝 */}

            {/* Way Section */}
            <section className={styles.way}>
                <div className={styles.content_wrap}>
                    <div className={styles.title_wrap}>
                        <h3 className="heading-3">골프 실력 향상, 즐거움, 사회적 네트워킹을 통해</h3>
                        <h2 className="heading-1">
                            새로운 국민 건강을 위한<br />
                            건전한 골프 문화 창조
                        </h2>
                    </div>
                    
                    <div className={styles.board_wrap}>
                        <div className={styles.caption}>AI-3D Vision Based Total Golf Solutions</div>

                        <ul className={styles.board}>
                            <li>
                                <label>Self-Skill Improvement</label>
                                <ul className={styles.detail_wrap}>
                                    <li>3D 골프 스윙 분석 & 스윙 자세 검출</li>
                                    <li>AI 골프 클럽 Fitting Service</li>
                                    <li>온라인을 통한 골프 레슨</li>
                                    <li>AI 코칭 및 자가 학습</li>
                                </ul>
                                <img src={GolfPose} alt="골프 자세 일러스트" />
                            </li>
                            <li>
                                <label>Social Networking</label>
                                <ul className={styles.detail_wrap}>
                                    <li>Global Mentor Networking</li>
                                    <li>Market Place Platform</li>
                                    <li>Domain Expert Networking</li>
                                </ul>
                                <img src={Networking} alt="네트워킹 일러스트" />
                            </li>
                            <li>
                                <label>Fun</label>
                                <ul className={styles.detail_wrap}>
                                    <li>온라인 스크린 골프 대회</li>
                                    <li>온라인을 통한 프로 골퍼와의 Networking</li>
                                    <li>어린이ㆍ청소년 대상 즐거운 골프 교실</li>
                                    <li>가족ㆍ친구들이 함께 즐길 수 있는 놀이</li>
                                </ul>
                                <img src={Fun} alt="즐거운 일러스트" />
                            </li>
                            <li>
                                <label>New Culture</label>
                                <ul className={styles.detail_wrap}>
                                    <li>건강 증진 위한 대중 스포츠화</li>
                                    <li>
                                        셀프라운딩, 워킹 골프 문화 구축<br />
                                        (No Caddie, No Cart)
                                    </li>
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
                        <li>AI</li>
                        <li>Big Data</li>
                        <li>Cloud</li>
                        <li>5G/LTE</li>
                        <li>Analysis Algorithm</li>
                        <li>Autonomous Control</li>
                        <li>Optical System</li>
                        <li>Ball Tracking</li>
                        <li>.</li>
                        <li>.</li>
                        <li>.</li>
                    </ul>

                    <div className={styles.title_wrap}>
                        <h3 className="heading-3">4차 산업의 기술을 접목한 에이비웍스의</h3>
                        <h2 className="heading-1">주요 핵심 기술</h2>
                    </div>

                    <ul className={styles.list}>
                        <li>
                            <div className={styles.image}>
                                <img src={Robot} alt="로봇 이미지" />
                            </div>

                            <ul className={styles.content_wrap}>
                                <label>자율 추종/주행 기술</label>
                                <ul className={styles.detail_wrap}>
                                    <li>3D 비전, Lidar, Radar 기반의 골퍼 추적 및 자율 추종 기술</li>
                                    <li>정밀 모터 제어, 네트워크, 5G/LTE 연동 기술</li>
                                    <li>AI 에지 디바이스 기반 알고리즘 개발 기술 (얼굴 감지, 모션 감지, 제스처 인식 등)</li>
                                    <li>효율적인 대용량 동영상 저장 및 전송, 관리 기술 (Cloud/Data 관리/데이터 분류/데이터 분석)</li>
                                </ul>
                            </ul>
                        </li>
                        <li>
                            <div className={styles.image}>
                                <img src={SwingAnalyze} alt="스윙 분석 이미지" />
                            </div>

                            <ul className={styles.content_wrap}>
                                <label>실시간 3D 스윙 분석 기술</label>
                                <ul className={styles.detail_wrap}>
                                    <li>AI 기반 3D 골프 스윙 분석 기술</li>
                                    <li>스윙 단계별 3D 기반 정밀 데이터 생성 및 분석</li>
                                    <li>직관적인 분석 및 코칭을 위한 사용자 친화적 UI/UX</li>
                                    <li>Golf Ball 트래킹 및 분석 기술</li>
                                </ul>
                            </ul>
                        </li>
                        <li>
                            <div className={styles.image}>
                                <img src={Cameras} alt="카메라 이미지" />
                            </div>

                            <ul className={styles.content_wrap}>
                                <label>자율 추종/주행 기술</label>
                                <ul className={styles.detail_wrap}>
                                    <li>AI 기반 에지 디바이스 설계 기술</li>
                                    <li>Blurring 없는 고속 프레임 레이트 카메라 기술</li>
                                    <li>저조도 환경에서도 최상의 화질 구현을 위한 이미지 처리 기술</li>
                                    <li>와이드 앵글 및 고화질을 위한 고성능 렌즈 탑재</li>
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
                        <h3 className="heading-3">에이비웍스의 빅데이터 기반</h3>
                        <h2 className="heading-1">주요 서비스</h2>
                    </div>

                    <ul className={styles.product_list}>
                        <li>
                            <div className={styles.image_wrap}>
                                <img src={SwingTracker} alt="3D Swing Tracker 제품 이미지" />
                            </div>

                            <div className={styles.content_wrap}>
                                <div>3D Swing Tracker</div>
                                <p>
                                    AI 기반 다 시점<br />
                                    3D 골프 스윙 분석 서비스
                                </p>
                                <button>
                                    <Link to="/product">자세히 보기 →</Link>
                                </button>
                            </div>
                        </li>
                        <li>
                            <div className={styles.image_wrap}>
                                <img src={AScout} alt="A-Scout 제품 이미지" />
                            </div>

                            <div className={styles.content_wrap}>
                                <div>A-Scout</div>
                                <p>
                                    다양한 스포츠에 특화된<br />
                                    고속/정밀 영상 촬영 카메라
                                </p>
                                <button>
                                    <Link to="/product">자세히 보기 →</Link>
                                </button>
                            </div>
                        </li>
                        <li>
                            <div className={styles.image_wrap}>
                                <img src={CaddieRobot} alt="캐디 로봇 이미지" />
                            </div>

                            <div className={styles.content_wrap}>
                                <div>
                                    Caddie-Robot<br />
                                    Platform Service
                                </div>
                                <p>
                                    골프 대중화를 위한 혁신적인<br />
                                    캐디 로봇 플랫폼 서비스
                                </p>
                                <button>
                                    <Link to="/product">자세히 보기 →</Link>
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
                        <h2 className="heading-1">
                            에이비웍스는<br />
                            계속해서 나아갑니다
                        </h2>
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
                            <li className={styles.year}>2023</li>
                            <ul className={styles.month}>
                                <li>
                                    <label>4월</label>
                                    <p>법인 설립</p>
                                </li>
                                <li>
                                    <label>7월</label>
                                    <p>
                                        스포츠 영상 촬영용 고속/정밀 카메라,<br />
                                        A-Scout 시리즈 런칭
                                    </p>
                                </li>
                                <li>
                                    <label>8월</label>
                                    <p>제1호 특허 출원</p>
                                </li>
                                <li>
                                    <label>10월</label>
                                    <p>
                                        AI 기반 3D 골프 스윙 영상 분석 서비스<br />
                                        3D Swing Tracker 런칭 행사 진행
                                    </p>
                                </li>
                                <li>
                                    <label>10월</label>
                                    <p>
                                        4차 산업 혁명을 이끄는 중견ㆍ중소 기업<br />
                                        4IR Awards 스타트업 부문 대상<br />
                                        (주최자 : 머니투데이)
                                    </p>
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
                            <p>주식회사 에이비웍스</p>
                            <p>AI 기반 3D 골프 스윙 영상 분석 서비스 “3D Swing Tracker” 런칭 행사 진행</p>
                        </li>
                        <li>
                            <p>주식회사 에이비웍스</p>
                            <p>4차 산업 혁명을 이끄는 중견〮중소 기업 ‘4IR Awards’ 스타트업 부문 대상 (주최자 : 머니투데이)</p>
                        </li>
                    </ul>
                </div>
            </section>
            {/* News Section 끝 */}
        </div>
    );
}

export default Home;