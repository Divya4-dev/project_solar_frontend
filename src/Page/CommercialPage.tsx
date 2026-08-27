import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/NavBar/NavBar";
import ResidentialStats from "../components/ResidentialStats/ResidentialStats";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";
import styles from "./CommercialPage.module.css";

// Icons
import {
    FaBolt,
    FaBuilding,
    FaGlobe,
    FaChevronDown,
    FaChevronUp
} from "react-icons/fa";

// Image Assets
import heroBg from "../assets/commercial_hero_bg.png";
import workerImg from "../assets/commercial_roof_worker.png";

interface ScrollRevealProps {
    children: ReactNode;
}

const ScrollReveal = ({ children }: ScrollRevealProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={`${styles.revealWrapper} ${isVisible ? styles.revealActive : ''}`}>
            {children}
        </div>
    );
};

interface AccordionItem {
    title: string;
    description: string;
}

const CommercialPage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const checklistItems: AccordionItem[] = [
        {
            title: "Roof inspection for strength",
            description: "A commercial rooftop solar system easily imparts 15 kg/square meter of load on the roof. We ensure your roof is strong enough to not collapse under such a degree of load."
        },
        {
            title: "Type of roof",
            description: "If you have an RCC roof and would like to continue to utilize the area for other purposes, you require elevated hot-dip galvanized steel mounting structures. If you have a metallic sheet roof, you require aluminum rail structures that are light, sturdy, and corrosion-resistant."
        },
        {
            title: "Slope, direction, and mounting angle",
            description: "Solar panels provide the best generation when the roof slope faces Southwards. The spot for the installation of commercial solar panels should ideally stay shadow-free between 9 AM to 4 PM. The ideal tilt angle for solar panel installation on commercial rooftops in South India is 10°. The ideal tilt angle increases as you move towards North India, and should be above 20°."
        },
        {
            title: "Easy access to the rooftop",
            description: "There should be safe, direct access to the commercial rooftops so that installers can carry all the raw materials for solar panel installation safely. Post the installation, regular fortnightly maintenance also requires a safe passage."
        }
    ];

    const toggleAccordion = (idx: number) => {
        setOpenIndex(prev => prev === idx ? null : idx);
    };

    return (
        <div className={styles.pageWrapper}>
            <Header />
            <Navbar />

            {/* Commercial Hero */}
            <section
                className={styles.heroSection}
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${heroBg})` }}
            >
                <div className={styles.heroContainer}>
                    <h1 className={styles.heroTitle}>
                        UNLOCK THE POWER OF CLEAN<br />
                        ENERGY FOR YOUR BUSINESS
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Transform your business with sustainable, cost-effective and reliable commercial solar solutions. Discover the benefits today.
                    </p>
                    <button
                        className={styles.heroBtn}
                        onClick={() => {
                            window.location.href = "/?page_id=1039";
                        }}
                    >
                        Get A Free Quote
                    </button>
                </div>
            </section>

            {/* Benefits Section */}
            <ScrollReveal>
                <section className={styles.benefitsSection}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>
                            Benefits of Installing Solar Panels on Commercial Rooftops
                        </h2>
                        <div className={styles.benefitsGrid}>
                            {/* Card 1 */}
                            <div className={styles.benefitCard}>
                                <div className={styles.benefitIcon}>
                                    <FaBolt />
                                </div>
                                <h3 className={styles.benefitTitle}>Reduce Energy Costs</h3>
                                <p className={styles.benefitDesc}>
                                    Solar panels harness the power of the sun to generate clean, renewable energy, reducing your business's dependence on expensive grid-supplied electricity.
                                </p>
                            </div>
                            {/* Card 2 */}
                            <div className={styles.benefitCard}>
                                <div className={styles.benefitIcon}>
                                    <FaBuilding />
                                </div>
                                <h3 className={styles.benefitTitle}>Increase Property Value</h3>
                                <p className={styles.benefitDesc}>
                                    Installing solar panels on your commercial rooftop can increase the value of your property, making it more attractive to potential buyers or renters.
                                </p>
                            </div>
                            {/* Card 3 */}
                            <div className={styles.benefitCard}>
                                <div className={styles.benefitIcon}>
                                    <FaGlobe />
                                </div>
                                <h3 className={styles.benefitTitle}>Sustainability and Environmental</h3>
                                <p className={styles.benefitDesc}>
                                    By using clean energy, businesses can reduce their carbon footprint, demonstrate their commitment to sustainability, and contribute to a greener future for all.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Requirements Section */}
            <ScrollReveal>
                <section className={styles.requirementsSection}>
                    <div className={styles.container}>
                        <div className={styles.requirementsGrid}>
                            {/* Left Side Content */}
                            <div className={styles.reqLeft}>
                                <h2 className={styles.reqHeading}>
                                    Installation requirements<br />
                                    for commercial rooftops
                                </h2>
                                <p className={styles.reqText}>
                                    At SolarSquare, we take care of all the commercial rooftop solar panel installation requirements right from the evaluation stage to installation.
                                </p>
                                <p className={styles.reqSubText}>
                                    A successful installation of solar systems on commercial rooftops has the following mandatory requirements -
                                </p>

                                <div className={styles.checklist}>
                                    {checklistItems.map((item, idx) => {
                                        const isOpen = openIndex === idx;
                                        return (
                                            <div key={idx} className={styles.accordionContainer}>
                                                <div
                                                    className={styles.checkItem}
                                                    onClick={() => toggleAccordion(idx)}
                                                >
                                                    {isOpen ? (
                                                        <FaChevronUp className={styles.caretIcon} />
                                                    ) : (
                                                        <FaChevronDown className={styles.caretIcon} />
                                                    )}
                                                    <span className={styles.checkText}>{item.title}</span>
                                                </div>
                                                <div className={`${styles.accordionContent} ${isOpen ? styles.contentOpen : ''}`}>
                                                    <p className={styles.accordionDescription}>
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Right Side Image Decorator */}
                            <div className={styles.reqRight}>
                                <div className={styles.gridDecorator}></div>
                                <div className={styles.imageWrapper}>
                                    <img src={workerImg} alt="Technician drilling commercial solar panels" className={styles.workerImage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Reused Stats Banner */}
            <ScrollReveal>
                <ResidentialStats />
            </ScrollReveal>

            {/* Reused Footer */}
            <Footer />

            <WhatsAppButton />
        </div>
    );
};

export default CommercialPage;
