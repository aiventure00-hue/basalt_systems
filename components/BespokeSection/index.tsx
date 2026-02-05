import React from 'react'
import styles from './index.module.css'

const BespokeSection = () => {
    return (
        <section className={styles.bespokeSection}>
            <div>
                <div className={`${styles.sectionTitle} mono`}>
                    /// CUSTOM_PROTOCOL
                </div>
                <h2 className={styles.displayFont}>
                    Bespoke<br/>Architecture
                </h2>
                <p className={styles.description}>
                    For enterprise-grade complexity. We design,
                    build, and maintain custom neural networks
                    tailored to your specific operational terrain.
                </p>
                <button className={styles.consultationButton} data-media-type="banani-button">
                    INITIATE_CONSULTATION
                </button>
            </div>
            <div className={styles.diagramContainer}>
                <div className={`${styles.diagramLabel} mono`}>
                    DIAGRAM_88A
                </div>
                <img 
                    src="https://storage.googleapis.com/banani-generated-images/generated-images/a827e22c-04d9-4e8c-af0f-56802e63e4f2.jpg"
                    alt="Complex technical flowchart diagram of enterprise AI architecture"
                    className={styles.diagramImage}
                />
            </div>
        </section>
    )
}

export default BespokeSection
