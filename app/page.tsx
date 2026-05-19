'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from "@/components/common/Header";
import Hero from "@/components/home/Hero";
import Description from "@/components/home/Description";
import Projects from "@/components/home/Projects";
import ScrollShowcase from "@/components/home/ScrollShowcase";
import Contact from "@/components/home/Contact";
import Preloader from "@/components/common/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <main className="relative w-full min-h-screen bg-[#1C1D20]">
        <Header />
        <Hero />
        <Description />
        <Projects />
        <ScrollShowcase />
        <Contact />
      </main>
    </>
  );
}
