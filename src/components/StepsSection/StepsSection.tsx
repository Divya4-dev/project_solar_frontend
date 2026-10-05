import styles from './StepsSection.module.css';
import { FaHandshake, FaClipboardList, FaSolarPanel, FaBolt } from 'react-icons/fa';

const StepsSection = () => {
    const steps = [
        {
            num: 1,
            icon: <FaHandshake />,
            text: "Book a free consultation with our experts"
        },
        {
            num: 2,
            icon: <FaClipboardList />,
            text: "Our team will conduct site detailed survey"
        },
        {
            num: 3,
            icon: <FaSolarPanel />,
            text: "Complete the solar plant installation"
        },
        {
            num: 4,
            icon: <FaBolt />,
            text: "Ready to use solar service"
        }
    ];

    return (
        <section className={styles.stepsSection} id="steps">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subtitle}>Seamless Solar Plant Installation with Our Experts</span>
                    <h2 className={styles.title}>4 Easy Step to Task</h2>
                </div>

                <div className={styles.stepsRow}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.stepCard}>
                            <div className={styles.circleWrapper}>
                                <div className={styles.iconCircle}>
                                    {step.icon}
                                </div>
                                <span className={styles.badge}>{step.num}.</span>
                            </div>
                            <p className={styles.stepText}>{step.text}</p>
                            {index < 3 && <div className={styles.dottedLine}></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StepsSection;
