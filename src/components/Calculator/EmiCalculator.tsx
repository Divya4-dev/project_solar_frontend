import React, { useState, useEffect } from 'react';
import styles from './EmiCalculator.module.css';
import { FaCalculator, FaRupeeSign, FaPercentage, FaCalendarAlt, FaSpinner, FaMinus, FaPlus } from 'react-icons/fa';

interface EmiResponse {
    monthly_payment?: number;
    emi?: number;
    result?: number;
    monthlyPayment?: number;
    total_payment?: number;
    total_interest?: number;
    message?: string;
}

const EmiCalculator: React.FC = () => {
    const [loanAmount, setLoanAmount] = useState<number | string>(200000);
    const [interestRate, setInterestRate] = useState<string>("5.25");
    const [yearsToPay, setYearsToPay] = useState<number>(5);

    const [loading, setLoading] = useState<boolean>(false);
    const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
    const [totalPayment, setTotalPayment] = useState<number | null>(null);
    const [totalInterest, setTotalInterest] = useState<number | null>(null);
    const [apiErrorNotice, setApiErrorNotice] = useState<string | null>(null);

    const computeLocalEmi = (amount: number, rate: number, years: number) => {
        const monthlyRate = rate / 12 / 100;
        const totalMonths = years * 12;
        if (monthlyRate === 0) return amount / totalMonths;

        const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1);
        return emi;
    };

    const handleCalculate = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();

        const amount = Number(loanAmount);
        const rate = parseFloat(interestRate);
        const years = Number(yearsToPay);

        if (isNaN(amount) || amount <= 0 || isNaN(rate) || rate <= 0 || isNaN(years) || years < 1 || years > 10) {
            alert("Please enter valid loan values.");
            return;
        }

        setLoading(true);
        setApiErrorNotice(null);

        const payload = {
            loan_amount: amount,
            interest_rate: rate,
            years_to_pay: years
        };

        try {
            const response = await fetch("http://127.0.0.1:8000/calculate-emi", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`API error (${response.status})`);
            }

            const data: EmiResponse = await response.json();
            const calculatedEmi = data.monthly_payment ?? data.emi ?? data.result ?? data.monthlyPayment;

            if (calculatedEmi !== undefined) {
                setMonthlyPayment(Math.round(calculatedEmi));
                const totPay = data.total_payment ?? Math.round(calculatedEmi * years * 12);
                setTotalPayment(totPay);
                setTotalInterest(data.total_interest ?? (totPay - amount));
            } else {
                throw new Error("Invalid response structure from backend API");
            }
        } catch (err: any) {
            console.warn("Backend API request failed or offline. Using standard fallback EMI calculation.", err);
            setApiErrorNotice("Note: Could not reach backend API at 127.0.0.1:8000. Calculated using standard EMI formula.");

            const localEmi = computeLocalEmi(amount, rate, years);
            const totPay = localEmi * years * 12;
            setMonthlyPayment(Math.round(localEmi));
            setTotalPayment(Math.round(totPay));
            setTotalInterest(Math.round(totPay - amount));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleCalculate();
    }, []);

    const stepInterest = (delta: number) => {
        let current = parseFloat(interestRate);
        if (isNaN(current)) current = 5.25;

        let hundredths = Math.round(current * 100);

        if (delta > 0) {
            hundredths += 1;
            if (hundredths % 10 === 6) {
                hundredths += 4;
            }
        } else {
            hundredths -= 1;
            if (hundredths % 10 === 9) {
                hundredths -= 4;
            }
        }

        let next = hundredths / 100;
        if (next < 0.05) next = 0.05;
        if (next > 30) next = 30;

        setInterestRate(next.toFixed(2));
    };

    const handleInterestBlur = () => {
        let val = parseFloat(interestRate);
        if (isNaN(val) || val <= 0) {
            setInterestRate("5.25");
            return;
        }

        let hundredths = Math.round(val * 100);
        let lastDigit = hundredths % 10;
        if (lastDigit === 6 || lastDigit === 7) {
            hundredths -= (lastDigit - 5);
        } else if (lastDigit === 8 || lastDigit === 9) {
            hundredths += (10 - lastDigit);
        }

        let snapped = hundredths / 100;
        setInterestRate(snapped.toFixed(2));
    };

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
                <FaCalculator style={{ color: '#70a401' }} />
                <span>Solar Loan EMI Calculator</span>
            </div>
            <p className={styles.headerSubtitle}>
                Calculate your monthly installment (EMI), total interest payable, and total loan payment for your solar rooftop system installation.
            </p>

            <div className={styles.calculatorGrid}>
                <form onSubmit={handleCalculate} className={styles.formSection}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>
                            <span>Loan Amount</span>
                            <span className={styles.unitTag}>₹ (INR)</span>
                        </label>
                        <div className={styles.inputWrapper}>
                            <FaRupeeSign className={styles.inputIcon} />
                            <input
                                type="number"
                                className={styles.inputField}
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(e.target.value)}
                                placeholder="e.g. 200000"
                                required
                                min="1000"
                            />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>
                            <span>Interest Rate</span>
                            <span className={styles.unitTag}>% p.a.</span>
                        </label>
                        <div className={styles.stepperContainer}>
                            <button
                                type="button"
                                className={styles.stepperBtn}
                                onClick={() => stepInterest(-1)}
                                aria-label="Decrease interest rate"
                            >
                                <FaMinus style={{ fontSize: '12px' }} />
                            </button>
                            <div className={styles.inputWrapper} style={{ flex: 1 }}>
                                <FaPercentage className={styles.inputIcon} />
                                <input
                                    type="number"
                                    step="0.01"
                                    className={styles.inputField}
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(e.target.value)}
                                    onBlur={handleInterestBlur}
                                    placeholder="5.25"
                                    required
                                    min="0.05"
                                    max="30"
                                />
                            </div>
                            <button
                                type="button"
                                className={styles.stepperBtn}
                                onClick={() => stepInterest(1)}
                                aria-label="Increase interest rate"
                            >
                                <FaPlus style={{ fontSize: '12px' }} />
                            </button>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>
                            <span>Years to Pay</span>
                            <span className={styles.unitTag}>1 to 10 Years</span>
                        </label>
                        <div className={styles.inputWrapper}>
                            <FaCalendarAlt className={styles.inputIcon} />
                            <select
                                className={styles.selectField}
                                value={yearsToPay}
                                onChange={(e) => setYearsToPay(Number(e.target.value))}
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((yr) => (
                                    <option key={yr} value={yr}>
                                        {yr} {yr === 1 ? 'Year' : ''}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <button type="submit" className={styles.calculateBtn} disabled={loading}>
                        {loading ? (
                            <>
                                <FaSpinner style={{ animation: 'spin 1s linear infinite' }} />
                                <span>Calculating...</span>
                            </>
                        ) : (
                            <span>Calculate</span>
                        )}
                    </button>
                </form>

                <div className={styles.resultSection}>
                    <div className={styles.resultCardHeader}>
                        <span className={styles.resultTitle}>Payment Breakdown</span>
                    </div>

                    <div className={styles.monthlyPaymentBox}>
                        <div className={styles.monthlyPaymentLabel}>Monthly Payment</div>
                        <div className={styles.monthlyPaymentValue}>
                            {formatCurrency(monthlyPayment)}
                        </div>
                    </div>

                    <div className={styles.breakdownGrid}>
                        <div className={styles.breakdownRow}>
                            <span className={styles.breakdownLabel}>Principal Loan Amount:</span>
                            <span className={styles.breakdownValue}>{formatCurrency(Number(loanAmount) || 0)}</span>
                        </div>
                        <div className={styles.breakdownRow}>
                            <span className={styles.breakdownLabel}>Total Interest Payable:</span>
                            <span className={styles.breakdownValue}>{formatCurrency(totalInterest)}</span>
                        </div>
                        <div className={styles.breakdownRow}>
                            <span className={styles.breakdownLabel}>Total Amount Payable:</span>
                            <span className={styles.breakdownValue}>{formatCurrency(totalPayment)}</span>
                        </div>
                    </div>

                    {apiErrorNotice && (
                        <div className={styles.apiNotice}>
                            {apiErrorNotice}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EmiCalculator;
