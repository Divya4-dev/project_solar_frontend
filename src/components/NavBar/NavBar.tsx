import { useState } from 'react';
import styles from './NavBar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

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
                    <svg width="45" height="40" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logoIcon}>
                        {/* Rooftop with Solar panel cells */}
                        <polygon points="50,10 90,45 80,45 50,18 20,45 10,45" fill="#131e42" />

                        {/* Solar Grid inside */}
                        <polygon points="50,18 78,43 65,43 45,23" fill="#0056b3" />
                        <polygon points="42,24 62,43 49,43 35,30" fill="#007bff" />
                        <polygon points="32,32 46,43 33,43 25,36" fill="#66b2ff" />

                        {/* Leaf on the left */}
                        <path d="M22 45 C10 32 5 45 5 62 C18 62 25 55 22 45 Z" fill="#70a401" />
                        <path d="M35 48 C22 38 18 50 18 64 C30 64 35 56 35 48 Z" fill="#8ed002" />

                        {/* Ground link */}
                        <rect x="5" y="65" width="90" height="4" rx="2" fill="#131e42" />
                    </svg>
                    <div className={styles.logoTextContainer}>
                        <span className={styles.logoSsb}>SSB</span>
                        <span className={styles.logoSolar}>SOLAR ENERGY</span>
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
