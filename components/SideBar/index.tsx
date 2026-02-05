import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { mainNavLinks } from '@/data/navigation'
import styles from './index.module.css'

const SideBar = () => {
    const pathname = usePathname()
    
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <div className="mono">
                    <div className={styles.icon}></div>
                    BASALT_SYS
                </div>
            </div>

            <nav className={styles.col}>
                <div className={styles.navTitle}>
                    /// NAVIGATION_DECK
                </div>
                {mainNavLinks.map((link) => (
                    <Link 
                        key={link.href} 
                        href={link.href} 
                        className={`${styles.navItem} mono ${pathname === link.href ? styles.active : ''}`} 
                        data-media-type="banani-button"
                    >
                        {link.label.toUpperCase()}
                    </Link>
                ))}
            </nav>

            <div className={`${styles.techSpecs} mono`}>
                <div className={styles.techSpecsTitle}>
                    [ SYSTEM_METRICS ]
                </div>
                <div className={styles.specRow}>
                    <span>UPTIME</span>
                    <span className={styles.specVal}>99.99%</span>
                </div>
                <div className={styles.specRow}>
                    <span>LATENCY</span>
                    <span className={styles.specVal}>24ms</span>
                </div>
                <div className={styles.specRow}>
                    <span>ACTIVE_UNITS</span>
                    <span className={styles.specVal}>842</span>
                </div>
                <div className={styles.specRow}>
                    <span>MEM_LOAD</span>
                    <span className={styles.specVal}>14%</span>
                </div>
                <div>
                    SERVER: US-WEST-2<br />
                    ENCRYPTION: AES-256
                </div>
            </div>
        </aside>
    )
}

export default SideBar