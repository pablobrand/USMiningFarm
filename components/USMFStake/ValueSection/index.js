/* eslint-disable react/button-has-type */
import { Button } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import styles from './ValueSection.module.css'

const ValueSection = () => {
    return (
        <Box component="section" className={styles.valueSection}>
            <Box className={styles.valueSectionRow}>
                <Box className={styles.totalStakedText}>
                    <h2>
                        TOTAL STAKED VALUE: <span> $0 </span>
                    </h2>
                </Box>
                <Box className={styles.valueSectionButton}>
                    <Button>BUY USMF</Button>
                </Box>
            </Box>
        </Box>
    )
}

/* <section className={styles.valueSection}>
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
</section> */

export default ValueSection
