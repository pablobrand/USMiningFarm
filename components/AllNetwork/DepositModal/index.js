/* eslint-disable react/button-has-type */
import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import Image from 'next/image'
import { withStyles } from '@material-ui/core/styles'
import styles from './DepositModal.module.css'

const StyledDialog = withStyles({
    paper: {
        borderRadius: 20,
        width: 500
    }
})(Dialog)

const DepositModal = () => {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <button className={styles.tableButton} onClick={handleClickOpen}>
                DEPOSIT USMF LP
            </button>
            <StyledDialog
                classes={{ root: styles.root }}
                alignItems="center"
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <button type="button" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className={styles.modalLogo}>
                        <Image src="/assets/images/logo.png" width={100} height={100} />
                    </div>
                    <h1> DEPOSIT USMF TO WIN </h1>
                    <input type="text" className={styles.modalInput} placeholder="TICKET AMOUNT:" />
                    <button type="button" className={styles.reviewButton}>
                        {' '}
                        REVIEW DEPOSIT
                    </button>
                    <img src="assets/images/arrow.png" className={styles.backArrow} alt="" />
                </div>
            </StyledDialog>
        </>
    )
}

export default DepositModal
