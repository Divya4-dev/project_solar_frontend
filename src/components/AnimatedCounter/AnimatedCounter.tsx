import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
}

const AnimatedCounter = ({ end, duration = 1800, prefix = "", suffix = "" }: AnimatedCounterProps) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const elementRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true);
                    if (elementRef.current) {
                        observer.unobserve(elementRef.current);
                    }
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime: number | null = null;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Cubic ease-out calculation for smooth decelleration near target value
            const easeProgress = 1 - Math.pow(1 - percentage, 3);
            setCount(Math.floor(easeProgress * end));

            if (percentage < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [hasStarted, end, duration]);

    return (
        <span ref={elementRef}>
            {prefix}
            {count}
            {suffix}
        </span>
    );
};

export default AnimatedCounter;
