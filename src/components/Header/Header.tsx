import styles from './Header.module.css';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Header = () => {
    return (
        <div className={styles.topbar}>
            <div className={styles.container}>
                <div className={styles.contactInfo}>
                    <a href="tel:+918889619863" className={styles.infoLink}>
                        <FaPhoneAlt className={styles.icon} />
                        <span>+91 8889619863</span>
                    </a>
                    <a href="mailto:sbbsolarservice@gmail.com" className={styles.infoLink}>
                        <FaEnvelope className={styles.icon} />
                        <span>sbbsolarservice@gmail.com</span>
                    </a>
                </div>
                <div className={styles.socialLinks}>
                    <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com/sbb_solar?stkn=NXBkb3R3dGdmeXFv" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
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
