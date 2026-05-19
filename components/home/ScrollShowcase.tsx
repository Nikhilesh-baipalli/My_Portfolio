'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './scroll-showcase.module.css';

const panels = [
    {
        num: '01',
        title: 'Brand Identity',
        body: 'Visual systems that feel editorial — typography, palette, and motion language tailored for fashion houses.',
        accent: '#455CE9',
    },
    {
        num: '02',
        title: 'E-Commerce UX',
        body: 'Product discovery, lookbooks, and checkout flows engineered for premium clothing & lifestyle brands.',
        accent: '#c9a962',
    },
    {
        num: '03',
        title: 'Scroll & Motion',
        body: 'GSAP-driven narratives — pinned sequences, marquees, and micro-interactions inspired by award-winning portfolios.',
        accent: '#e85d4c',
    },
    {
        num: '04',
        title: 'Performance',
        body: 'Next.js storefronts that load fast, rank well, and scale — without sacrificing the cinematic feel.',
        accent: '#5cb88a',
    },
    {
        num: '05',
        title: 'Your Next Launch',
        body: 'From concept to deploy — I craft digital experiences that make fashion brands impossible to ignore.',
        accent: '#ffffff',
    },
];

const marqueeRow1 = ['DESIGN', 'DEVELOP', 'ANIMATE', 'FASHION', 'COMMERCE', 'CRAFT'];
const marqueeRow2 = ['NEXT.JS', 'GSAP', 'REACT', 'UI/UX', 'MOTION', 'BRANDS'];

export default function ScrollShowcase() {
    const sectionRef = useRef<HTMLElement>(null);
    const scrollSpaceRef = useRef<HTMLDivElement>(null);
    const pinRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const introRef = useRef<HTMLDivElement>(null);
    const marquee1Inner = useRef<HTMLDivElement>(null);
    const marquee2Inner = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from(introRef.current, {
                scrollTrigger: {
                    trigger: introRef.current,
                    start: 'top 85%',
                },
                y: 100,
                opacity: 0,
                duration: 1.1,
                ease: 'power4.out',
            });

            gsap.from(lineRef.current, {
                scrollTrigger: {
                    trigger: introRef.current,
                    start: 'top 80%',
                },
                scaleX: 0,
                transformOrigin: 'left center',
                duration: 1.4,
                ease: 'power3.inOut',
            });

            const track = trackRef.current;
            const scrollSpace = scrollSpaceRef.current;
            const pin = pinRef.current;
            if (!track || !scrollSpace || !pin) return;

            const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

            const horizontalTween = gsap.to(track, {
                x: getScrollAmount,
                ease: 'none',
                scrollTrigger: {
                    trigger: scrollSpace,
                    start: 'center center',
                    end: () => `+=${track.scrollWidth}`,
                    pin: pin,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                },
            });

            gsap.utils.toArray<HTMLElement>(`.${styles.panel}`).forEach((panel) => {
                const inner = panel.querySelector(`.${styles.panelInner}`);
                if (!inner) return;

                gsap.from(inner, {
                    x: 80,
                    opacity: 0.4,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: panel,
                        containerAnimation: horizontalTween,
                        start: 'left 85%',
                        end: 'left 35%',
                        scrub: 1,
                    },
                });
            });

            if (marquee1Inner.current) {
                gsap.to(marquee1Inner.current, {
                    xPercent: -50,
                    repeat: -1,
                    duration: 22,
                    ease: 'none',
                });
            }

            if (marquee2Inner.current) {
                gsap.fromTo(
                    marquee2Inner.current,
                    { xPercent: -50 },
                    { xPercent: 0, repeat: -1, duration: 28, ease: 'none' }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={styles.section}>
            <div ref={introRef} className={styles.intro}>
                <p className={styles.eyebrow}>Capabilities</p>
                <h2 className={styles.introTitle}>
                    Built for brands that <span>dress the world</span>
                </h2>
                <div ref={lineRef} className={styles.line} />
            </div>

            <div ref={scrollSpaceRef} className={styles.scrollSpace}>
                <div ref={pinRef} className={styles.pinWrap}>
                    <div ref={trackRef} className={styles.track}>
                        {panels.map((panel) => (
                            <article key={panel.num} className={styles.panel}>
                                <div
                                    className={styles.panelInner}
                                    style={{ '--accent': panel.accent } as React.CSSProperties}
                                >
                                    <span className={styles.panelNum}>{panel.num}</span>
                                    <h3 className={styles.panelTitle}>{panel.title}</h3>
                                    <p className={styles.panelBody}>{panel.body}</p>
                                    <div className={styles.panelGlow} />
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.marqueeBlock}>
                <div className={styles.marqueeRow}>
                    <div ref={marquee1Inner} className={styles.marqueeInner}>
                        {[...marqueeRow1, ...marqueeRow1, ...marqueeRow1].map((word, i) => (
                            <span key={`m1-${i}`} className={styles.marqueeWord}>
                                {word}
                                <span className={styles.dot} />
                            </span>
                        ))}
                    </div>
                </div>
                <div className={`${styles.marqueeRow} ${styles.marqueeRowAlt}`}>
                    <div ref={marquee2Inner} className={styles.marqueeInner}>
                        {[...marqueeRow2, ...marqueeRow2, ...marqueeRow2].map((word, i) => (
                            <span key={`m2-${i}`} className={styles.marqueeWordAlt}>
                                {word}
                                <span className={styles.dot} />
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
