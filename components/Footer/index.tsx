'use client'

import Link from 'next/link';
import styles from './index.module.css';
import { footerLinks } from '@/data/navigation';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Main</h3>
          <div className={styles.linkGroup}>
            {footerLinks.primary.map((link) => (
              <Link key={link.href} href={link.href} className={styles.footerLink}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Legal</h3>
          <div className={styles.linkGroup}>
            {footerLinks.secondary.map((link) => (
              <Link key={link.href} href={link.href} className={styles.footerLink}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;