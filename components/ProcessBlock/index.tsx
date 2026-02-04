import React from 'react'
import styles from './index.module.css'

const ProcessBlock = () => {
    return (
        <section className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.header}>
                    <span className={styles.textPrimary}>02 // METHODOLOGY</span>
                    <h2 className={styles.sectionTitle}>The Basalt Protocol</h2>
                </div>
                <div className={styles.processRow}>
                    <div className={styles.processStep}>
                        <span className={styles.stepNum}>PHASE_01</span>
                        <h3 className={styles.stepTitle}>Forensic Audit</h3>
                        <p className={styles.textMuted}>
                            We deconstruct your current operations to identify friction
                            points and latency.
                        </p>
                    </div>
                    <div className={styles.processStep}>
                        <span className={styles.stepNum}>PHASE_02</span>
                        <h3 className={styles.stepTitle}>System Architecture</h3>
                        <p className={styles.textMuted}>
                            Designing the autonomous nervous system of your company using
                            fault-tolerant models.
                        </p>
                    </div>
                    <div className={styles.processStep}>
                        <span className={styles.stepNum}>PHASE_03</span>
                        <h3 className={styles.stepTitle}>Deployment & Stabilization</h3>
                        <p className={styles.textMuted}>
                            Live implementation with 99.9% uptime guarantee and real-time
                            monitoring dashboards.
                        </p>
                    </div>
                    <div className={styles.processStep + ' ' + styles.averageEfficiency}>
                        <div className={styles.efficiencyGain}>+35%</div>
                        <div className={styles.efficiencyLabel}>AVG. EFFICIENCY GAIN</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProcessBlock
