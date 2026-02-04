'use client'

import React from 'react'
import Link from 'next/link'
import styles from './index.module.css'
import { footerLinks } from '@/data/navigation'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid12}>
                    <div className={styles.brandColumn}>
                        <div className={styles.brandName}>BASALT SYSTEMS</div>
                        <div className={styles.copyright}>
                            COPYRIGHT © 198X-202X<br />
                            ALL RIGHTS RESERVED.<br />
                            SAN FRANCISCO, CA // NEO-TOKYO
                        </div>
                    </div>
                    <div className={styles.spacerColumn}></div>
                    <div className={styles.linkColumn}>
                        <div className={styles.columnHeader}>PRIMARY</div>
                        <div className={styles.linkGroup}>
                            {footerLinks.primary.map((link) => (
                                <Link key={link.href} href={link.href} className={styles.linkItem}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className={styles.linkColumn}>
                        <div className={styles.columnHeader}>SECONDARY</div>
                        <div className={styles.linkGroup}>
                            {footerLinks.secondary.map((link) => (
                                <Link key={link.href} href={link.href} className={styles.linkItem}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className={styles.linkColumn}>
                        <div className={styles.columnHeader}>SOCIAL</div>
                        <div className={styles.linkGroup}>
                            {footerLinks.social.map((link) => (
                                <Link key={link.href} href={link.href} className={styles.linkItem}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.bottomBar}>
                    <div className={styles.statusId}>ID: 884-291-002-X</div>
                    <div className={styles.statusText}>STATUS: STABLE</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer