import Image from 'next/image'
import { Grid, Typography } from '@material-ui/core'
import styles from './DepositModal.module.css'
import StyledDialog from '../StyledDialog/StyledDialog'

const DepositModal = ({ isOpen, handleClose }) => {
    return (
        <>
            <StyledDialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <Grid container className={styles.modalContainer}>
                    <Grid container item justify="flex-end" className={styles.modalHeader}>
                        <button className={styles.modalClose} type="button" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </Grid>
                    <Grid container item justify="center" className={styles.modalBody}>
                        <Grid container justify="center">
                            <Grid className={styles.modalImg}>
                                <Image src="/assets/images/logo.png" width={200} height={200} />
                            </Grid>
                        </Grid>
                        <Typography variant="h2">DEPOSIT USMF</Typography>
                        <input
                            className={styles.modalInput}
                            type="text"
                            placeholder="USMF AMOUNT:"
                        />
                        <button type="button" className={styles.reviewButton}>
                            REVIEW DEPOSIT
                        </button>
                        <Grid
                            container
                            justify="center"
                            alignItem="center"
                            className={styles.arrow}
                        >
                            <Image src="/assets/images/arrow.png" width={50} height={50} />
                        </Grid>
                    </Grid>
                </Grid>
            </StyledDialog>
        </>
    )
}

export default DepositModal
