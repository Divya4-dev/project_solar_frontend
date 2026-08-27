import styles from './Testimonials.module.css';
import { FaQuoteRight } from 'react-icons/fa';

const Testimonials = () => {
    const reviews = [
        {
            name: "Gangotri Soni",
            text: "Superb solar panel installation! Saved bucks on bills. Excellent service, highly recommend this company!"
        },
        {
            name: "Surya Pratap Singh",
            text: "Top-notch solar setup! Cut electricity costs. Great team, hassle-free process, very satisfied."
        },
        {
            name: "Ashish Tiwari",
            text: "Amazing solar service! Reduced my carbon footprint. Professional crew, fantastic results, thrilled!"
        }
    ];

    return (
        <section className={styles.testimonialSection} id="testimonials">
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <span className={styles.subtitle}>Our Clients Testimonial</span>
                        <h2 className={styles.title}>What our clients say</h2>
                    </div>
                    <div className={styles.headerRight}>
                        <p className={styles.headerDesc}>
                            Our energy bills plummeted, and the solar system seamlessly integrates into our daily lives.
                        </p>
                    </div>
                </div>

                <div className={styles.cardsGrid}>
                    {reviews.map((review, index) => (
                        <div key={index} className={styles.reviewCard}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.clientName}>{review.name}</h3>
                                <div className={styles.quoteCircle}>
                                    <FaQuoteRight />
                                </div>
                            </div>
                            <p className={styles.reviewText}>"{review.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
