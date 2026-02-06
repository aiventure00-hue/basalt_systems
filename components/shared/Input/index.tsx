import React from 'react'
import styles from './index.module.css'

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input {...props} className={styles.input} />
  )
}

export default Input