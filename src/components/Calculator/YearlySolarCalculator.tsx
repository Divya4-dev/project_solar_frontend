import React, { useState } from 'react';
import styles from './YearlySolarCalculator.module.css';
import { FaSun, FaBolt, FaRupeeSign, FaLeaf } from 'react-icons/fa';

const YearlySolarCalculator: React.FC = () => {
    const [systemCapacity, setSystemCapacity] = useState<number | string>(5); // kW
    const [sunlightHours, setSunlightHours] = useState<number | string>(5); // hours/day
    const [electricityTariff, setElectricityTariff] = useState<number | string>(8); // ₹/unit

    const [annualGeneration, setAnnualGeneration] = useState<number | null>(null);
    const [annualSavings, setAnnualSavings] = useState<number | null>(null);
    const [co2Saved, setCo2Saved] = useState<number | null>(null);
    const [paybackYears, setPaybackYears] = useState<number | null>(null);

    const handleCalculate = (e?: React.FormEvent) => {
        if (e) e.preventDefault();

        const capacity = Number(systemCapacity);
        const hours = Number(sunlightHours);
        const tariff = Number(electricityTariff);

        if (isNaN(capacity) || capacity <= 0 || isNaN(hours) || hours <= 0 || isNaN(tariff) || tariff <= 0) {
            alert("Please enter valid positive numbers for system capacity, sunlight hours, and tariff.");
            return;
        }

        // Calculation formulas:
        // Daily Generation (kWh) = Capacity (kW) * Daily Sunlight Hours * 0.8 (Performance Ratio)
        const dailyUnits = capacity * hours * 0.8;
        const yearlyUnits = Math.round(dailyUnits * 365);
        const yearlySavingsAmount = Math.round(yearlyUnits * tariff);

        // CO2 reduction: approx 0.82 kg CO2 saved per kWh generated
        const co2Tons = Math.round((yearlyUnits * 0.82) / 1000 * 10) / 10;

        // Estimated system cost: ~₹50,000 per kW
        const estimatedCost = capacity * 50000;
        const payback = Math.round((estimatedCost / yearlySavingsAmount) * 10) / 10;

        setAnnualGeneration(yearlyUnits);
        setAnnualSavings(yearlySavingsAmount);
        setCo2Saved(co2Tons);
        setPaybackYears(payback);
    };

    React.useEffect(() => {
        handleCalculate();
    }, []);

    const formatCurrency = (val: number | null) => {
        if (val === null) return "₹0";
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(val);
    };

    return (
        <div className={styles.cardContainer}>
            <div className={styles.headerTitle}>
                <FaSun style={{ color: '#70a401' }} />
                <span>Yearly Solar Generation & Savings Calculator</span>
            </div>
            <p className={styles.headerSubtitle}>
                Estimate your annual electricity generation (units), yearly utility bill savings, environmental impact, and payback period.
            </p>

            <div className={styles.calculatorGrid}>
                <form onSubmit={handleCalculate} className={styles.formSection}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>
                            <span>System Capacity</span>
                            <span className={styles.unitTag}>kW</span>
                        </label>
                        <div className={styles.inputWrapper}>
                            <FaSun className={styles.inputIcon} />
                            <input
                                type="number"
                                step="0.5"
                                className={styles.inputField}
                                value={systemCapacity}
                                onChange={(e) => setSystemCapacity(e.target.value)}
                                placeholder="e.g. 5"
                                required
                                min="1"
                            />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>
                            <span>Average Daily Sunlight</span>
                            <span className={styles.unitTag}>Hours/day</span>
                        </label>
                        <div className={styles.inputWrapper}>
                            <FaBolt className={styles.inputIcon} />
                            <input
                                type="number"
                                step="0.1"
                                className={styles.inputField}
                                value={sunlightHours}
                                onChange={(e) => setSunlightHours(e.target.value)}
                                placeholder="e.g. 5.0"
                                required
                                min="1"
                                max="12"
                            />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>
                            <span>Electricity Rate</span>
                            <span className={styles.unitTag}>₹ / kWh Unit</span>
                        </label>
                        <div className={styles.inputWrapper}>
                            <FaRupeeSign className={styles.inputIcon} />
                            <input
                                type="number"
                                step="0.5"
                                className={styles.inputField}
                                value={electricityTariff}
                                onChange={(e) => setElectricityTariff(e.target.value)}
                                placeholder="e.g. 8"
                                required
                                min="1"
                            />
                        </div>
                    </div>

                    <button type="submit" className={styles.calculateBtn}>
                        <span>Calculate Savings</span>
                    </button>
                </form>

                <div className={styles.resultSection}>
                    <div className={styles.highlightMetric}>
                        <div className={styles.highlightMetricLabel}>Est. Yearly Savings</div>
                        <div className={styles.highlightMetricValue}>
                            {formatCurrency(annualSavings)}
                        </div>
                    </div>

                    <div className={styles.metricsGrid}>
                        <div className={styles.metricCard}>
                            <span className={styles.metricTitle}>Yearly Generation</span>
                            <span className={styles.metricValue}>
                                {annualGeneration !== null ? `${annualGeneration.toLocaleString()} kWh` : '0 kWh'}
                            </span>
                        </div>

                        <div className={styles.metricCard}>
                            <span className={styles.metricTitle}>Payback Period</span>
                            <span className={styles.metricValue}>
                                {paybackYears !== null ? `~${paybackYears} Years` : '-'}
                            </span>
                        </div>

                        <div className={styles.metricCard} style={{ gridColumn: 'span 2' }}>
                            <span className={styles.metricTitle} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <FaLeaf style={{ color: '#70a401' }} /> CO2 Reduction Impact
                            </span>
                            <span className={styles.metricValue} style={{ color: '#70a401' }}>
                                {co2Saved !== null ? `${co2Saved} Tons / Year` : '0 Tons'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YearlySolarCalculator;
