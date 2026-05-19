// 'use client';

// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// export default function CubeGrid() {
//     const cubeRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const cube = cubeRef.current;
//         if (!cube) return;

//         const xTo = gsap.quickTo(cube, 'x', { duration: 0.6, ease: 'power3' });
//         const yTo = gsap.quickTo(cube, 'y', { duration: 0.6, ease: 'power3' });
//         const rotateTo = gsap.quickTo(cube, 'rotation', { duration: 0.6, ease: 'power3' });

//         const handleMouseMove = (e: MouseEvent) => {
//             const x = e.clientX - window.innerWidth / 2;
//             const y = e.clientY - window.innerHeight / 2;
//             xTo(x * 0.1);
//             yTo(y * 0.1);
//             rotateTo(x * 0.02);
//         };

//         window.addEventListener('mousemove', handleMouseMove);
//         return () => window.removeEventListener('mousemove', handleMouseMove);
//     }, []);

//     return (
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
//             <div ref={cubeRef} className="w-40 h-40 bg-white/10 backdrop-blur-md border border-white/20" />
//         </div>
//     );
// }
