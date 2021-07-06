/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { Box } from '@material-ui/core'
import Image from 'next/image'
import Link from 'next/link'
import styles from './HomeModal.module.css'
import { useMetaMask } from '../../functions/metamask/MetamaskContext'
import { metamaskHandler } from '../../functions/metamask/metamask'
import StyledDialog from './StyledDialog'

const HomeModal = ({ isOpen, handleClose }) => {
    const [isInstalling, setIsInstalling] = useState(false)
    const { metamaskState } = useMetaMask()

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
                            <Image src="/assets/images/wallet-modal.png" width={200} height={195} />
                        </Box>
                        <h1>Click here to install MetaMask</h1>
                        <p>
                            In order to interact with our application, as intended, please connect
                            to your Metamask
                        </p>
                        <button
                            type="button"
                            className={styles.metamaskButton}
                            onClick={() => {
                                metamaskHandler(metamaskState.isMetamaskInstalled)
                                if (!metamaskState.isMetamaskInstalled) {
                                    setIsInstalling(true)
                                }
                            }}
                        >
                            {!isInstalling && <img src="assets/images/metamask.png" alt="" />}
                            {isInstalling && <h1>Installing...</h1>}
                        </button>
                        <Link href="#">
                            <a className={styles.helpLink}> Help </a>
                        </Link>
                    </Box>
                </Box>
            </StyledDialog>
        </>
    )
}

export default HomeModal
