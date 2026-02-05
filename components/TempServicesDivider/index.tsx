'use client'

import React from 'react'
import Link from 'next/link'
import styles from './index.module.css'

const TempServicesDivider = () => {
  return (
    <div className={styles.servicesDivider}>
      <div className={styles.content}>
        <div className={`${styles.protocolLabel} mono`}>
          /// TEMP_DIVIDER
        </div>
        <p className={styles.text}>
          Need something tailored or integrated into your business?
        </p>
        <Link href="/services" className={styles.servicesLink}>
          <span className="mono">VIEW_SERVICES →</span>
        </Link>
      </div>
    </div>
  )
}

export default TempServicesDivider
