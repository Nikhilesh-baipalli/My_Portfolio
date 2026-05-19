/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/immutability */

'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const MARQUEE_TEXT = 'Nikhilesh - Developer - ';

export default function Hero() {
    const firstText = useRef<HTMLParagraphElement>(null);
    const secondText = useRef<HTMLParagraphElement>(null);
    const slider = useRef<HTMLDivElement>(null);
    const xPercent = useRef(0);
    const direction = useRef(-1);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: (self) => {
                    direction.current = self.direction * -1;
                },
            },
            x: '-500px',
        });

        let frame: number;

        const animate = () => {
            if (xPercent.current < -100) {
                xPercent.current = 0;
            } else if (xPercent.current > 0) {
                xPercent.current = -100;
            }

            gsap.set(firstText.current, { xPercent: xPercent.current });
            gsap.set(secondText.current, { xPercent: xPercent.current });

            xPercent.current += 0.1 * direction.current;
            frame = requestAnimationFrame(animate);
        };

        frame = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(frame);
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <section className="relative h-screen flex flex-col justify-center overflow-hidden bg-[#1C1D20]">
            {/* Profile — same markup/classes as deployed build */}
            <div className="absolute top-[5%] z-20 ml-315 -translate-x-1/2 transform">
                <div className="relative h-200 w-200 overflow-hidden rounded-full border-4 border-white">
                    <Image
                        src="/portfolio photo.jpeg"
                        alt="Nikhilesh"
                        fill
                        className="object-cover"
                        priority
                        quality={95}
                        sizes="(max-width: 768px) 50vw, 50rem"
                    />
                </div>
            </div>

            <div className="absolute top-[calc(100vh-350px)] left-0 z-30 whitespace-nowrap">
                <div ref={slider} className="relative flex whitespace-nowrap">
                    <p
                        ref={firstText}
                        className="relative m-0 mr-12 font-oswald text-[230px] font-medium leading-none text-white"
                    >
                        {MARQUEE_TEXT}
                    </p>
                    <p
                        ref={secondText}
                        className="absolute left-full m-0 mr-12 font-oswald text-[230px] font-medium leading-none text-white"
                        aria-hidden
                    >
                        {MARQUEE_TEXT}
                    </p>
                </div>
            </div>

            <div className="absolute top-[35%] left-[5%] z-20 max-w-100 font-light text-white/50 text-2xl">
                <FaArrowRight className="mb-4 -rotate-45 text-4xl text-white" />
                <p className="leading-snug">Located in India</p>
                <p className="leading-snug">Freelance Designer &amp; Developer</p>
            </div>
        </section>
    );
}


