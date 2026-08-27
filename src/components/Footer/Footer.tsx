import styles from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer} id="footer">
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Column 1: Logo & Text */}
                    <div className={styles.col1}>
                        <div className={styles.logoContainer}>
                            <svg className={styles.logoIcon} viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10,65 L50,15 L90,65 Z" fill="none" stroke="#ffffff" strokeWidth="8" strokeLinejoin="miter" />
                                <path d="M22,65 L50,30 L78,65 Z" fill="#8ed002" />
                                <circle cx="50" cy="52" r="6" fill="#ffffff" />
                                <rect x="42" y="65" width="16" height="8" rx="2" fill="#ffffff" />
                            </svg>
                            <div className={styles.logoTextWrapper}>
                                <span className={styles.logoTitle}>SSB</span>
                                <span className={styles.logoSubtitle}>SOLAR ENERGY</span>
                            </div>
                        </div>
                        <p className={styles.aboutText}>
                            SSB Solar Energy has one of The Best Solar Energy Panel Installer in India.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialIcon} aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                            <a href="#" className={styles.socialIcon} aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                            <a href="#" className={styles.socialIcon} aria-label="YouTube">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div className={styles.col}>
                        <h3 className={styles.footerTitle}>Services</h3>
                        <ul className={styles.list}>
                            <li><a href="#services">Residential</a></li>
                            <li><a href="#services">Commercial</a></li>
                            <li><a href="#">Solar Calculator</a></li>
                            <li><a href="#">Solar EMI Calculator</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Useful Links */}
                    <div className={styles.col}>
                        <h3 className={styles.footerTitle}>Useful Links</h3>
                        <ul className={styles.list}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Details */}
                    <div className={styles.col}>
                        <h3 className={styles.footerTitle}>Contact Details</h3>
                        <ul className={styles.contactList}>
                            <li className={styles.contactItem}>
                                <FaMapMarkerAlt className={styles.contactIcon} />
                                <span>01, Siddharth Garden Colony, Near Aura Mall, Gulmohar, Bawadiya Kalan, Bhopal (M.P.)</span>
                            </li>
                            <li className={styles.contactItem}>
                                <FaEnvelope className={styles.contactIcon} />
                                <a href="mailto:info@ssbsolarenergy.com">info@ssbsolarenergy.com</a>
                            </li>
                            <li className={styles.contactItem}>
                                <FaPhoneAlt className={styles.contactIcon} />
                                <a href="tel:+919171767255">+91 9171767255</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className={styles.bottomBar}>
                <div className={styles.container}>
                    <p className={styles.copyright}>
                        Copyright © 2023 SSB Solar Energy, All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
