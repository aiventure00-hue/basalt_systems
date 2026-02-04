import React from 'react'
import Button from '@/components/shared/Button'
import styles from './index.module.css'

const CTASection = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Ready to go offline?</h2>
            <p className={styles.textMuted}>
                Let the systems run the business. You focus on the vision.
            </p>
            <Button variant="primary">
                START SYSTEM AUDIT
            </Button>
        </section>
    )
}

export default CTASection
