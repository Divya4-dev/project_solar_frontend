import { useEffect, useRef, useState } from 'react';
import styles from './AboutUs.module.css';
import sunsetSolarBg from '../../assets/about_sunset_solar.png';
import { FaGlobe, FaLightbulb, FaSolarPanel, FaRegCheckCircle } from 'react-icons/fa';

const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [typedText, setTypedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const fullText = "About Us";

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, we unobserve so it only animates on scroll-in once
                    if (sectionRef.current) {
                        observer.unobserve(sectionRef.current);
                    }
                }
            },
            {
                threshold: 0.15, // Trigger when 15% of section enters viewport
            }
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
        // Only start typing when the section is visible
        if (!isVisible) return;

        const handleTyping = () => {
            if (!isDeleting) {
                // Typing
                setTypedText(fullText.substring(0, typedText.length + 1));
                setTypingSpeed(150); // Speed of typing

                if (typedText === fullText) {
                    // Done typing, wait 2s before deleting
                    setIsDeleting(true);
                    setTypingSpeed(2000);
                }
            } else {
                // Deleting
                setTypedText(fullText.substring(0, typedText.length - 1));
                setTypingSpeed(75); // Speed of deleting

                if (typedText === '') {
                    // Done deleting, wait 0.5s before restarting
                    setIsDeleting(false);
                    setTypingSpeed(500);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [typedText, isDeleting, isVisible, typingSpeed]);

    return (
        <section
            ref={sectionRef}
            className={`${styles.aboutSection} ${isVisible ? styles.visible : ''}`}
            id="about"
        >
            <div className={styles.container}>
                {/* 3 Key Benefits Section */}
                <div className={styles.benefitsGrid}>
                    <div className={`${styles.benefitCard} ${isVisible ? styles.animateCard1 : ''}`}>
                        <div className={styles.iconCircle}>
                            <FaGlobe />
                        </div>
                        <h3 className={styles.benefitTitle}>Save Planet</h3>
                        <p className={styles.benefitText}>
                            Save the planet, power up your life with sustainable solar energy solutions.
                        </p>
                    </div>

                    <div className={`${styles.benefitCard} ${isVisible ? styles.animateCard2 : ''}`}>
                        <div className={styles.iconCircle}>
                            <FaLightbulb />
                        </div>
                        <h3 className={styles.benefitTitle}>Energy Saving</h3>
                        <p className={styles.benefitText}>
                            Energy saving for a greener Earth: Choose solar, embrace a brighter future.
                        </p>
                    </div>

                    <div className={`${styles.benefitCard} ${isVisible ? styles.animateCard3 : ''}`}>
                        <div className={styles.iconCircle}>
                            <FaSolarPanel />
                        </div>
                        <h3 className={styles.benefitTitle}>Solar Energy</h3>
                        <p className={styles.benefitText}>
                            Light up your world, preserve the planet, and save energy.
                        </p>
                    </div>
                </div>

                {/* Main Side-by-Side Detailed Section */}
                <div className={styles.detailsGrid}>
                    {/* Left Side: Photo */}
                    <div className={`${styles.imageColumn} ${isVisible ? styles.animateLeft : ''}`}>
                        <div className={styles.imageWrapper}>
                            <img
                                src={sunsetSolarBg}
                                alt="Solar panels against sunset"
                                className={styles.detailsImage}
                            />
                        </div>
                    </div>

                    {/* Right Side: Text & CTA */}
                    <div className={`${styles.textColumn} ${isVisible ? styles.animateRight : ''}`}>
                        <h2 className={styles.heading}>
                            {typedText}
                            <span className={styles.cursor}>|</span>
                        </h2>
                        <p className={styles.description}>
                            SSB Solar Energy is India’s leading Energy Solution Provider based in Bhopal with over 5+ Year experience in power generation. We are committed to promoting the use of renewable energy and with the advent of new technology, we have harnessed the power of solar energy to provide turnkey solutions for power companies. Our team of experts leverages the latest technology and tools to design, supply and install solar power systems in following areas :
                        </p>

                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <FaRegCheckCircle className={styles.listIcon} />
                                <span>Residential rooftop</span>
                            </li>
                            <li className={styles.listItem}>
                                <FaRegCheckCircle className={styles.listIcon} />
                                <span>Commercial & Industrial rooftop</span>
                            </li>
                            <li className={styles.listItem}>
                                <FaRegCheckCircle className={styles.listIcon} />
                                <span>Ground Mounted Captive Projects</span>
                            </li>
                        </ul>

                        {/* Scrolling Hover Button */}
                        <button
                            className={styles.scrollBtn}
                            aria-label="Learn More About Us"
                            onClick={() => {
                                window.location.href = "/?page_id=628";
                            }}
                        >
                            <span className={styles.btnTextContainer}>
                                <span className={styles.btnText}>LEARN MORE</span>
                                <span className={styles.btnText}>ABOUT US</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
