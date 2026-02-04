import React from 'react'
import styles from './index.module.css'

const buttonVariants = {
    primary: styles.primary,
    secondary: styles.secondary,
} as const

type ButtonVariant = keyof typeof buttonVariants

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }) => {
    const { variant = 'primary', ...rest } = props
    return (
        <button {...rest} className={`${styles.button} ${buttonVariants[variant]}`}>
            {props.children}
        </button>
    )
}

export default Button