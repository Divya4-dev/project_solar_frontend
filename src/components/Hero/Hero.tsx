import React, { useState } from 'react';
import styles from './Hero.module.css';
import heroBg from '../../assets/hero.png';
import { FaGraduationCap } from 'react-icons/fa';

const Hero = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        city: '',
        electricityBill: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const payload = {
            name: formData.fullName,
            mobile_no: formData.phoneNumber,
            email: formData.email,
            city: formData.city,
            electricity_bill: Number(formData.electricityBill)
        };

        try {
            const response = await fetch('http://localhost:8000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setFormData({
                    fullName: '',
                    email: '',
                    phoneNumber: '',
                    city: '',
                    electricityBill: ''
                });
            } else {
                const errorData = await response.json().catch(() => ({}));
                console.error(`Submission failed: ${errorData.message || response.statusText}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <section className={styles.hero} style={{ backgroundImage: `url(${heroBg})` }} id="home">
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                {/* Left Side Content */}
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        WE ARE SUSTAINABLE <br />
                        ENERGY SOLUTIONS <br />
                        <span className={styles.boldTitle}>WE ARE SBB SOLAR SERVICE</span>
                    </h1>
                    <p className={styles.description}>
                        We are a leading solar panel selling company committed to helping our customers harness
                        the power of the sun to reduce their carbon footprint and save on energy costs.
                    </p>
                    <a href="/?page_id=1039" className={styles.bookBtn}>
                        <FaGraduationCap className={styles.bookIcon} />
                        <span>BOOK NOW</span>
                    </a>
                </div>

                {/* Right Side Consultation Form */}
                <div className={styles.formContainer} id="quote">
                    <div className={styles.formHeader}>
                        Get A Free Solar Consultation Now!
                    </div>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Full Name *</label>
                            <input
                                type="text"
                                name="fullName"
                                required
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email (Optional)"
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Phone Number *</label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                required
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Enter Your City *</label>
                            <input
                                type="text"
                                name="city"
                                required
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="City"
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Electricity Bill *</label>
                            <input
                                type="text"
                                name="electricityBill"
                                required
                                value={formData.electricityBill}
                                onChange={handleChange}
                                placeholder="Average Monthly Electricity Bill"
                                className={styles.input}
                            />
                        </div>
                        <button type="submit" className={styles.submitBtn}>
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Hero;
