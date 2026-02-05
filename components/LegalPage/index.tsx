import React from 'react'
import styles from './index.module.css'

interface LegalSection {
  title: string
  content: string
}

interface LegalPageProps {
  title: string
  subtitle: string
  sections: LegalSection[]
  lastUpdated: string
}

const LegalPage = ({ title, subtitle, sections, lastUpdated }: LegalPageProps) => {
  return (
    <div className={styles.legalPage}>
      <div className={styles.header}>
        <div className={`${styles.sectionLabel} mono`}>
          /// LEGAL_PROTOCOL
        </div>
        <h1 className={`${styles.pageTitle} display-font`}>
          {title}
        </h1>
        <div className={`${styles.subtitle} mono`}>
          {subtitle}
        </div>
        <div className={`${styles.lastUpdated} mono`}>
          PROTOCOL_UPDATED: {lastUpdated}
        </div>
      </div>

      <div className={styles.content}>
        {sections.map((section, index) => (
          <div key={index} className={styles.section}>
            <div className={`${styles.sectionHeader} mono`}>
              <span className={styles.sectionNumber}>
                {String(index + 1).padStart(2, '0')}
              </span>
              {section.title.toUpperCase()}
            </div>
            <div className={styles.sectionContent}>
              {section.content}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <div className={`${styles.footerNote} mono`}>
          /// END_OF_PROTOCOL
        </div>
        <div className={`${styles.compliance} mono`}>
          STATUS: ACTIVE | COMPLIANCE: GDPR_COMPLIANT | JURISDICTION: EU
        </div>
      </div>
    </div>
  )
}

export default LegalPage
