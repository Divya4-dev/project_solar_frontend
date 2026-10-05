import { useEffect, useRef, useState } from 'react';
import styles from './JmdDetail.module.css';
import kneelingEngineer from '../../assets/about_page_hero.png';
import { FaBullseye, FaEye } from 'react-icons/fa';

const JmdDetail = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [typedText, setTypedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const fullText = "ABOUT US";

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

    useEffect(() => {
        if (!isVisible) return;

        const handleTyping = () => {
            if (!isDeleting) {
                setTypedText(fullText.substring(0, typedText.length + 1));
                setTypingSpeed(150);

                if (typedText === fullText) {
                    setIsDeleting(true);
                    setTypingSpeed(2000);
                }
            } else {
                setTypedText(fullText.substring(0, typedText.length - 1));
                setTypingSpeed(75);

                if (typedText === '') {
                    setIsDeleting(false);
                    setTypingSpeed(500);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [typedText, isDeleting, isVisible, typingSpeed]);

    return (
        <div ref={sectionRef} className={`${styles.aboutSection} ${isVisible ? styles.visible : ''}`} id="about-jmd-detailing">
            <div className={styles.grid}>
                {/* Left Side: Photo */}
                <div className={`${styles.imageColumn} ${isVisible ? styles.animateLeft : ''}`}>
                    <div className={styles.imageWrapper}>
                        <img src={kneelingEngineer} alt="Engineer on solar grid" className={styles.image} />
                    </div>
                </div>

                {/* Right Side: Text & Mission/Vision Details */}
                <div className={`${styles.textColumn} ${isVisible ? styles.animateRight : ''}`}>
                    <h2 className={styles.headingTitle}>
                        {typedText}
                        <span className={styles.cursor}>|</span>
                    </h2>
                    <p className={styles.description}>
                        JMD Solar Service is India's leading Energy Solution Provider based in Madhya Pradesh with over three decades of experience in power generation. We are committed to promoting the use of renewable energy and with the advent of new technology, we have harnessed the power of solar service to provide turnkey solutions for power companies.
                    </p>

                    <div className={styles.detailsList}>
                        {/* Our Mission */}
                        <div className={styles.detailItem}>
                            <div className={styles.iconCircle}>
                                <FaBullseye />
                            </div>
                            <div className={styles.detailText}>
                                <h3 className={styles.detailTitle}>Our Mission</h3>
                                <p className={styles.detailDesc}>
                                    Our mission is to provide high-quality, affordable solar solutions to our clients, while promoting environmental responsibility and reducing our collective carbon footprint. We are committed to helping our clients save money on their energy bills while also promoting a cleaner, more sustainable future for all.
                                </p>
                            </div>
                        </div>

                        {/* Our Vision */}
                        <div className={styles.detailItem}>
                            <div className={styles.iconCircle}>
                                <FaEye />
                            </div>
                            <div className={styles.detailText}>
                                <h3 className={styles.detailTitle}>Our Vision</h3>
                                <p className={styles.detailDesc}>
                                    Our vision is to create a cleaner, more sustainable future by helping individuals and businesses transition to solar service. We believe that solar service is the key to reducing our dependence on fossil fuels and promoting a more sustainable way of life.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JmdDetail;
