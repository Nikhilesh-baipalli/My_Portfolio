/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import styles from './style.module.css';
import ProjectItem from './project-item';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

export const projects = [
    {
        title: "Sasai",
        category: "Luxury Jewelry",
        year: "2024",
        src: "/p1.png",
        color: "#0a0a0a",
        link: "https://sasaijewelry.com/"
    },
    {
        title: "Fieldstone",
        category: "Outdoor Apparel",
        year: "2024",
        src: "/p2.png",
        color: "#3d4f3a",
        link: "https://www.fieldstoneoutdoors.com/"
    },
    {
        title: "COS",
        category: "Contemporary Fashion",
        year: "2023",
        src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
        color: "#e8e4df",
        link: "https://www.cos.com/"
    },
    {
        title: "Stüssy",
        category: "Streetwear Culture",
        year: "2023",
        src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
        color: "#1a1a1a",
        link: "https://www.stussy.com/"
    },
    {
        title: "A.P.C.",
        category: "Parisian Ready-to-Wear",
        year: "2023",
        src: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop",
        color: "#c4beb6",
        link: "https://www.apc.fr/"
    },
    {
        title: "Everlane",
        category: "Modern Essentials",
        year: "2022",
        src: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop",
        color: "#2c3e50",
        link: "https://www.everlane.com/"
    }
];

const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] as const } },
    closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] as const } }
};

export default function Projects() {
    const [modal, setModal] = useState({ active: false, index: 0 });
    const { active, index } = modal;
    const sectionRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const modalContainer = useRef(null);
    const cursor = useRef(null);
    const cursorLabel = useRef(null);

    const xMoveContainer = useRef<any>(null);
    const yMoveContainer = useRef<any>(null);
    const xMoveCursor = useRef<any>(null);
    const yMoveCursor = useRef<any>(null);
    const xMoveCursorLabel = useRef<any>(null);
    const yMoveCursorLabel = useRef<any>(null);

    useEffect(() => {
        xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" });
        yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" });
        xMoveCursor.current = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
        yMoveCursor.current = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });
        xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" });
        yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" });
    }, []);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(headerRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                },
                y: 80,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
            });

            gsap.from(`.${styles.project}`, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                y: 60,
                opacity: 0,
                stagger: 0.12,
                duration: 0.9,
                ease: "power3.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const moveItems = (x: number, y: number) => {
        xMoveContainer.current?.(x);
        yMoveContainer.current?.(y);
        xMoveCursor.current?.(x);
        yMoveCursor.current?.(y);
        xMoveCursorLabel.current?.(x);
        yMoveCursorLabel.current?.(y);
    };

    const manageModal = (isActive: boolean, idx: number, x: number, y: number) => {
        moveItems(x, y);
        setModal({ active: isActive, index: idx });
    };

    return (
        <div ref={sectionRef} onMouseMove={(e) => { moveItems(e.clientX, e.clientY) }} className={styles.projects}>
            <div ref={headerRef} className={styles.sectionHeader}>
                <p className={styles.eyebrow}>Selected Work</p>
                <h2 className={styles.sectionTitle}>Fashion &amp; Lifestyle</h2>
                <p className={styles.sectionDesc}>
                    Curated e-commerce experiences for clothing and lifestyle brands — refined storefronts built for conversion and craft.
                </p>
            </div>

            <div className={styles.body}>
                {projects.map((project, i) => (
                    <ProjectItem
                        key={project.title}
                        index={i}
                        title={project.title}
                        category={project.category}
                        year={project.year}
                        manageModal={manageModal}
                    />
                ))}
            </div>

            <>
                <motion.div
                    ref={modalContainer}
                    variants={scaleAnimation}
                    initial="initial"
                    animate={active ? "enter" : "closed"}
                    className={styles.modalContainer}
                    style={{ pointerEvents: active ? 'auto' : 'none' }}
                >
                    <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
                        {projects.map((project, idx) => {
                            const { src, color, link, title } = project;
                            return (
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.modal}
                                    style={{ backgroundColor: color }}
                                    key={`modal_${idx}`}
                                    aria-label={`View ${title} website`}
                                >
                                    <Image
                                        src={src}
                                        width={400}
                                        height={400}
                                        alt={title}
                                        unoptimized
                                        className={styles.modalImage}
                                    />
                                </a>
                            );
                        })}
                    </div>
                </motion.div>
                <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} />
                <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
            </>
        </div>
    );
}
