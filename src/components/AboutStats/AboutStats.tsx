import styles from './AboutStats.module.css';

const AboutStats = () => {
    return (
        <section className={styles.statsBanner}>
            <div className={styles.container}>
                <div className={styles.statsGrid}>
                    <div className={styles.statItem}>
                        <span className={styles.number}>580+</span>
                        <span className={styles.label}>Satisfied Customers</span>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.statItem}>
                        <span className={styles.number}>50+</span>
                        <span className={styles.label}>Expert Workers</span>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.statItem}>
                        <span className={styles.number}>320+</span>
                        <span className={styles.label}>Successful Projects</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStats;
