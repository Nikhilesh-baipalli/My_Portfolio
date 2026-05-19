/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from './anim';

export default function Index({ data, isActive, setSelectedIndicator }: { data: any, isActive: boolean, setSelectedIndicator: (href: string) => void }) {
    const { title, href, index } = data;

    return (
        <motion.div
            className="relative flex items-center"
            onMouseEnter={() => { setSelectedIndicator(href) }}
            custom={index}
            variants={slide}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            <motion.div
                variants={scale}
                animate={isActive ? "open" : "closed"}
                className="w-2.5 h-2.5 bg-white rounded-full absolute -left-7.5"
            ></motion.div>
            <Link href={href} className="text-white text-[56px] font-light no-underline hover:opacity-70 transition-opacity">
                {title}
            </Link>
        </motion.div>
    )
}
