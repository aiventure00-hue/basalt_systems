import React from 'react'
import styles from './index.module.css'
import { values } from '@/data/values'

const ValuesGrid = () => {
    return (
        <section>
            <div className={styles.sectionHeader}>
                <span className="mono">/// CORPORATE_VALUES</span>
            </div>
            <div className={styles.valuesGrid}>
                {values.map((value) => (
                    <div key={value.id} className={styles.valueItem}>
                        <div className={styles.valueIcon}>
                            <div className={styles.iconPlaceholder}></div>
                        </div>
                        <h4 className={`${styles.valueTitle} display-font`}>
                            {value.title}
                        </h4>
                        <p className={styles.valueDescription}>
                            {value.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ValuesGrid
