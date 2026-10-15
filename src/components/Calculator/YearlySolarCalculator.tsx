import React, { useState } from 'react';
import styles from './YearlySolarCalculator.module.css';
import { FaInfoCircle, FaArrowRight, FaSun, FaCheckCircle, FaBolt } from 'react-icons/fa';

interface CalculationResults {
    capacity: number;       // kW
    area: number;           // sq. ft.
    yearlyUnits: number;    // kWh
    yearlySavings: number;  // ₹
    tariff: number;         // ₹/unit
}

const YearlySolarCalculator: React.FC = () => {
    // Left side: User Inputs
    // 1. Monthly Electricity Bill (min: 100, max: 100000) - default 24500 to match reference demo
    const [monthlyBill, setMonthlyBill] = useState<number | string>(24500);

    // 2. Electricity Rate (Tariff) - kept as currently implemented, default 7.5
    const [electricityTariff, setElectricityTariff] = useState<number | string>(7.5);

    // 3. Fixed Calculator Assumptions (non-editable by users)
    const DAILY_GEN_PER_KW = 4.2;   // ~4.2 kWh per kW of installed capacity per day
    const ROOF_AREA_PER_KW = 90;    // ~90 sq. ft. per kW of installed solar capacity
    const DAYS_PER_MONTH = 30;
    const DAYS_PER_YEAR = 365;

    // Calculation states
    const [hasCalculated, setHasCalculated] = useState<boolean>(false);
    const [results, setResults] = useState<CalculationResults | null>(null);
    const [validationError, setValidationError] = useState<string>('');

    // Handle calculation when user clicks "Calculate Savings"
    const handleCalculate = (e?: React.FormEvent) => {
        if (e) e.preventDefault();

        const bill = Number(monthlyBill);
        const tariff = Number(electricityTariff);

        if (isNaN(bill) || bill < 100 || bill > 100000) {
            setValidationError('Monthly electricity bill amount must be between ₹100 and ₹1,00,000.');
            return;
        }

        if (isNaN(tariff) || tariff <= 0) {
            setValidationError('Please enter a valid electricity rate.');
            return;
        }

        setValidationError('');

        // Exact Formulas matching reference calculation:
        // Monthly Units = Monthly Bill / Tariff Rate
        // Daily Units needed = Monthly Units / 30 days
        // Required Solar Capacity (kW) = Daily Units / 4.2 kWh per kW per day
        const rawCapacity = (bill / tariff) / DAYS_PER_MONTH / DAILY_GEN_PER_KW;
        const capacity = Math.round(rawCapacity * 10) / 10; // Round to 1 decimal place

        // Estimated Shadow-Free Rooftop Area (sq. ft.) = Capacity * 90 sq. ft.
        const area = Math.round(capacity * ROOF_AREA_PER_KW);

        // Annual Energy Generation (kWh) = Capacity * 4.2 * 365
        const yearlyUnits = Math.round(capacity * DAILY_GEN_PER_KW * DAYS_PER_YEAR);

        // Estimated Yearly Savings (₹) = Annual Units * Tariff Rate
        const yearlySavings = Math.round(yearlyUnits * tariff);

        setResults({
            capacity,
            area,
            yearlyUnits,
            yearlySavings,
            tariff
        });
        setHasCalculated(true);
    };

    // Free-entry input change handler
    const handleBillInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setMonthlyBill(val);
        if (validationError) setValidationError('');
    };

    // Range slider change handler
    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value);
        setMonthlyBill(val);
        if (validationError) setValidationError('');
    };

    // Format currency into Indian Rupee locale string
    const formatNumber = (num: number) => {
        return new Intl.NumberFormat('en-IN').format(num);
    };

    // Calculate percentage fill for the custom green slider track
    const numericBill = Number(monthlyBill) || 0;
    const clampedBill = Math.min(Math.max(numericBill, 100), 100000);
    const sliderPercent = ((clampedBill - 100) / (100000 - 100)) * 100;

    // Navigate to Quote page with selected capacity
    const handleAskQuotation = () => {
        const capacityQuery = results ? `&capacity=${results.capacity}` : '';
        const billQuery = numericBill > 0 ? `&bill=${numericBill}` : '';
        window.location.href = `/?page_id=1039${capacityQuery}${billQuery}`;
    };

    return (
        <div className={styles.cardContainer}>
            {/* Header with Icon and Title */}
            <div className={styles.cardHeader}>
                <div className={styles.iconBadge}>
                    <span role="img" aria-label="calculator" className={styles.calculatorEmoji}>🧮</span>
                </div>
                <div>
                    <h2 className={styles.mainTitle}>
                        Solar Capacity & Savings Estimator
                    </h2>
                    <p className={styles.subtitle}>
                        Estimate your recommended solar plant capacity and annual savings based on your monthly electricity bill.
                    </p>
                </div>
            </div>

            {/* Main Two-Part Grid: Left Side and Right Side */}
            <div className={styles.calculatorGrid}>
                {/* ================= LEFT SIDE ================= */}
                <div className={styles.leftSide}>
                    <form onSubmit={handleCalculate} className={styles.formContainer}>
                        {/* 1. Monthly Electricity Bill Amount */}
                        <div className={styles.inputSection}>
                            <div className={styles.billHeaderRow}>
                                <label htmlFor="monthlyBillInput" className={styles.fieldLabel}>
                                    Monthly Electricity Bill Amount
                                </label>
                                <span className={styles.billDisplayAmount}>
                                    ₹{formatNumber(clampedBill)}
                                </span>
                            </div>

                            {/* Free-entry input field */}
                            <div className={styles.freeEntryWrapper}>
                                <div className={styles.currencySymbol}>₹</div>
                                <input
                                    id="monthlyBillInput"
                                    type="number"
                                    min="100"
                                    max="100000"
                                    step="100"
                                    value={monthlyBill}
                                    onChange={handleBillInputChange}
                                    className={styles.freeEntryInput}
                                    placeholder="Enter bill amount (₹100 - ₹1,00,000)"
                                    required
                                />
                                <span className={styles.entryUnit}>/ Month</span>
                            </div>

                            {/* Slider control */}
                            <div className={styles.sliderContainer}>
                                <input
                                    type="range"
                                    min="100"
                                    max="100000"
                                    step="100"
                                    value={clampedBill}
                                    onChange={handleSliderChange}
                                    className={styles.rangeSlider}
                                    style={{
                                        background: `linear-gradient(to right, #10b981 ${sliderPercent}%, #e2e8f0 ${sliderPercent}%)`
                                    }}
                                />
                                <div className={styles.sliderTicks}>
                                    <span>₹100</span>
                                    <span>₹50,000</span>
                                    <span>₹1,00,000</span>
                                </div>
                            </div>
                        </div>

                        {/* 2. Electricity Rate (Tariff) - Kept as currently implemented */}
                        <div className={styles.tariffSection}>
                            <div className={styles.tariffRow}>
                                <div className={styles.tariffLabelWrapper}>
                                    <FaInfoCircle className={styles.infoIcon} />
                                    <label htmlFor="electricityTariffInput" className={styles.tariffLabel}>
                                        Electricity Rate (DISCOM Slab Tariff Rate):
                                    </label>
                                </div>
                                <div className={styles.tariffInputWrapper}>
                                    <span className={styles.rupeeTag}>₹</span>
                                    <input
                                        id="electricityTariffInput"
                                        type="number"
                                        step="0.1"
                                        min="1"
                                        value={electricityTariff}
                                        onChange={(e) => setElectricityTariff(e.target.value)}
                                        className={styles.tariffInput}
                                        required
                                        placeholder="7.5"
                                    />
                                    <span className={styles.tariffUnit}>/ Unit</span>
                                </div>
                            </div>
                            <p className={styles.tariffDisclaimer}>
                                *Tariff rate can be adjusted based on the average DISCOM slab applicable in your region.
                            </p>
                        </div>

                        {/* 3. Calculator Assumptions (Fixed, uneditable) */}
                        <div className={styles.assumptionsCard}>
                            <div className={styles.assumptionsHeader}>
                                <span className={styles.assumptionTitle}>
                                    Calculation Assumptions:
                                </span>
                            </div>
                            <ul className={styles.assumptionsList}>
                                <li>
                                    <strong>Average Daily Solar Generation:</strong> ~4.2 kWh per kW per day
                                </li>
                                <li>
                                    <strong>Required Shadow-Free Rooftop Area:</strong> ~90 sq. ft. per kW
                                </li>
                                <li>
                                    <strong>Estimated Annual Energy Generation:</strong> ~{formatNumber(Math.round(DAILY_GEN_PER_KW * DAYS_PER_YEAR))} kWh per kW
                                </li>
                            </ul>
                            {/* <div className={styles.fixedNotice}>
                                <FaCheckCircle className={styles.fixedNoticeIcon} />
                                <span>Both assumption values are fixed and cannot be edited.</span>
                            </div> */}
                        </div>

                        {/* Validation Error Banner */}
                        {validationError && (
                            <div className={styles.errorBanner}>
                                {validationError}
                            </div>
                        )}

                        {/* Calculate Savings Button */}
                        <button type="submit" className={styles.calculateSavingsBtn}>
                            <FaBolt className={styles.btnIcon} />
                            <span>Calculate Savings</span>
                        </button>
                    </form>
                </div>

                {/* ================= RIGHT SIDE ================= */}
                <div className={styles.rightSide}>
                    <div className={styles.recommendationContainer}>
                        <div className={styles.recommendationHeader}>
                            <span>Recommended Solar Capacity</span>
                            <span className={styles.recHeaderEn}>(INDICATIVE RECOMMENDATION)</span>
                        </div>

                        {/* Display results only if user has clicked "Calculate Savings" */}
                        {hasCalculated && results ? (
                            <div className={styles.resultsContent}>
                                {/* Two Metric Cards: Capacity & Rooftop Area */}
                                <div className={styles.metricsTwoCol}>
                                    {/* 1. Estimated Solar Plant Capacity */}
                                    <div className={styles.metricCard}>
                                        <div className={styles.metricCardTitle}>Estimated Solar Plant Capacity</div>
                                        <div className={styles.capacityHighlight}>
                                            {results.capacity} <span className={styles.unitText}>kW</span>
                                        </div>
                                        <div className={styles.metricCardSubtitle}>On-Grid / Hybrid System</div>
                                    </div>

                                    {/* 2. Estimated Shadow-Free Rooftop Area */}
                                    <div className={styles.metricCard}>
                                        <div className={styles.metricCardTitle}>Estimated Shadow-Free Rooftop Area</div>
                                        <div className={styles.areaHighlight}>
                                            ~{formatNumber(results.area)}
                                        </div>
                                        <div className={styles.metricCardSubtitle}>Sq. Ft. (Shadow-Free)</div>
                                    </div>
                                </div>

                                {/* 3. Estimated Yearly Savings Card */}
                                <div className={styles.savingsCard}>
                                    <div className={styles.savingsTextGroup}>
                                        <div className={styles.savingsLabel}>
                                            Estimated Yearly Savings:
                                        </div>
                                        <div className={styles.savingsFormula}>
                                            (Calculation: {formatNumber(results.yearlyUnits)} units/year × ₹{results.tariff} per unit)
                                        </div>
                                    </div>
                                    <div className={styles.savingsValue}>
                                        ₹{formatNumber(results.yearlySavings)}
                                    </div>
                                </div>

                                {/* 4. Ask for a Quotation Button */}
                                <button
                                    type="button"
                                    onClick={handleAskQuotation}
                                    className={styles.askQuoteBtn}
                                >
                                    <span>Ask for a Quotation ({results.capacity} kW)</span>
                                    <FaArrowRight className={styles.arrowIcon} />
                                </button>

                                {/* Disclaimer Note */}
                                <div className={styles.disclaimerText}>
                                    <span className={styles.disclaimerIcon}>ℹ️</span>
                                    <span>
                                        <strong>Important Disclaimer:</strong> Estimates are indicative and calculated based on regional average solar irradiance. Exact generation, savings, and payback depend on roof orientation, shading, grid tariff slabs, and specific system specifications. Contact our engineering team for an exact proposal.
                                    </span>
                                </div>
                            </div>
                        ) : (
                            /* State when results have NOT been calculated yet */
                            <div className={styles.placeholderState}>
                                <div className={styles.placeholderIconWrapper}>
                                    <FaSun className={styles.placeholderSunIcon} />
                                </div>
                                <h3 className={styles.placeholderHeading}>
                                    Estimate Solar Capacity & Savings
                                </h3>
                                <p className={styles.placeholderText}>
                                    Enter your monthly electricity bill amount on the left and click <strong>"Calculate Savings"</strong> to view your recommended solar capacity, required rooftop area, and annual savings.
                                </p>
                                <div className={styles.placeholderDashedBox}>
                                    <div className={styles.previewItem}>
                                        <span className={styles.previewDot}>•</span>
                                        <span>Estimated Solar Plant Capacity (kW)</span>
                                    </div>
                                    <div className={styles.previewItem}>
                                        <span className={styles.previewDot}>•</span>
                                        <span>Estimated Shadow-Free Rooftop Area (Sq. Ft.)</span>
                                    </div>
                                    <div className={styles.previewItem}>
                                        <span className={styles.previewDot}>•</span>
                                        <span>Estimated Yearly Savings (₹)</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YearlySolarCalculator;
