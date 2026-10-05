import styles from './Achievements.module.css';

const Achievements = () => {
    return (
        <section className={styles.achieveSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>What We Have Achieve</h2>
                    <p className={styles.desc}>
                        Delivering reliable solar solutions with quality service, successful projects, and satisfied customers.
                    </p>

                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>100%</span>
                            <span className={styles.statLabel}>Customer Satisfaction</span>
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>1,230+</span>
                            <span className={styles.statLabel}>Projects</span>
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>520+</span>
                            <span className={styles.statLabel}>Total Customers</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
