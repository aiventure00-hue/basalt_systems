import React from 'react'
import styles from './index.module.css'

interface ContentHeaderProps {
    sectionTitle: string
    title: string
}

const ContentHeader = ({ sectionTitle, title }: ContentHeaderProps) => {
    return (
        <header className={styles.contentHeader}>
            <div className={`${styles.sectionTitle} mono`}>
                {sectionTitle}
            </div>
            <h1 className={styles.displayFont} dangerouslySetInnerHTML={{ __html: title }} />
        </header>
    )
}

export default ContentHeader
