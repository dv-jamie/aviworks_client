import styles from './Recruit.module.css'

function Recruit() {
    return (
        <div className={styles.container}>
            <h1>recruit page</h1>

            {/* Intro Section */}
            <section className={styles.intro}>
                <div className={styles.content_wrap}>
                    <h2 className="heading-1">
                        에이비웍스 채용 페이지를
                        <br />
                        방문해 주셔서 감사합니다
                    </h2>
                    <h3 className="heading-3">우리는 당신의 잠재력을 펼칠 수 있는 기회를 제공합니다</h3>
                </div>
            </section>
            {/* Intro Section 끝 */}

            {/* Board Section */}
            <section className={styles.board}>
                <div className={styles.content_wrap}>
                    <h2 className="heading-2">현재 진행 중인 공고</h2>

                    <ul className={styles.board_wrap}>
                        <li>
                            <label>AI/ML</label>
                            <ul className={styles.detail_wrap}>
                                <li>Algorithm</li>
                                <li>Application (2D/3D Motion Analysis)</li>
                            </ul>
                        </li>
                        <li>
                            <label>
                                Computer<br />
                                Vision
                            </label>
                            <ul className={styles.detail_wrap}>
                                <li>Image Processing</li>
                                <li>Object Detection</li>
                                <li>Image Classification</li>
                            </ul>
                        </li>
                        <li>
                            <label>
                                Golf<br />
                                Application
                            </label>
                            <ul className={styles.detail_wrap}>
                                <li>Ball Tracking (Ball detection & Analysis)</li>
                                <li>3D Stereo Vision, Doppler Radar</li>
                                <li>Launch Monitor</li>
                                <li>Golf Electric Trolley</li>
                            </ul>
                        </li>
                        <li>
                            <label>
                                Embedded<br />
                                Solution
                            </label>
                            <ul className={styles.detail_wrap}>
                                <li>Various AP, MCU, DSP Solution</li>
                                <li>RTOS, Linux Kernel, Device</li>
                                <li>Driver, System BSP, Network Application</li>
                                <li>Various Solution with FPGA</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
            {/* Board Section 끝 */}
        </div>
    );
}

export default Recruit;