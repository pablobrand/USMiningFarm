/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import Image from 'next/image'
import Link from 'next/link'
import styles from './HomeModal.module.css'
import { useMetaMask } from '../../functions/metamask/MetamaskContext'
import { metamaskHandler } from '../../functions/metamask/metamask'
import StyledDialog from '../StyledDialog/StyledDialog'
import useOnStateUpdate from '../../functions/hooks/useOnStateUpdate'

const HomeModal = ({ isOpen, handleClose }) => {
    const [isInstalling, setIsInstalling] = useState(false)
    const { metamaskState } = useMetaMask()

    const stateUpdateHandler = () => {
        if (metamaskState.walletAccount) {
            handleClose()
        }
    }

    useOnStateUpdate([metamaskState], stateUpdateHandler)

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
                        <Grid container justify="center" className={styles.modalImg}>
                            <Grid className={styles.modalImgContainer}>
                                <Image
                                    src="/assets/images/wallet-modal.png"
                                    width={332.32}
                                    height={321.94}
                                />
                            </Grid>
                        </Grid>
                        {metamaskState?.isMetamaskInstalled || (
                            <Typography variant="h2">CONNECT TO WALLET</Typography>
                        )}
                        <Typography variant="body2">
                            In order to interact with our application, as intended, please connect
                            to your Metamask
                        </Typography>
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
                            <a className={styles.helpLink}> Help? </a>
                        </Link>
                    </Box>
                </Box>
            </StyledDialog>
        </>
    )
}

export default HomeModal
