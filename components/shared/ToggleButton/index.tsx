
import styles from './index.module.css'

const ToggleButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={styles.toggleButton} {...props}>
            <div className={styles.toggleButtonTrack}>
                <div className={styles.toggleButtonThumb}></div>
            </div>
        </button>
    )
}

export default ToggleButton