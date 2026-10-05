import { useEffect, useRef, useState } from 'react';
import styles from './SsbDetail.module.css';
import kneelingEngineer from '../../assets/about_page_hero.png';
import { FaBullseye, FaEye } from 'react-icons/fa';

const SsbDetail = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [typedText, setTypedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    const fullText = "About Us";

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

        let timer: any;

        const handleType = () => {
            setTypedText((prev) => {
                if (!isDeleting) {
                    // Typing
                    if (prev.length < fullText.length) {
                        return fullText.slice(0, prev.length + 1);
                    } else {
                        // Fully typed, pause then start deleting
                        setIsDeleting(true);
                        return prev;
                    }
                } else {
                    // Deleting
                    if (prev.length > 0) {
                        return fullText.slice(0, prev.length - 1);
                    } else {
                        // Fully deleted, pause then start typing
                        setIsDeleting(false);
                        return prev;
                    }
                }
            });
        };

        // Determine speed and delay
        let delay = isDeleting ? 50 : 120;
        if (!isDeleting && typedText === fullText) {
            delay = 1000; // Pause for 1 second when fully typed
        } else if (isDeleting && typedText === "") {
            delay = 0; // Immediately start entering again
        }

        timer = setTimeout(handleType, delay);
        return () => clearTimeout(timer);
    }, [typedText, isDeleting, isVisible]);

    return (
        <div ref={sectionRef} className={`${styles.aboutSection} ${isVisible ? styles.visible : ''}`} id="about-ssb-detailing">
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
                        SBB Solar Service is India's leading Energy Solution Provider based in Madhya Pradesh with over three decades of experience in power generation. We are committed to promoting the use of renewable energy and with the advent of new technology, we have harnessed the power of solar service to provide turnkey solutions for power companies.
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

export default SsbDetail;
