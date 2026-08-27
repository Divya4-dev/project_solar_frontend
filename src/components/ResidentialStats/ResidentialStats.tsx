import { useState } from 'react';
import styles from './ResidentialStats.module.css';
import AnimatedCounter from '../AnimatedCounter/AnimatedCounter';

const ResidentialStats = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className={styles.statsSection}>
            <div className={styles.container}>
                {/* Stats Counters */}
                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <h3 className={styles.statValue}>
                            <AnimatedCounter end={120} suffix="+" />
                        </h3>
                        <p className={styles.statLabel}>Solar Plant Installation</p>
                    </div>
                    <div className={styles.statCard}>
                        <h3 className={styles.statValue}>
                            <AnimatedCounter end={5} suffix="+" />
                        </h3>
                        <p className={styles.statLabel}>State</p>
                    </div>
                    <div className={styles.statCard}>
                        <h3 className={styles.statValue}>
                            <AnimatedCounter end={50} suffix="+" />
                        </h3>
                        <p className={styles.statLabel}>Team Members</p>
                    </div>
                    <div className={styles.statCard}>
                        <h3 className={styles.statValue}>
                            <AnimatedCounter end={5} suffix="+" />
                        </h3>
                        <p className={styles.statLabel}>Years of Experience</p>
                    </div>
                </div>

                {/* Consultation Button */}
                <div className={styles.buttonWrapper}>
                    <button
                        className={styles.scrollBtn}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={() => {
                            window.location.href = "/?page_id=16";
                        }}
                        aria-label="Get a free consultation button"
                    >
                        <span
                            className={styles.btnTextContainer}
                            style={{ transform: isHovered ? 'translateY(-48px)' : 'translateY(0)' }}
                        >
                            <span className={styles.btnText}>GET A FREE CONSULTATION!</span>
                            <span className={styles.btnText}>GO SOLAR!</span>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ResidentialStats;
