import React from 'react'
import styles from './index.module.css'

const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
    return (
        <textarea {...props} className={styles.textarea} />
    )
}

export default Textarea
