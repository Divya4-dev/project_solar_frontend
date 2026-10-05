import { useState } from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";
import styles from "./ContactPage.module.css";

// Icons
import { FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

const ContactPage = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Thank you for reaching out, ${formData.name}! We will get back to you shortly.`);
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        });
    };

    return (
        <div className={styles.pageWrapper}>
            <Header />
            <Navbar />

            {/* Header / Intro section */}
            <section className={styles.contactIntro}>
                <div className={styles.container}>
                    <h1 className={styles.introHeading}>Get In Touch</h1>
                    <p className={styles.introTex}>
                        We're thrilled to hear from you! Whether you have a question about our services, need assistance, or just want to say hello, we're here and eager to help. Please don't hesitate to reach out to us via fill the following form.
                    </p>
                </div>
            </section>

            {/* Cards Info Section */}
            <section className={styles.infoSection}>
                <div className={styles.container}>
                    <div className={styles.infoGrid}>
                        {/* Call Card */}
                        <div className={styles.infoCard}>
                            <div className={styles.iconCircle}>
                                <FaPhoneAlt className={styles.infoIcon} />
                            </div>
                            <h3 className={styles.cardTitle}>Call Us</h3>
                            <p className={styles.cardContent}>+91 8889619863</p>
                        </div>

                        {/* Email Card */}
                        <div className={styles.infoCard}>
                            <div className={styles.iconCircle}>
                                <FaEnvelope className={styles.infoIcon} />
                            </div>
                            <h3 className={styles.cardTitle}>Email Us</h3>
                            <p className={styles.cardContent}>sbbsolarservice@gmail.com</p>
                        </div>

                        {/* Location Card */}
                        <div className={styles.infoCard}>
                            <div className={styles.iconCircle}>
                                <FaPaperPlane className={styles.infoIcon} />
                            </div>
                            <h3 className={styles.cardTitle}>Our Location</h3>
                            <p className={styles.cardContent}>
                                Ramleela Square Vidisha (M.P.)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map & Form Section */}
            <section className={styles.mapFormSection}>
                <div className={styles.container}>
                    <div className={styles.mapFormGrid}>
                        {/* Left column: Google Map */}
                        <div className={styles.mapContainer}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6496357!2d77.81057!3d23.53075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c05423e9c34a9%3A0x1bf1a97f10975848!2sShri%20Banke%20Bihari%20Solar%20Service!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: "450px" }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="SBB Solar Service Location"
                            ></iframe>
                        </div>

                        {/* Right column: Dynamic form */}
                        <div className={styles.formContainer}>
                            <h2 className={styles.formHeading}>Fill The Following Form :</h2>
                            <form onSubmit={handleSubmit} className={styles.contactForm}>
                                <div className={styles.formRow}>
                                    <div className={styles.formField}>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formField}>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="E-mail"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <div className={styles.formField}>
                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder="Phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formField}>
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className={styles.textareaField}>
                                    <textarea
                                        name="message"
                                        placeholder="Your message"
                                        rows={8}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className={styles.submitBtn}>
                                    SEND
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reused Footer from Home */}
            <Footer />

            <WhatsAppButton />
        </div>
    );
};

export default ContactPage;
