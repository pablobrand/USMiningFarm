/* eslint-disable react/button-has-type */
import styles from './ValueSection.module.css'

const ValueSection = () => {
    return (
        <section className={styles.valueSection}>
            <div className={styles.valueSectionRow}>
                <div className={styles.totalStakedText}>
                    <h2>
                        TOTAL STAKED VALUE: <span> $0 </span>
                    </h2>
                </div>
                <div className={styles.valueSectionButton}>
                    <button> BUY USMF </button>
                </div>
            </div>
        </section>
    )
}

export default ValueSection
