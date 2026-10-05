import { useState } from 'react';
import styles from './NavBar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

import logoImg from '../../assets/logo.png';

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const hasQueryParam = window.location.search.length > 0;
    const isAboutPage = window.location.search.includes('page_id=628');
    const isServicesPage = window.location.search.includes('page_id=13');
    const isResidentialPage = window.location.search.includes('page_id=1242');
    const isCommercialPage = window.location.search.includes('page_id=1243');
    const isContactPage = window.location.search.includes('page_id=16');

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                {/* Logo Section */}
                <div className={styles.logoSection}>
                    <img src={logoImg} alt="SBB Solar Logo" className={styles.logoImg} />
                    <div className={styles.logoTextContainer}>
                        <span className={styles.logoSsb}>SBB</span>
                        <span className={styles.logoSolar}>SOLAR SERVICE</span>
                    </div>
                </div>

                {/* Desktop Navigation Links */}
                <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.navLinksActive : ''}`}>
                    <li>
                        <a
                            href="/"
                            className={`${styles.navLink} ${!hasQueryParam ? styles.activeLink : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            HOME
                        </a>
                    </li>
                    <li>
                        <a
                            href="/?page_id=628"
                            className={`${styles.navLink} ${isAboutPage ? styles.activeLink : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a
                            href="/?page_id=13"
                            className={`${styles.navLink} ${isServicesPage ? styles.activeLink : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            SERVICES
                        </a>
                    </li>
                    <li>
                        <a
                            href="/?page_id=1242"
                            className={`${styles.navLink} ${isResidentialPage ? styles.activeLink : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            RESIDENTIAL
                        </a>
                    </li>
                    <li>
                        <a
                            href="/?page_id=1243"
                            className={`${styles.navLink} ${isCommercialPage ? styles.activeLink : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            COMMERCIAL
                        </a>
                    </li>
                    <li>
                        <a
                            href="/?page_id=16"
                            className={`${styles.navLink} ${isContactPage ? styles.activeLink : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            CONTACT
                        </a>
                    </li>
                    <li className={styles.mobileOnlyButton}>
                        <a href="/?page_id=1039" className={styles.getQuoteBtnMobile} onClick={() => setMobileMenuOpen(false)}>
                            GET QUOTE
                        </a>
                    </li>
                </ul>

                {/* Right Button */}
                <div className={styles.buttonContainer}>
                    <a href="/?page_id=1039" className={styles.getQuoteBtn}>
                        GET QUOTE
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button className={styles.mobileMenuToggle} onClick={toggleMobileMenu} aria-label="Toggle navigation menu">
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
