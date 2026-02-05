'use client'

import React from 'react'
import styles from './index.module.css'

interface TempProductCardProps {
  title: string
  outcome: string
  audience: string
  price: string
  ctaText: string
  onCtaClick?: () => void
}

const TempProductCard = ({ title, outcome, audience, price, ctaText, onCtaClick }: TempProductCardProps) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.cardHeader}>
        <div className={`${styles.protocolTag} mono`}>
          /// TEMP_PRODUCT
        </div>
        <h3 className={styles.title}>{title}</h3>
      </div>
      
      <div className={styles.cardContent}>
        <div className={styles.outcome}>
          <span className={`${styles.label} mono`}>OUTCOME:</span>
          <p>{outcome}</p>
        </div>
        
        <div className={styles.audience}>
          <span className={`${styles.label} mono`}>TARGET_AUDIENCE:</span>
          <p>{audience}</p>
        </div>
        
        <div className={styles.pricing}>
          <span className={`${styles.label} mono`}>COST:</span>
          <div className={styles.price}>{price}</div>
        </div>
      </div>
      
      <button 
        className={`${styles.ctaButton} mono`}
        onClick={onCtaClick}
      >
        <span>{ctaText}</span>
        <span>→</span>
      </button>
    </div>
  )
}

export default TempProductCard
