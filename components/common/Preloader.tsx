/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"];

const slideUp = {
    initial: { top: 0 },
    exit: { top: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const, delay: 0.2 } },
};

const opacity = {
    initial: { opacity: 0 },
    enter: { opacity: 0.75, transition: { duration: 1, delay: 0.2 } },
};

export default function Preloader() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        if (index === words.length - 1) return;
        const timeout = setTimeout(() => {
            setIndex(index + 1);
        }, index === 0 ? 1000 : 150);
        return () => clearTimeout(timeout);
    }, [index]);

    return (
        <motion.div
            variants={slideUp}
            initial="initial"
            exit="exit"
            className="fixed inset-0 flex items-center justify-center z-99 bg-[#141516]"
        >
            {dimension.height > 0 && (
                <>
                    <motion.p
                        variants={opacity}
                        initial="initial"
                        animate="enter"
                        className="flex text-white text-[42px] items-center absolute z-10"
                    >
                        <span className="block w-2.5 h-2.5 bg-white rounded-[50%] mr-2.5"></span>
                        {words[index]}
                    </motion.p>
                    <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none">
                        <motion.path
                            variants={
                                {
                                    initial: { d: `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0` },
                                    exit: { d: `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }
                                }
                            }
                            initial="initial"
                            exit="exit"
                            fill="#141516"
                        />
                    </svg>
                </>
            )}
        </motion.div>
    );
}
