import { useState } from 'react';
import styles from './GetInTouch.module.css';
import { FaEnvelopeOpenText } from 'react-icons/fa';

const GetInTouch = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className={styles.getInTouchSection} id="contact">
            <div className={styles.container}>
                <div className={styles.banner}>
                    <div className={styles.leftContent}>
                        <div className={styles.iconCircle}>
                            <FaEnvelopeOpenText />
                        </div>
                        <div className={styles.textBlock}>
                            <h2 className={styles.headingTitle}>GET IN TOUCH</h2>
                            <p className={styles.description}>
                                Get in touch today! Reach out for expert solar solutions and take the first step towards sustainable energy.
                            </p>
                        </div>
                    </div>

                    <div className={styles.rightContent}>
                        <button
                            className={styles.scrollBtn}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={() => {
                                window.location.href = "/?page_id=16";
                            }}
                            aria-label="Get in touch contact button"
                        >
                            <span
                                className={styles.btnTextContainer}
                                style={{ transform: isHovered ? 'translateY(-48px)' : 'translateY(0)' }}
                            >
                                <span className={styles.btnText}>GO SOLAR NOW!</span>
                                <span className={styles.btnText}>CONTACT US</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;
