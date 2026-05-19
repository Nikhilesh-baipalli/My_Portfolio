'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from './anim';
import Link from './Link';
import Curve from './Curve';
// import Footer from './Footer';

const navItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Contact",
        href: "/contact",
    },
];

export default function Nav() {
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="h-[100dvh] w-full md:w-[min(500px,85vw)] fixed right-0 top-0 bg-[#292929] text-white z-40 overflow-hidden"
        >
            <div className="box-border h-full p-8 sm:p-12 md:p-25 flex flex-col justify-between">
                <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className="flex flex-col gap-3 mt-12 sm:mt-16 md:mt-20">
                    <div className="border-b border-[#999999] uppercase text-[11px] mb-10 text-[#999999]">
                        <p>Navigation</p>
                    </div>
                    {
                        navItems.map((data, index) => {
                            return <Link
                                key={index}
                                data={{ ...data, index }}
                                isActive={selectedIndicator == data.href}
                                setSelectedIndicator={setSelectedIndicator}
                            ></Link>
                        })
                    }
                </div>
                {/* <Footer /> */}
            </div>
            <Curve />
        </motion.div>
    )
}
