/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/components/common/Header';

export default function ContactPage() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    return (
        <>
            <Header />
            <div ref={container} className="bg-white min-h-screen">
                {/* Hero Section */}
                <section className="min-h-screen flex items-center justify-center px-20 pt-32">
                    <div className="max-w-350 w-full">
                        <motion.h1 
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                            className="text-[15vw] font-oswald font-medium text-black leading-none mb-20"
                        >
                            Let's start a project together
                        </motion.h1>
                        
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="grid grid-cols-2 gap-16"
                        >
                            <div>
                                <div className="mb-12">
                                    <label className="block text-sm uppercase text-black/60 mb-4">What's your name?</label>
                                    <input 
                                        type="text" 
                                        placeholder="John Doe *"
                                        className="w-full border-b-2 border-black/20 focus:border-black outline-none py-4 text-2xl bg-transparent transition-colors"
                                    />
                                </div>
                                <div className="mb-12">
                                    <label className="block text-sm uppercase text-black/60 mb-4">What's your email?</label>
                                    <input 
                                        type="email" 
                                        placeholder="john@doe.com *"
                                        className="w-full border-b-2 border-black/20 focus:border-black outline-none py-4 text-2xl bg-transparent transition-colors"
                                    />
                                </div>
                                <div className="mb-12">
                                    <label className="block text-sm uppercase text-black/60 mb-4">What's the name of your organization?</label>
                                    <input 
                                        type="text" 
                                        placeholder="John & Doe ®"
                                        className="w-full border-b-2 border-black/20 focus:border-black outline-none py-4 text-2xl bg-transparent transition-colors"
                                    />
                                </div>
                                <div className="mb-12">
                                    <label className="block text-sm uppercase text-black/60 mb-4">What services are you looking for?</label>
                                    <input 
                                        type="text" 
                                        placeholder="Web Design, Web Development..."
                                        className="w-full border-b-2 border-black/20 focus:border-black outline-none py-4 text-2xl bg-transparent transition-colors"
                                    />
                                </div>
                                <div className="mb-12">
                                    <label className="block text-sm uppercase text-black/60 mb-4">Your message</label>
                                    <textarea 
                                        placeholder="Hello Nikhilesh, can you help me with... *"
                                        rows={4}
                                        className="w-full border-b-2 border-black/20 focus:border-black outline-none py-4 text-2xl bg-transparent transition-colors resize-none"
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-black text-white px-12 py-6 rounded-full text-lg font-medium hover:bg-black/80 transition-colors"
                                >
                                    Send it!
                                </motion.button>
                            </div>

                            {/* Contact Info */}
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h3 className="text-sm uppercase text-black mb-8">Contact Details</h3>
                                    <div className="space-y-6 text-black">
                                        <div>
                                            <p className="text-2xl font-light">nikhilesh@gmail.com</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-light">+91 8807659042</p>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="mt-20">
                                    <h3 className="text-sm uppercase text-black/60 mb-8">Business Details</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-sm text-black/60">Registered Address</p>
                                            <p className="text-lg font-light">India</p>
                                        </div>
                                    </div>
                                </div> */}

                                {/* <div className="mt-20">
                                    <h3 className="text-sm uppercase text-black/60 mb-8">Socials</h3>
                                    <div className="flex gap-6">
                                        {['LinkedIn', 'Instagram', 'Twitter', 'GitHub'].map((social) => (
                                            <motion.a
                                                key={social}
                                                href="#"
                                                whileHover={{ y: -5 }}
                                                className="text-lg font-light hover:text-black/60 transition-colors"
                                            >
                                                {social}
                                            </motion.a>
                                        ))}
                                    </div>
                                </div> */}
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
}
