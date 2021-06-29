import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import { useMetaMask } from '../../../functions/metamask/MetamaskContext'
import { metamaskHandler } from '../../../functions/metamask/metamask'
import styles from './HomeModal.module.css'

const StyledDialog = withStyles({
    paper: {
        borderRadius: 20,
        backgroundImage: 'linear-gradient(to right, #b43838, #b8374d, #b83b61, #b54175, #ae4a87)',
        maxWidth: 500
    }
})(Dialog)

/* eslint-disable jsx-a11y/anchor-is-valid */
const HomeModal = () => {
    const [isInstalling, setIsInstalling] = useState(false)
    const { metamaskState } = useMetaMask()

    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        handleClickOpen()
    }, [])

    return (
        <>
            <StyledDialog
                alignItems="center"
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <div className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                        <button type="button" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className={styles.modalBody}>
                        <img src="assets/images/wallet-modal.png" alt="" />
                        <h1>
                            {' '}
                            {metamaskState.isMetamaskInstalled && 'CONNECT TO WALLET'}
                            {!metamaskState.isMetamaskInstalled && 'Click here to install MetaMask'}
                        </h1>
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
                        <a href="#" className={styles.helpLink}>
                            {' '}
                            Help{' '}
                        </a>
                    </div>
                </div>
            </StyledDialog>
        </>
    )
}

export default HomeModal
