import { useState } from 'react';
import styles from './WhatWeOffer.module.css';
import { FaRegCheckCircle } from 'react-icons/fa';
import carpenterBg from '../../assets/workshop_technician.png';

const WhatWeOffer = () => {
    const [isHovered, setIsHovered] = useState(false);

    const checklist = [
        "Residential & Small Utility",
        "Photovoltaic Modules",
        "Grid Connected Solar System",
        "Battery Based Solar System",
        "Solar EPC"
    ];

    return (
        <section className={styles.whatOfferSection} id="what-we-offer">
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Left Column: Text & List */}
                    <div className={styles.textColumn}>
                        <span className={styles.tagline}>What we offer</span>
                        <h2 className={styles.headingTitle}>
                            We Offer Maintenance & Quality Services
                        </h2>
                        <p className={styles.description}>
                            Tailored solutions for your success—innovative services, expert consultations, and unmatched support. Elevate your experience with us.
                        </p>

                        <ul className={styles.list}>
                            {checklist.map((item, index) => (
                                <li key={index} className={styles.listItem}>
                                    <FaRegCheckCircle className={styles.listIcon} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className={styles.buttonWrapper}>
                            <button
                                className={styles.scrollBtn}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                onClick={() => {
                                    window.location.href = "/?page_id=13";
                                }}
                                aria-label="Know More Services"
                            >
                                <span
                                    className={styles.btnTextContainer}
                                    style={{ transform: isHovered ? 'translateY(-48px)' : 'translateY(0)' }}
                                >
                                    <span className={styles.btnText}>KNOW MORE</span>
                                    <span className={styles.btnText}>OUR SERVICES</span>
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className={styles.imageColumn}>
                        <div className={styles.imageWrapper}>
                            <img src={carpenterBg} alt="Our maintenance expert craftsman" className={styles.image} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeOffer;
