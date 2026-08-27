import { useEffect, useRef, useState } from 'react';
import styles from './WhyChooseUs.module.css';
import engineerBg from '../../assets/why_choose_us.png';

const WhyChooseUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (sectionRef.current) {
                        observer.unobserve(sectionRef.current);
                    }
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const metrics = [
        { label: "Ability To Challenge", percentage: 85 },
        { label: "Expertise", percentage: 90 },
        { label: "High Commitment", percentage: 95 },
        { label: "Best Results", percentage: 95 }
    ];

    return (
        <section ref={sectionRef} className={styles.whySection} id="why-choose-us">
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Left Column: Image */}
                    <div className={`${styles.imageColumn} ${isVisible ? styles.animateLeft : ''}`}>
                        <div className={styles.imageWrapper}>
                            <img src={engineerBg} alt="Engineer in solar farm" className={styles.image} />
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className={`${styles.contentColumn} ${isVisible ? styles.animateRight : ''}`}>
                        <h2 className={styles.headingTitle}>
                            Why <span className={styles.highlight}>Choose Us?</span>
                        </h2>
                        <p className={styles.description}>
                            Choose us for unmatched solar expertise, cutting-edge technology, customized solutions, financial savings, seamless integration, and unwavering commitment to sustainability
                        </p>

                        <div className={styles.metricsList}>
                            {metrics.map((metric, index) => (
                                <div key={index} className={styles.metricItem}>
                                    <div className={styles.metricHeader}>
                                        <span className={styles.metricLabel}>{metric.label}</span>
                                        <span className={styles.metricVal}>{metric.percentage}%</span>
                                    </div>
                                    <div className={styles.barBackground}>
                                        <div
                                            className={styles.barFill}
                                            style={{ width: isVisible ? `${metric.percentage}%` : '0%' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
