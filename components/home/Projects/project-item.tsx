'use client';
import React from 'react'
import styles from './style.module.css';

export default function Project({
    index,
    title,
    category,
    year,
    link,
    manageModal
}: {
    index: number;
    title: string;
    category: string;
    year: string;
    link: string;
    manageModal: (active: boolean, index: number, x: number, y: number) => void;
}) {
    const openProject = () => {
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    return (
        <div
            role="link"
            tabIndex={0}
            onClick={openProject}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openProject();
                }
            }}
            onMouseEnter={(e) => { manageModal(true, index, e.clientX, e.clientY) }}
            onMouseLeave={(e) => { manageModal(false, index, e.clientX, e.clientY) }}
            className={styles.project}
        >
            <h2>{title}</h2>
            <div className={styles.projectMeta}>
                <p className={styles.projectType}>Design &amp; Development</p>
                <p className={styles.projectCategory}>{category}</p>
                <span>{year}</span>
            </div>
        </div>
    );
}
