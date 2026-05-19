'use client';

import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import RoundedButton from '../ui/RoundedButton';

const phrases = [
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.",
    "The combination of my passion for design, code & interaction positions me in a unique place in the web design world."
]

export default function Description() {
    return (
        <div className="relative flex justify-center my-50 px-50 text-white">
            <div className="max-w-350 flex gap-12.5 relative">
                <div className="flex flex-col gap-12.5 relative w-[75%]">
                    {
                        phrases.map((phrase, index) => {
                            return <AnimatedText key={index}>{phrase}</AnimatedText>
                        })
                    }
                    <div className="absolute top-[80%] -right-35">
                        <RoundedButton className="w-45 h-45 bg-[#1C1D20] text-white rounded-full flex items-center justify-center cursor-pointer">
                            <p className="m-0 text-[16px] font-light z-10 relative">About me</p>
                        </RoundedButton>
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
            left: "-200px",
            ease: "power3.Out"
        })
    }, [])

    return <p ref={text} className="m-0 text-[3.5vw] leading-none relative font-medium indent-[-12vw] pl-[12vw]">{children}</p>
}
