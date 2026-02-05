import React from 'react'
import styles from './index.module.css'

interface ModuleCardProps {
    id: string
    price: string
    title: string
    description: string
    imageUrl: string
    imageAlt: string
}

const ModuleCard = ({ id, price, title, description, imageUrl, imageAlt }: ModuleCardProps) => {
    return (
        <div className={styles.moduleCard} data-media-type="banani-button">
            <div className={`${styles.moduleId} mono`}>
                <span>{id}</span>
                <span className={styles.modulePrice}>{price}</span>
            </div>
            <div className={styles.imageContainer}>
                <img 
                    src={imageUrl} 
                    alt={imageAlt}
                    className={styles.moduleImage}
                />
            </div>
            <h3 className={styles.moduleTitle} dangerouslySetInnerHTML={{ __html: title }} />
            <p className={styles.moduleDesc}>{description}</p>
            <div className={`${styles.moduleAction} mono`}>
                <span>[ VIEW_SPECS ]</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    )
}

export default ModuleCard
