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
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.contactForm}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        
        <div className={styles.formGroup}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        
        <div className={styles.formGroup}>
          <textarea
            name="problem"
            placeholder="What problem are you trying to solve?"
            value={formData.problem}
            onChange={handleChange}
            required
            rows={3}
            className={styles.textarea}
          />
        </div>
        
        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
      
      <div className={styles.expectation}>
        <p>We reply within 48h</p>
      </div>
      
      <div className={styles.notFitSection}>
        <h4>Not a fit if...</h4>
        <ul>
          <li>Budget under €1,000</li>
          <li>Need it done tonight</li>
          <li>Idea-only stage</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactForm;
