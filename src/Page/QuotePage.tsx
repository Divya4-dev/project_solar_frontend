import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";
import styles from "./QuotePage.module.css";

// Image Assets
import houseImg from "../assets/quote_house_solar.png";

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    city: string;
    electricityBill: string;
}

const QuotePage = () => {
    // Typewriter state
    const text = "Get A Quote";
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer: any;

        const handleType = () => {
            setDisplayText((prev) => {
                if (!isDeleting) {
                    // Typing
                    if (prev.length < text.length) {
                        return text.slice(0, prev.length + 1);
                    } else {
                        // Fully typed, pause then start deleting
                        setIsDeleting(true);
                        return prev;
                    }
                } else {
                    // Deleting
                    if (prev.length > 0) {
                        return text.slice(0, prev.length - 1);
                    } else {
                        // Fully deleted, pause then start typing
                        setIsDeleting(false);
                        return prev;
                    }
                }
            });
        };

        // Determine speed and delay
        let delay = isDeleting ? 50 : 120;
        if (!isDeleting && displayText === text) {
            delay = 1000; // Pause for 1 second when fully typed
        } else if (isDeleting && displayText === "") {
            delay = 0; // Immediately start entering again
        }

        timer = setTimeout(handleType, delay);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting]);

    // Form state
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        electricityBill: "Less than ₹1500" // default selection
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRadioChange = (bill: string) => {
        setFormData(prev => ({
            ...prev,
            electricityBill: bill
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Inquiry sent! Thank you, ${formData.fullName}. Current monthly bill range is ${formData.electricityBill}.`);
        setFormData({
            fullName: "",
            email: "",
            phone: "",
            city: "",
            electricityBill: "Less than ₹1500"
        });
    };

    const billOptions = [
        "Less than ₹1500",
        "₹1500-₹2500",
        "₹2500-₹4000",
        "₹4000-₹8000"
    ];

    return (
        <div className={styles.pageWrapper}>
            <Header />
            <Navbar />

            {/* Blue Banner with looping Typist heading */}
            <section className={styles.bannerSection}>
                <div className={styles.container}>
                    <h1 className={styles.bannerHeading}>
                        {displayText}
                        <span className={styles.cursor}>|</span>
                    </h1>
                </div>
            </section>

            {/* Split Form / Image grid */}
            <section className={styles.formSection}>
                <div className={styles.container}>
                    <div className={styles.formGrid}>
                        {/* Left Column: Lime Green Card */}
                        <div className={styles.formCard}>
                            <form onSubmit={handleSubmit} className={styles.quoteForm}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Full Name *</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        required
                                        className={styles.inputField}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Email (Optional)</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={styles.inputField}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Phone Number *</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className={styles.inputField}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>City *</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        required
                                        className={styles.inputField}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Monthly Electricity Bill *</label>
                                    <div className={styles.radioGrid}>
                                        {billOptions.map((opt, idx) => {
                                            const isSelected = formData.electricityBill === opt;
                                            return (
                                                <div
                                                    key={idx}
                                                    className={`${styles.radioWrapper} ${isSelected ? styles.radioSelected : ''}`}
                                                    onClick={() => handleRadioChange(opt)}
                                                >
                                                    <span className={styles.radioDot}></span>
                                                    <span className={styles.radioLabelText}>{opt}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <button type="submit" className={styles.sendBtn}>
                                    Send
                                </button>
                            </form>
                        </div>

                        {/* Right Column: House Solar Image */}
                        <div className={styles.imageCard}>
                            <img src={houseImg} alt="Modern residential house with rooftop solar installer grid" className={styles.houseImage} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Reused Footer */}
            <Footer />

            <WhatsAppButton />
        </div>
    );
};

export default QuotePage;
