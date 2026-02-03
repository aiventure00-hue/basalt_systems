import styles from './index.module.css'

const CheckBox = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input type="checkbox" {...props} className={styles.checkbox} />
  )
}

export default CheckBox