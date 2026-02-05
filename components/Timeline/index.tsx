import React from 'react'
import styles from './index.module.css'
import { timelineEvents } from '@/data/timeline'

const Timeline = () => {
    return (
        <section className={styles.timelineSection}>
            <div className={`${styles.sectionLabel} mono`}>
                /// OPERATIONAL_TIMELINE
            </div>
            <div className={styles.timeline}>
                {timelineEvents.map((event, index) => (
                    <div key={index} className={styles.timelineNode}>
                        <div className={styles.timelineDot}></div>
                        <div className={`${styles.year} mono`}>
                            {event.year}
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: event.description }} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Timeline
