import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/NavBar/NavBar";
import ResidentialStats from "../components/ResidentialStats/ResidentialStats";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";
import AnimatedCounter from "../components/AnimatedCounter/AnimatedCounter";
import styles from "./ResidentialPage.module.css";

// Icons
import {
    FaSun,
    FaUserTie,
    FaClock,
    FaHourglassHalf,
    FaDraftingCompass,
    FaAnchor,
    FaAward,
    FaCreditCard,
    FaClipboardCheck
} from "react-icons/fa";

// Image Assets
import heroBg from "../assets/residential_hero_bg.png";
import techImg from "../assets/residential_sunset_panels.png";
import sunsetImg from "../assets/residential_tech_walk.png";

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

const ResidentialPage = () => {
    return (
        <div className={styles.pageWrapper}>
            <Header />
            <Navbar />

            {/* Residential Hero */}
            <section
                className={styles.heroSection}
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${heroBg})` }}
            >
                <div className={styles.heroContainer}>
                    <h1 className={styles.heroTitle}>
                        INSTALL SOLAR SOLUTION TODAY -<br />
                        INDIA'S BEST SOLAR EPC COMPANY
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Get expert advice on solar for your home or business – book a free consultation now.
                    </p>
                    <button
                        className={styles.heroBtn}
                        onClick={() => {
                            window.location.href = "/?page_id=1039";
                        }}
                    >
                        Book Free Consultation
                    </button>
                </div>
            </section>

            {/* Highlights Grid */}
            <ScrollReveal>
                <section className={styles.highlightsSection}>
                    <div className={styles.container}>
                        <div className={styles.highlightsGrid}>
                            {/* Highlight 1 */}
                            <div className={styles.highlightCard}>
                                <div className={styles.highlightIcon}>
                                    <FaSun />
                                </div>
                                <h3 className={styles.highlightTitle}>#1 Solar Brand</h3>
                                <p className={styles.highlightDesc}>
                                    Trusted by thousands for providing clean energy solutions with unparalleled customer satisfaction.
                                </p>
                            </div>
                            {/* Highlight 2 */}
                            <div className={styles.highlightCard}>
                                <div className={styles.highlightIcon}>
                                    <FaUserTie />
                                </div>
                                <h3 className={styles.highlightTitle}>Our Expertise</h3>
                                <p className={styles.highlightDesc}>
                                    Discover our expertise in delivering top-quality solar solutions, backed by years of industry experience and expertise.
                                </p>
                            </div>
                            {/* Highlight 3 */}
                            <div className={styles.highlightCard}>
                                <div className={styles.highlightIcon}>
                                    <FaClock />
                                </div>
                                <h3 className={styles.highlightTitle}>Free Support</h3>
                                <p className={styles.highlightDesc}>
                                    Get professional, no-cost support for all your solar energy needs. Trust us for reliable assistance.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Design & Survey Section */}
            <ScrollReveal>
                <section className={styles.surveySection}>
                    <div className={styles.container}>
                        <div className={styles.surveyGrid}>
                            {/* Left Side Info */}
                            <div className={styles.surveyLeft}>
                                <h2 className={styles.surveyHeading}>
                                    Free Rooftop Survey &<br />
                                    3D Design
                                </h2>
                                <p className={styles.surveyText}>
                                    At SSB Solar Energy, we offer a free rooftop survey and 3D design service for homeowners interested in installing a solar power system. Our team will inspect your rooftop to assess its suitability for solar panel installation, and create a customised 3D design that shows you exactly how your solar panels will look and perform on your rooftop.
                                </p>
                                <p className={styles.surveyText}>
                                    This service is provided free of charge to help you make an informed decision about whether solar power is right for you. With our expert advice and guidance, you can be sure that your solar power system is designed to meet your specific needs and maximise energy production.
                                </p>
                            </div>

                            {/* Right Side Stacked Images */}
                            <div className={styles.surveyRight}>
                                <div className={styles.gridDecorator}></div>
                                <div className={styles.imageStack}>
                                    <div className={styles.techImageWrapper}>
                                        <img src={techImg} alt="Technician walking among panels" className={styles.surveyImage} />
                                    </div>
                                    <div className={styles.sunsetImgContainer}>
                                        <img src={sunsetImg} alt="Sunset background solar panels" className={styles.surveyImage} />
                                        <div className={styles.badgeOrange}>
                                            <span className={styles.badgeNumber}>
                                                <AnimatedCounter end={10} suffix=" +" />
                                            </span>
                                            <span className={styles.badgeText}>Years of service</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Why Choose Us Grid Section */}
            <ScrollReveal>
                <section className={styles.whyChooseSection}>
                    <div className={styles.container}>
                        <div className={styles.whyHeader}>
                            <span className={styles.whySubtitle}>Why choose us?</span>
                            <h2 className={styles.whyTitle}>BENEFITS OF GOING SOLAR WITH SSB SOLAR ENERGY</h2>
                            <p className={styles.whyIntro}>
                                Our company is dedicated to providing exceptional services, aimed at bringing solar power to homes across the entire country.
                            </p>
                        </div>

                        <div className={styles.benefitsGrid}>
                            {/* Benefit 1 */}
                            <div className={styles.benefitCard}>
                                <div className={styles.benefitIcon}>
                                    <FaHourglassHalf />
                                </div>
                                <h3 className={styles.benefitTitle}>Free 8 Year Chemical Cleaning</h3>
                                <p className={styles.benefitDesc}>
                                    We provide a 7-year free quarterly chemical cleaning service for your solar panels to remove dirt and debris that can accumulate over time, ensuring optimal energy production at no extra cost to you.
                                </p>
                            </div>
                            {/* Benefit 2 */}
                            <div className={styles.benefitCard}>
                                <div className={styles.benefitIcon}>
                                    <FaDraftingCompass />
                                </div>
                                <h3 className={styles.benefitTitle}>7.5 Inch HDGI Structure</h3>
                                <p className={styles.benefitDesc}>
                                    We use HDGI (hot-dip galvanised iron) structures to securely fasten your solar panels to your rooftop. It can survive a wind pressure of 180KM/Hr and comes with lifetime rust free warranty.
                                </p>
                            </div>
                            {/* Benefit 3 */}
                            <div className={styles.benefitCard}>
                                <div className={styles.benefitIcon}>
                                    <FaAnchor />
                                </div>
                                <h3 className={styles.benefitTitle}>Chemical Anchoring</h3>
                                <p className={styles.benefitDesc}>
                                    Chemical anchoring is a technique for fastening to concrete. We use Hilti Chemical which ensures lifetime seepage proof rooftop providing a stable foundation that can withstand even the most extreme weather conditions.
                                </p>
                            </div>
                            {/* Benefit 4 */}
                            <div className={styles.benefitCard}>
                                <div className={styles.benefitIcon}>
                                    <FaAward />
                                </div>
                                <h3 className={styles.benefitTitle}>Subsidy On Mono-crystalline Solar Panels</h3>
                                <p className={styles.benefitDesc}>
                                    By the government's initiative of Make in India, it is now possible to manufacture or assemble Mono-crystalline Solar Panel in India which has made us provide subsidy on Mono-crystalline panels which saves space of your rooftop.
                                </p>
                            </div>
                            {/* Benefit 5 */}
                            <div className={styles.benefitCard}>
                                <div className={styles.benefitIcon}>
                                    <FaCreditCard />
                                </div>
                                <h3 className={styles.benefitTitle}>Easy EMI option</h3>
                                <p className={styles.benefitDesc}>
                                    We offer easy EMI option to make your decision of going solar hassle free and without worrying about the cost of going solar. We help you finance your solar plant offering easy instalment from 6 months to 60 months.
                                </p>
                            </div>
                            {/* Benefit 6 */}
                            <div className={styles.benefitCard}>
                                <div className={styles.benefitIcon}>
                                    <FaClipboardCheck />
                                </div>
                                <h3 className={styles.benefitTitle}>Quarterly Rooftop inspection</h3>
                                <p className={styles.benefitDesc}>
                                    Our team of experts conducts a thorough inspection of your rooftop every 3 months to determine its efficiency. This helps ensure the maximum energy production without efficiency loss with time.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Residential achievements stats banner */}
            <ScrollReveal>
                <ResidentialStats />
            </ScrollReveal>

            {/* Reused Footer from Home */}
            <Footer />

            <WhatsAppButton />
        </div>
    );
};

export default ResidentialPage;
