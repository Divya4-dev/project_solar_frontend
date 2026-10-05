import { useEffect, useRef, useState } from 'react';
import styles from './ServiceDetail.module.css';
import installersImg from '../../assets/services_installers.png';

const ServiceDetail = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [typedText, setTypedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    const fullText = "OUR SERVICES";

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
        <div ref={sectionRef} className={`${styles.servicesHeroSection} ${isVisible ? styles.visible : ''}`} id="services-hero">
            <div className={styles.grid}>
                {/* Left Side: Photo */}
                <div className={`${styles.imageColumn} ${isVisible ? styles.animateLeft : ''}`}>
                    <div className={styles.imageWrapper}>
                        <img src={installersImg} alt="Technicians installing panels on roof" className={styles.image} />
                    </div>
                </div>

                {/* Right Side: Text & Typewriter Title */}
                <div className={`${styles.textColumn} ${isVisible ? styles.animateRight : ''}`}>
                    <h2 className={styles.headingTitle}>
                        {typedText}
                        <span className={styles.cursor}>|</span>
                    </h2>
                    <p className={styles.description}>
                        Unlock the power of the sun with our cutting-edge solar services. We specialize in harnessing clean, renewable energy to illuminate your path towards sustainability. Our expert team designs and installs state-of-the-art solar solutions tailored to meet your unique needs. From residential rooftops to commercial facilities, we empower you to reduce your carbon footprint while enjoying significant cost savings. Embrace the future of energy with confidence, knowing that our reliable solar services are paving the way for a brighter, greener tomorrow. Make the switch to solar today and join the movement towards a cleaner, more sustainable energy landscape.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
