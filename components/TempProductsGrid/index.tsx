'use client'

import React from 'react'
import TempProductCard from '../TempProductCard'
import styles from './index.module.css'

interface Product {
  id: string
  title: string
  outcome: string
  audience: string
  price: string
  ctaText: string
}

interface TempProductsGridProps {
  products: Product[]
}

const TempProductsGrid = ({ products }: TempProductsGridProps) => {
  const handleCtaClick = (productId: string) => {
    console.log(`CTA clicked for product: ${productId}`);
  };

  return (
    <div className={styles.productsGrid}>
      <div className={styles.gridHeader}>
        <div className={`${styles.protocolLabel} mono`}>
          /// TEMP_PRODUCTS_CATALOG
        </div>
        <p className={styles.description}>
          Temporary product showcase. Components marked as TEMP will be replaced with final design.
        </p>
      </div>
      
      <div className={styles.grid}>
        {products.map((product) => (
          <TempProductCard
            key={product.id}
            title={product.title}
            outcome={product.outcome}
            audience={product.audience}
            price={product.price}
            ctaText={product.ctaText}
            onCtaClick={() => handleCtaClick(product.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default TempProductsGrid
