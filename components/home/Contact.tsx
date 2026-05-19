/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import RoundedButton from '../ui/RoundedButton';
import { useScroll, motion, useTransform } from 'framer-motion';

export default function Contact() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])

    return (
        <motion.div style={{ y }} ref={container} className="flex flex-col items-center justify-center text-white bg-[#1C1D20] min-h-screen relative z-1 mt-24 sm:mt-40 md:mt-100 overflow-hidden px-4 sm:px-8">
            <div className="flex flex-col items-center pt-16 sm:pt-24 md:pt-50 w-full max-w-350 relative z-10">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 md:gap-12.5 mb-12 sm:mb-20 md:mb-25 text-center sm:text-left">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-25 md:h-25 relative rounded-full overflow-hidden shrink-0">
                        <Image
                            fill
                            alt="Nikhilesh"
                            src="/portfolio photo.jpeg"
                            className="object-cover"
                            sizes="100px"
                        />
                    </div>
                    <h2 className="text-[clamp(2.5rem,10vw,8vw)] m-0 font-light">Let&rsquo;s work</h2>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-8 md:gap-12.5 relative w-full">
                    <h2 className="text-[clamp(2.5rem,10vw,8vw)] m-0 font-light sm:relative sm:left-[10%] text-center sm:text-left">together</h2>
                    <div className="sm:absolute sm:left-[calc(100%-280px)] md:left-[calc(100%-400px)] sm:top-[calc(100%-120px)] md:top-[calc(100%-150px)] mt-4 sm:mt-0">
                        <RoundedButton className="w-36 h-36 sm:w-40 sm:h-40 md:w-45 md:h-45 bg-[#455CE9] text-white rounded-full flex items-center justify-center cursor-pointer">
                            <p className="m-0 text-sm sm:text-[16px] font-light z-10 relative">Get in touch</p>
                        </RoundedButton>
                    </div>
                </div>

                <motion.div
                    style={{ x }}
                    className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-12.5 mt-12 sm:mt-20 md:mt-25 relative w-full border-t border-[#999999] pt-8 sm:pt-12.5"
                >
                    <RoundedButton
                        backgroundColor="#334BD3"
                        className="w-full sm:w-auto min-w-0 sm:min-w-45 h-12 sm:h-15 border border-[#999999] rounded-full text-white flex items-center justify-center cursor-pointer px-4"
                        onClick={() => window.location.href = 'mailto:nikhilesh1363@gmail.com'}
                    >
                        <p className="text-sm sm:text-base m-0 truncate">nikhilesh1363@gmail.com</p>
                    </RoundedButton>
                    <RoundedButton
                        backgroundColor="#334BD3"
                        className="w-full sm:w-auto min-w-45 h-12 sm:h-15 border border-[#999999] rounded-full text-white flex items-center justify-center cursor-pointer px-4"
                    >
                        <p className="m-0 text-sm sm:text-base">+918807659042</p>
                    </RoundedButton>
                </motion.div>

                <div className="flex justify-center sm:justify-between w-full mt-12 sm:mt-20 md:mt-25 mb-8 sm:mb-12.5 text-[11px] sm:text-[12px] uppercase text-[#999999]">
                    <div className="flex flex-col gap-2.5 text-center sm:text-left">
                        <h3 className="text-[#999999] m-0 font-normal">Version</h3>
                        <p className="m-0">2024 © Edition</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

