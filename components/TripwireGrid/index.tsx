import React from 'react'
import { GitPullRequest, Database, Mail, ArrowRight } from 'lucide-react'
import styles from './index.module.css'

const TripwireGrid = () => {
    return (
        <section className={styles.container}>
            <div className={styles.sectionHeader}>
                <div>
                    <span className={styles.textPrimary}>01 // AUTOMATIONS</span>
                    <h2 className={styles.sectionTitle}>Plug-and-Play Tripwires</h2>
                </div>
                <div className={styles.textMuted}>
                    System Architecture -&gt; Modules
                </div>
            </div>

            <div className={styles.grid12}>
                <div className={styles.card}>
                    <div>
                        <div className={styles.cardIcon}>
                            <div className={styles.iconContainer}>
                                <GitPullRequest className={styles.icon} />
                            </div>
                        </div>
                        <h3 className={styles.cardTitle}>Inbound Router</h3>
                        <p className={styles.cardDesc}>
                            Automatically qualifies leads, enriches data via Clearbit, and
                            routes high-value prospects to Slack instantly.
                        </p>
                    </div>
                    <div className={styles.deployModule}>
                        DEPLOY MODULE
                        <ArrowRight className={styles.arrowIcon} />
                    </div>
                </div>

                <div className={styles.card}>
                    <div>
                        <div className={styles.cardIcon}>
                            <div className={styles.iconContainer}>
                                <Database className={styles.icon} />
                            </div>
                        </div>
                        <h3 className={styles.cardTitle}>Knowledge Sync</h3>
                        <p className={styles.cardDesc}>
                            Vectorizes your Notion and Google Drive into a queryable brain
                            for your internal LLM agents.
                        </p>
                    </div>
                    <div className={styles.deployModule}>
                        DEPLOY MODULE
                        <ArrowRight className={styles.arrowIcon} />
                    </div>
                </div>

                <div className={styles.card}>
                    <div>
                        <div className={styles.cardIcon}>
                            <div className={styles.iconContainer}>
                                <Mail className={styles.icon} />
                            </div>
                        </div>
                        <h3 className={styles.cardTitle}>Outreach Sentinel</h3>
                        <p className={styles.cardDesc}>
                            Autonomous follow-up sequences that adapt tone and timing based
                            on recipient engagement signals.
                        </p>
                    </div>
                    <div className={styles.deployModule}>
                        DEPLOY MODULE
                        <ArrowRight className={styles.arrowIcon} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TripwireGrid
