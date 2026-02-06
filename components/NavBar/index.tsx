'use client'

import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';
import { mainNavLinks } from '@/data/navigation';

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.mono}>
                    BASALT SYSTEMS
                </div>
                <div className={styles.systemStatus + ' ' + styles.mono}>
                    <div className={styles.statusLight}></div>
                    <span>SYSTEMS: OPERATIONAL</span>
                    <span className={styles.version}>V.2.0.4</span>
                </div>
                <div className={styles.navLinks}>
                    {mainNavLinks.map((link) => (
                        <Link key={link.href} href={link.href} className={styles.navLink}>
                            {link.label.toUpperCase()}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NavBar;