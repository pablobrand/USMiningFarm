import Image from 'next/image'
import { Box } from '@material-ui/core'
import styles from './DepositModal.module.css'
import StyledDialog from './StyledDialog'

const DepositModal = ({ isOpen, handleClose }) => {
    return (
        <>
            <StyledDialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <Box className={styles.modalContainer}>
                    <Box className={styles.modalHeader}>
                        <button className={styles.modalClose} type="button" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </Box>
                    <Box className={styles.modalBody}>
                        <Box className={styles.modalImg}>
                            <Image src="/assets/images/logo.png" width={100} height={100} />
                        </Box>
                        <h1>DEPOSIT USMF</h1>
                        <input
                            className={styles.modalInput}
                            type="text"
                            placeholder="USMF AMOUNT:"
                        />
                        <button type="button" className={styles.reviewButton}>
                            REVIEW DEPOSIT
                        </button>
                        <Box className={styles.arrow}>
                            <Image src="/assets/images/arrow.png" width={50} height={50} />
                        </Box>
                    </Box>
                </Box>
            </StyledDialog>
        </>
    )
}

export default DepositModal
