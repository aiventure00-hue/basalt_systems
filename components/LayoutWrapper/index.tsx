'use client'

import { usePathname } from 'next/navigation'
import NavBar from '@/components/NavBar'
import MobNavBar from '@/components/MobNavBar'
import SideBar from '@/components/SideBar'
import styles from './index.module.css'

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <div className={`${isHomePage ? styles.navbarLayout : styles.sidebarLayout} ${!isHomePage ? styles.layoutGrid : ''}`}>
      {isHomePage ? <NavBar /> : <SideBar />}
      <MobNavBar />
      <main className="document-main">
        <div className="content-wrapper">
          {children}
        </div>
      </main>
    </div>
  )
}

export default LayoutWrapper
