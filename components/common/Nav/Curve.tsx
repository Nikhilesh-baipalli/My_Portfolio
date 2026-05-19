'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Curve() {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setHeight(window.innerHeight);
    }, []);

    if (height === 0) return null;

    const initialPath = `M100 0 L100 ${height} Q-100 ${height / 2} 100 0`;
    const targetPath = `M100 0 L100 ${height} Q100 ${height / 2} 100 0`;

    const curve = {
        initial: { d: initialPath },
        enter: {
            d: targetPath,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as const },
        },
        exit: {
            d: initialPath,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
        },
    };

    return (
        <svg className="absolute top-0 -left-24.75 w-25 h-full fill-[#292929] stroke-none">
            <motion.path variants={curve} initial="initial" animate="enter" exit="exit" />
        </svg>
    );
}
