import React from 'react'
import styles from './index.module.css'
import { personnel } from '@/data/personnel'

const PersonnelSection = () => {
    return (
        <section>
            <div className={styles.sectionHeader}>
                <span className="mono">/// SENIOR_PERSONNEL</span>
            </div>
            <div className={styles.personnelGrid}>
                {personnel.map((person) => (
                    <div key={person.id} className={styles.personnelCard}>
                        <div className={styles.avatarFrame}>
                            <img 
                                src={person.avatar} 
                                alt={person.name}
                                className={styles.avatar}
                            />
                        </div>
                        <div className={`${styles.role} mono`}>
                            {person.role}
                        </div>
                        <h3 className={`${styles.name} display-font`}>
                            {person.name}
                        </h3>
                        <p className={styles.description}>
                            {person.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PersonnelSection
