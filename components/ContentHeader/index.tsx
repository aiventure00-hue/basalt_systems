import React from 'react'
import styles from './index.module.css'

interface ContentHeaderProps {
    sectionTitle: string
    title: string
    subtitle?: string
}

const ContentHeader = ({ sectionTitle, title, subtitle }: ContentHeaderProps) => {
    return (
        <header className={styles.contentHeader}>
            <div className={`${styles.sectionTitle} mono`}>
                {sectionTitle}
            </div>
            <h1 className={styles.displayFont} dangerouslySetInnerHTML={{ __html: title }} />
            {subtitle && <div className={`${styles.subtitle} mono`}>{subtitle}</div>}
        </header>
    )
}

export default ContentHeader
