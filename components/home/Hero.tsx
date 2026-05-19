/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/immutability */

'use client';
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";
// import Magnetic from '../ui/Magnetic';

export default function Hero() {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = -1; // -1 for left, 1 for right

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Animate the slider on scroll
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction = e.direction * -1
            },
            x: "-500px",  // Move the slider left/right based on scroll
        });

        // Continuous marquee animation
        requestAnimationFrame(animate);
    }, []);

    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        }
        else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
    }

    return (
        <section className="relative h-screen flex flex-col justify-center overflow-hidden bg-[#1C1D20]">
            {/* Profile Photo - Centered */}
            <div className="absolute top-[5%] ml-315 transform -translate-x-1/2 z-20">
                <div className="relative w-200 h-200 rounded-full overflow-hidden border-4 border-white">
                    <Image
                        src="/portfolio photo.jpeg"
                        alt="Nikhilesh"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            <div className="absolute top-[calc(100vh-350px)] left-0 z-30 whitespace-nowrap">
                <div ref={slider} className="relative whitespace-nowrap flex">
                    <p ref={firstText} className="text-[230px] font-oswald font-medium text-white m-0 mr-12 leading-none relative">
                        Nikhilesh - Developer -
                    </p>
                    <p ref={secondText} className="text-[230px] font-oswald font-medium text-white m-0 mr-12 leading-none absolute left-full">
                        Nikhilesh - Developer -
                    </p>
                </div>
            </div>

            <div className='absolute top-[40%] right-[10%] max-w-100 text-white z-20'>
                {/* <Magnetic>
                    <div className='w-45 h-45 bg-[#455CE9] rounded-full flex items-center justify-center cursor-pointer text-white font-medium'>
                        <p className="m-0 text-lg z-10 relative">Get in touch</p>
                    </div>
                </Magnetic> */}
            </div>

            <div className="absolute top-[35%] left-[5%] max-w-100 text-white/50 text-2xl font-light">
                <FaArrowRight className="mb-4 text-white -rotate-45 text-4xl" />
                <p className="leading-snug">Located in India</p>
                <p className="leading-snug">Feelance Designer & Developer</p>
            </div>
        </section>
    );
}
