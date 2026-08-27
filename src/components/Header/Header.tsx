import styles from './Header.module.css';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Header = () => {
    return (
        <div className={styles.topbar}>
            <div className={styles.container}>
                <div className={styles.contactInfo}>
                    <a href="tel:+919171767255" className={styles.infoLink}>
                        <FaPhoneAlt className={styles.icon} />
                        <span>+91 9171767255</span>
                    </a>
                    <a href="mailto:info@ssbsolarenergy.com" className={styles.infoLink}>
                        <FaEnvelope className={styles.icon} />
                        <span>info@ssbsolarenergy.com</span>
                    </a>
                </div>
                <div className={styles.socialLinks}>
                    <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                        <FaFacebookF />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                        <FaLinkedinIn />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube">
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
