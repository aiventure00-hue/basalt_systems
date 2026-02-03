import React from 'react'
import styles from './index.module.css'

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button {...props} className={styles.button}>
            {props.children}
        </button>
    )
}

export default Button