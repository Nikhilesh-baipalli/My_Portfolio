/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Header from './common/Header';
import Contact from './home/Contact';

export default function About() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    return (
        <>
            <Header />
            <div ref={container} className="bg-white">
                {/* Hero Section */}
                <section className="min-h-screen flex items-center justify-center px-8 pt-32">
                    <div className="max-w-350 w-full">
                        <motion.h1 
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                            className="text-[15vw] font-oswald font-medium text-black leading-none"
                        >
                            Helping brands thrive in the digital world
                        </motion.h1>
                    </div>
                </section>

                {/* Introduction Text & Image Grid */}
                <section className="py-32 px-20">
                    <div className="max-w-350 mx-auto grid grid-cols-2 gap-20 items-center text-black">
                        <div className="text-black">
                            <ScrollText>
                                I am a freelance designer and developer based in India. 
                                I create digital experiences that combine beautiful design with powerful functionality.
                            </ScrollText>
                        </div>
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative h-150 overflow-hidden"
                        >
                            <Image
                                src="/pp2.png"
                                fill
                                alt="Work"
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="py-32 px-20">
                    <div className="max-w-350 mx-auto text-black">
                        <ScrollText>
                            My approach combines technical expertise with creative vision. 
                            Every project is an opportunity to push boundaries and create something unique.
                        </ScrollText>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-32 px-20 bg-[#f5f5f5]">
                    <div className="max-w-350 mx-auto text-black">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-[8vw] font-oswald font-medium mb-20"
                        >
                            Services
                        </motion.h2>
                        <div className="grid grid-cols-2 gap-x-20 gap-y-16">
                            {[
                                { title: 'Web Development', desc: 'Building responsive, performant websites with modern technologies' },
                                // { title: 'UI/UX Design', desc: 'Creating intuitive interfaces that users love' },
                                { title: 'Brand Identity', desc: 'Developing cohesive visual identities' },
                                { title: 'Animation', desc: 'Bringing designs to life with smooth interactions' }
                            ].map((service, i) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="border-t border-black pt-8"
                                >
                                    <h3 className="text-3xl font-medium mb-4">{service.title}</h3>
                                    <p className="text-black/60 text-lg">{service.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Closing Statement */}
                <section className="py-32 px-20">
                    <div className="max-w-350 mx-auto text-black">
                        <ScrollText>
                            Let's work together to create something exceptional. 
                            I'm always excited to take on new challenges and collaborate on innovative projects.
                        </ScrollText>
                    </div>
                </section>

                {/* Contact Section */}
                <Contact />
            </div>
        </>
    );
}

function ScrollText({ children }: { children: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.9", "start 0.25"]
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

    return (
        <motion.p
            ref={ref}
            style={{ opacity, y }}
            className="text-[3.5vw] leading-[1.3] font-light"
        >
            {children}
        </motion.p>
    );
}
