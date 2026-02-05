'use client'

import { useState } from 'react';
import styles from './index.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    problem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.formContainer}>
        <div className={styles.protocolHeader}>
          <span className="mono">/// TRANSMISSION_FORM</span>
        </div>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={`${styles.label} mono`}>IDENTIFIER</label>
            <input
              type="text"
              name="name"
              placeholder="Enter designation"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          
          <div className={styles.formGroup}>
            <label className={`${styles.label} mono`}>COMMUNICATION_CHANNEL</label>
            <input
              type="email"
              name="email"
              placeholder="secure.channel@domain"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          
          <div className={styles.formGroup}>
            <label className={`${styles.label} mono`}>PROTOCOL_DESCRIPTION</label>
            <textarea
              name="problem"
              placeholder="Describe the system requirements..."
              value={formData.problem}
              onChange={handleChange}
              required
              rows={4}
              className={styles.textarea}
            />
          </div>
          
          <button type="submit" className={`${styles.submitButton} mono`}>
            TRANSMIT_REQUEST
          </button>
        </form>
      </div>
      
      <div className={styles.specifications}>
        <div className={styles.specHeader}>
          <span className="mono">/// SYSTEM_SPECIFICATIONS</span>
        </div>
        
        <div className={styles.responseTime}>
          <div className={`${styles.specItem} mono`}>
            <span className={styles.specLabel}>RESPONSE_TIME:</span>
            <span className={styles.specValue}>48H_MAX</span>
          </div>
          <div className={`${styles.specItem} mono`}>
            <span className={styles.specLabel}>ENCRYPTION:</span>
            <span className={styles.specValue}>AES-256</span>
          </div>
          <div className={`${styles.specItem} mono`}>
            <span className={styles.specLabel}>STATUS:</span>
            <span className={styles.specValue}>ACTIVE</span>
          </div>
        </div>
        
        <div className={styles.constraints}>
          <div className={styles.constraintsHeader}>
            <span className="mono">/// CONSTRAINTS</span>
          </div>
          <ul className={styles.constraintsList}>
            <li className="mono">BUDGET_MINIMUM: €1,000</li>
            <li className="mono">TIMEFRAME: 2+ weeks</li>
            <li className="mono">REQUIREMENT: Defined scope</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
