import React from 'react'
import styles from './index.module.css'

const ExperienceStats = () => {
    return (
        <section className={styles.statsSection}>
            <div>
                <div className={`${styles.label} mono`}>
                    AGGREGATE_EXPERIENCE_LOG
                </div>
                <div className={styles.odometer}>12,840</div>
                <div className={`${styles.sublabel} mono`}>
                    HOURS OF SYSTEM ARCHITECTURE
                </div>
            </div>
            <div className={styles.metrics}>
                <div className="mono">
                    METRIC_CONFIDENCE: 99.8%<br />
                    SOURCE: INTERNAL_AUDIT<br />
                    STATUS: VERIFIED
                </div>
            </div>
        </section>
    )
}

export default ExperienceStats
