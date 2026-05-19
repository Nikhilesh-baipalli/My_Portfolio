'use client';
import React from 'react'
import styles from './style.module.css';

export default function Project({
    index,
    title,
    category,
    year,
    manageModal
}: {
    index: number;
    title: string;
    category: string;
    year: string;
    manageModal: (active: boolean, index: number, x: number, y: number) => void;
}) {
    return (
        <div
            onMouseEnter={(e) => { manageModal(true, index, e.clientX, e.clientY) }}
            onMouseLeave={(e) => { manageModal(false, index, e.clientX, e.clientY) }}
            className={styles.project}
        >
            <h2>{title}</h2>
            <div className={styles.projectMeta}>
                <p>{category}</p>
                <span>{year}</span>
            </div>
        </div>
    );
}
