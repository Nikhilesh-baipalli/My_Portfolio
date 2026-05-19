/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Magnetic from '@/components/ui/Magnetic';
import { FaCode } from "react-icons/fa6";
import Nav from '@/components/common/Nav';
import gsap from 'gsap';

export default function Header() {
    const [isActive, setIsActive] = useState(false);
    // const canvasRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     if (canvasRef.current) {
    //         if (isActive) {
    //             gsap.to(canvasRef.current, {
    //                 scale: 0.7,
    //                 rotation: -10,
    //                 skewX: 5,
    //                 transformOrigin: 'top right',
    //                 duration: 1.2,
    //                 ease: 'expo.inOut'
    //             });
    //         } else {
    //             gsap.to(canvasRef.current, {
    //                 scale: 1,
    //                 rotation: 0,
    //                 skewX: 0,
    //    effects             transformOrigin: 'top right',
    //                 duration: 1.2,
    //                 ease: 'expo.inOut'
    //             });
    //         }
    //     }
    // }, [isActive]);

    // useEffect(() => {
    //     const canvas = document.getElementById('main-canvas');
    //     if (canvas) {
    //         canvasRef.current = canvas as HTMLDivElement;
    //     }
    // }, []); 

    return (
        <>
            <header className="absolute flex justify-between items-center px-4 py-4 sm:px-6 sm:py-6 md:px-10 md:py-8 w-full z-50 text-white mix-blend-difference">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <Magnetic>
                        <div className="p-2 sm:p-3 md:p-4 rounded-full group-hover:bg-white group-hover:text-black transition-colors duration-300">
                            <span className="text-base sm:text-lg md:text-xl font-bold font-oswald flex items-center gap-2">
                                <FaCode /> Nikhilesh
                            </span>
                        </div>
                    </Magnetic>
                </div>

                <div className="flex items-center gap-4">
                    <div onClick={() => setIsActive(!isActive)} className="group relative z-50">
                        <Magnetic>
                            <div className={`flex flex-col gap-1.5 cursor-pointer -mt-4 sm:-mt-6 md:-mt-10 p-4 sm:p-6 md:p-8 rounded-full transition-colors duration-300 ${isActive ? 'bg-blue-500' : 'group-hover:bg-white group-hover:text-black'}`}>
                                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isActive ? 'rotate-45 translate-y-1' : 'group-hover:w-8'}`}></div>
                                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isActive ? '-rotate-45 -translate-y-1' : 'group-hover:w-8'}`}></div>
                            </div>
                        </Magnetic>
                    </div>
                </div>
            </header>
            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
        </>
    );
}
