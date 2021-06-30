import Image from 'next/image'
import useModal from './useModal'
import styles from './DepositModal.module.css'
import StyledDialog from './StyledDialog'

const DepositModal = () => {
    const { isOpen, handleClose, handleOpen } = useModal(false)

    return (
        <>
            <button type="button" className={styles.tableButton} onClick={handleOpen}>
                DEPOSIT USMF LP
            </button>
            <StyledDialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <div className={styles.modalContainer}>
                    <div className={styles.modalHeader}>
                        <button className={styles.modalClose} type="button" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className={styles.modalBody}>
                        <div className={styles.modalImg}>
                            <Image src="/assets/images/logo.png" width={100} height={100} />
                        </div>
                        <h1>DEPOSIT USMF TO WIN</h1>
                        <input
                            className={styles.modalInput}
                            type="text"
                            placeholder="TICKET AMOUNT:"
                        />
                        <button type="button" className={styles.reviewButton}>
                            REVIEW DEPOSIT
                        </button>
                        <div className={styles.arrow}>
                            <Image src="/assets/images/arrow.png" width={50} height={50} />
                        </div>
                    </div>
                </div>
            </StyledDialog>
        </>
    )
}

export default DepositModal
