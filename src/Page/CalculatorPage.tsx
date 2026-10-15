import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Navbar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton';
import EmiCalculator from '../components/Calculator/EmiCalculator';
import YearlySolarCalculator from '../components/Calculator/YearlySolarCalculator';
import styles from './CalculatorPage.module.css';
import { FaCalculator, FaSun } from 'react-icons/fa';

type SubsectionTab = 'emi' | 'yearly';

const CalculatorPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<SubsectionTab>(() => {
        const params = new URLSearchParams(window.location.search);
        return params.get('tab') === 'emi' ? 'emi' : 'yearly';
    });

    // Typewriter heading effect consistent with QuotePage
    const bannerText = "Solar Calculators";
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer: any;

        const handleType = () => {
            setDisplayText((prev) => {
                if (!isDeleting) {
                    if (prev.length < bannerText.length) {
                        return bannerText.slice(0, prev.length + 1);
                    } else {
                        setIsDeleting(true);
                        return prev;
                    }
                } else {
                    if (prev.length > 0) {
                        return bannerText.slice(0, prev.length - 1);
                    } else {
                        setIsDeleting(false);
                        return prev;
                    }
                }
            });
        };

        let delay = isDeleting ? 50 : 120;
        if (!isDeleting && displayText === bannerText) {
            delay = 1200;
        } else if (isDeleting && displayText === "") {
            delay = 100;
        }

        timer = setTimeout(handleType, delay);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting]);

    return (
        <div className={styles.pageWrapper}>
            <Header />
            <Navbar />

            {/* Banner Section with Typist heading */}
            <section className={styles.bannerSection}>
                <div className={styles.container}>
                    <h1 className={styles.bannerHeading}>
                        {displayText}
                        <span className={styles.cursor}>|</span>
                    </h1>
                    <p className={styles.bannerSubtitle}>
                        Calculate your solar financing loan EMI payments and annual solar power generation savings easily.
                    </p>
                </div>
            </section>

            {/* Calculator Subsections Section */}
            <section className={styles.calculatorContentSection}>
                <div className={styles.container}>
                    {/* Subsection Tabs */}
                    <div className={styles.tabNavigation}>
                        <button
                            className={`${styles.tabButton} ${activeTab === 'yearly' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('yearly')}
                        >
                            <FaSun className={activeTab === 'yearly' ? styles.activeTabIcon : ''} />
                            <span>Solar Calculator</span>
                        </button>

                        <button
                            className={`${styles.tabButton} ${activeTab === 'emi' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('emi')}
                        >
                            <FaCalculator className={activeTab === 'emi' ? styles.activeTabIcon : ''} />
                            <span>Solar EMI Calculator</span>
                        </button>
                    </div>

                    {/* Subsection Content */}
                    {activeTab === 'yearly' ? (
                        <YearlySolarCalculator />
                    ) : (
                        <EmiCalculator />
                    )}
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default CalculatorPage;
