'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNavLinks } from '@/data/navigation';
import styles from './index.module.css';

const MobNavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <div className={styles.mobNavbar}>
                <div className={styles.container}>
                    <div className={styles.mono}>
                        BASALT_SYS
                    </div>
                    <div className={styles.systemStatus + ' ' + styles.mono}>
                        <div className={styles.statusLight}></div>
                        <span>SYSTEMS: OPERATIONAL</span>
                        <span className={styles.version}>V.2.0.4</span>
                    </div>
                    <button 
                        className={styles.menuToggle} 
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
            
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <div className={styles.mobileNavLinks}>
                    {mainNavLinks.map((link) => (
                        <Link 
                            key={link.href} 
                            href={link.href} 
                            className={`${styles.mobileNavLink} ${pathname === link.href ? styles.active : ''}`}
                            onClick={closeMobileMenu}
                        >
                            {link.label.toUpperCase()}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MobNavBar;
