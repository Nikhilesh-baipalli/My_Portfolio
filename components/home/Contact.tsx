/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import RoundedButton from '../ui/RoundedButton';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../ui/Magnetic';


export default function Contact() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (
        <motion.div style={{ y }} ref={container} className="flex flex-col items-center justify-center text-white bg-[#1C1D20] min-h-screen relative z-1 mt-100 overflow-hidden">
            
            <div className="flex flex-col items-center pt-50 w-full max-w-350 relative z-10">
                <div className="flex items-center gap-12.5 mb-25">
                    <div className="w-25 h-25 relative rounded-full overflow-hidden">
                        <Image
                            fill={true}
                            alt={"image"}
                            src="/portfolio photo.jpeg"
                            className="object-cover"
                        />
                    </div>
                    <h2 className="text-[8vw] m-0 font-light">Let&rsquo;s work</h2>
                </div>
                <div className="flex items-center gap-12.5 relative w-full">
                    <h2 className="text-[8vw] m-0 font-light relative left-[10%]">together</h2>
                    <div className="absolute left-[calc(100%-400px)] top-[calc(100%-150px)]">
                        <RoundedButton className="w-45 h-45 bg-[#455CE9] text-white rounded-full flex items-center justify-center cursor-pointer absolute">
                            <p className="m-0 text-[16px] font-light z-10 relative">Get in touch</p>
                        </RoundedButton>
                    </div>
                </div>
                <motion.div style={{ x }} className="flex gap-12.5 mt-25 relative w-full border-t border-[#999999] pt-12.5">
                    <RoundedButton backgroundColor={"#334BD3"} className="w-45 h-15 border border-[#999999] rounded-full text-white flex items-center justify-center cursor-pointer">
                        <p>nikhilesh@gmail.com</p>
                    </RoundedButton>
                    <RoundedButton backgroundColor={"#334BD3"} className="w-45 h-15 border border-[#999999] rounded-full text-white flex items-center justify-center cursor-pointer">
                        <p>+918807659042</p>
                    </RoundedButton>
                </motion.div>
                <div className="flex justify-between w-full mt-25 mb-12.5 text-[12px] uppercase text-[#999999]">
                    <div className="flex flex-col gap-2.5">
                        <h3 className="text-[#999999]">Version</h3>
                        <p>2024 © Edition</p>
                    </div>
                    {/* <div className="flex flex-col gap-2.5">
                        <h3 className="text-[#999999]">Socials</h3>
                        <Magnetic>
                            <p>Awwwards</p>
                        </Magnetic>
                        <Magnetic>
                            <p>Instagram</p>
                        </Magnetic>
                        <Magnetic>
                            <p>Dribbble</p>
                        </Magnetic>
                        <Magnetic>
                            <p>Linkedin</p>
                        </Magnetic>
                    </div> */}
                </div>
            </div>
        </motion.div>
    )
}
