'use client'

import Link from 'next/link';
import styles from './index.module.css';
import { mainNavLinks } from '@/data/navigation';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {mainNavLinks.map((link) => (
          <Link key={link.href} href={link.href} className={styles.navLink}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;