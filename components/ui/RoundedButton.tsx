'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Magnetic from './Magnetic';

interface RoundedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    backgroundColor?: string;
    className?: string;
}

export default function RoundedButton({
    children,
    backgroundColor = "#455CE9",
    className = "",
    ...attributes
}: RoundedButtonProps) {
    const circle = useRef<HTMLDivElement>(null);
    const timeline = useRef<GSAPTimeline | null>(null);
    const timeoutId = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        timeline.current = gsap.timeline({ paused: true });
        timeline.current
            .to(circle.current, { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" }, "enter")
            .to(circle.current, { top: "-150%", width: "125%", duration: 0.25 }, "exit");
    }, []);

    const manageMouseEnter = () => {
        if (timeoutId.current) clearTimeout(timeoutId.current);
        timeline.current?.tweenFromTo("enter", "exit");
    };

    const manageMouseLeave = () => {
        timeoutId.current = setTimeout(() => {
            timeline.current?.play();
        }, 300);
    };

    return (
        <Magnetic>
            <button
                className={`relative flex items-center justify-center border border-[rgba(255,255,255,0.2)] rounded-full cursor-pointer overflow-hidden ${className}`}
                onMouseEnter={manageMouseEnter}
                onMouseLeave={manageMouseLeave}
                {...attributes}
            >
                <div className="relative z-10 transition-colors duration-400 group-hover:text-white px-8 py-4">
                    {children}
                </div>
                <div
                    ref={circle}
                    style={{ backgroundColor }}
                    className="w-full h-[150%] absolute rounded-[50%] top-full z-0 left-1/2 -translate-x-1/2"
                ></div>
            </button>
        </Magnetic>
    );
}
