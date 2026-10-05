import styles from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import logoImg from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className={styles.footer} id="footer">
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Column 1: Logo & Text */}
                    <div className={styles.col1}>
                        <div className={styles.logoContainer}>
                            <img src={logoImg} alt="SBB Solar Logo" style={{ height: '48px', objectFit: 'contain' }} />
                            <div className={styles.logoTextWrapper}>
                                <span className={styles.logoTitle}>SBB</span>
                                <span className={styles.logoSubtitle}>SOLAR SERVICE</span>
                            </div>
                        </div>
                        <p className={styles.aboutText}>
                            SBB Solar Service has one of The Best Solar Panel Installer in India.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialIcon} aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                            <a href="https://www.instagram.com/sbb_solar?stkn=NXBkb3R3dGdmeXFv" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
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
                                <span>Ramleela Square Vidisha (M.P.)</span>
                            </li>
                            <li className={styles.contactItem}>
                                <FaEnvelope className={styles.contactIcon} />
                                <a href="mailto:sbbsolarservice@gmail.com">sbbsolarservice@gmail.com</a>
                            </li>
                            <li className={styles.contactItem}>
                                <FaPhoneAlt className={styles.contactIcon} />
                                <a href="tel:+918889619863">+918889619863</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className={styles.bottomBar}>
                <div className={styles.container}>
                    <p className={styles.copyright}>
                        Copyright © 2023 SBB Solar Service, All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
