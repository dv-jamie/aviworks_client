import { useTranslation } from 'react-i18next';
import styles from './Recruit.module.css'

function Recruit() {
    const { t } = useTranslation('recruit')

    return (
        <div className={styles.container}>
            <h1>recruit page</h1>

            {/* Intro Section */}
            <section className={styles.intro}>
                <div className={styles.content_wrap}>
                    <h2 className="heading-1">{t("title")}</h2>
                    <h3 className="heading-3">{t("sub_title")}</h3>
                </div>
            </section>
            {/* Intro Section 끝 */}

            {/* Board Section */}
            <section className={styles.board}>
                <div className={styles.content_wrap}>
                    <h2 className="heading-2">{t("board_title")}</h2>

                    <ul className={styles.board_wrap}>
                        <li>
                            <label className="heading-4">AI/ML</label>
                            <ul className={styles.detail_wrap}>
                                <li className="body-text-3">Algorithm</li>
                                <li className="body-text-3">Application (2D/3D Motion Analysis)</li>
                            </ul>
                        </li>
                        <li>
                            <label className="heading-4">
                                Computer<br />
                                Vision
                            </label>
                            <ul className={styles.detail_wrap}>
                                <li className="body-text-3">Image Processing</li>
                                <li className="body-text-3">Object Detection</li>
                                <li className="body-text-3">Image Classification</li>
                            </ul>
                        </li>
                        <li>
                            <label className="heading-4">
                                Golf<br />
                                Application
                            </label>
                            <ul className={styles.detail_wrap}>
                                <li className="body-text-3">Ball Tracking (Ball detection & Analysis)</li>
                                <li className="body-text-3">3D Stereo Vision, Doppler Radar</li>
                                <li className="body-text-3">Launch Monitor</li>
                                <li className="body-text-3">Golf Electric Trolley</li>
                            </ul>
                        </li>
                        <li>
                            <label className="heading-4">
                                Embedded<br />
                                Solution
                            </label>
                            <ul className={styles.detail_wrap}>
                                <li className="body-text-3">Various AP, MCU, DSP Solution</li>
                                <li className="body-text-3">RTOS, Linux Kernel, Device</li>
                                <li className="body-text-3">Driver, System BSP, Network Application</li>
                                <li className="body-text-3">Various Solution with FPGA</li>
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