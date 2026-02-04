import React from 'react'
import styles from './index.module.css'

const Marquee = () => {
    return (
        <div className={styles.borderY}>
            <div className={styles.container}>
                <div className={styles.logos}>
                    <div className={styles.logo}>
                        <div className={styles.logoIcon}></div>
                        OPENAI
                    </div>
                    <div className={styles.logo}>
                        <div className={styles.logoIcon + ' ' + styles.logoIconRound}></div>
                        ANTHROPIC
                    </div>
                    <div className={styles.logo}>
                        <div className={styles.logoIcon}></div>
                        N8N
                    </div>
                    <div className={styles.logo}>
                        <div className={styles.logoIcon + ' ' + styles.logoIconRound}></div>
                        PINECONE
                    </div>
                    <div className={styles.logo}>
                        <div className={styles.logoIcon}></div>
                        VERCEL
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marquee
