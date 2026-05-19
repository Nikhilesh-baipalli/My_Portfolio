'use client';

import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import RoundedButton from '../ui/RoundedButton';
import Link from 'next/link';

const phrases = [
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.",
    "The combination of my passion for design, code & interaction positions me in a unique place in the web design world."
]

export default function Description() {
    return (
        <div className="relative flex justify-center my-16 sm:my-24 md:my-50 px-4 sm:px-8 md:px-12 lg:px-50 text-white">
            <div className="max-w-350 w-full flex gap-12.5 relative">
                <div className="flex flex-col gap-8 md:gap-12.5 relative w-full md:w-[75%]">
                    {phrases.map((phrase, index) => (
                        <AnimatedText key={index}>{phrase}</AnimatedText>
                    ))}
                    <div className="mt-6 md:mt-0 md:absolute md:top-[80%] md:-right-8 lg:-right-35">
                        <Link href="/about">
                            <RoundedButton className="w-36 h-36 sm:w-40 sm:h-40 md:w-45 md:h-45 bg-[#1C1D20] text-white rounded-full flex items-center justify-center cursor-pointer">
                                <p className="m-0 text-sm sm:text-[16px] font-light z-10 relative">About me</p>
                            </RoundedButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AnimatedText({ children }: { children: string }) {
    const text = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                scrub: true,
                start: "0px bottom",
                end: "bottom+=400px bottom",
            },
            opacity: 0,
            left: "-80px",
            ease: "power3.Out"
        })
    }, [])

    return (
        <p
            ref={text}
            className="m-0 text-[clamp(1.35rem,5vw,3.5rem)] leading-[1.15] md:leading-none relative font-medium pl-0 md:indent-[-12vw] md:pl-[12vw]"
        >
            {children}
        </p>
    );
}


