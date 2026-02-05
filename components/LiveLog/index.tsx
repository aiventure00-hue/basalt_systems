import React from 'react'
import styles from './index.module.css'

const LiveLog = () => {
    return (
        <div className={styles.liveLog}>
            <div className={styles.statusDot}></div>
            <span>SYSTEM_LOG:</span>
            <span className={styles.success}>DEPLOYING_UNIT_B1... SUCCESS</span>
            <span className={styles.separator}>|</span>
            <span className={styles.muted}>MONITORING_NODES: 42</span>
            <span className={styles.blinkingCursor}></span>
        </div>
    )
}

export default LiveLog
