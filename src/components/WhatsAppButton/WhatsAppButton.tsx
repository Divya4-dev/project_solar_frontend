import styles from './WhatsAppButton.module.css';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/918889619863"
            className={styles.whatsappFloat}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
        >
            <FaWhatsapp className={styles.whatsappIcon} />
        </a>
    );
};

export default WhatsAppButton;
