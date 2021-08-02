/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from '@material-ui/core'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useMetaMask } from '../../functions/metamask/MetamaskContext'
import { addressTruncator } from '../../functions/utils'
import styles from './accountbutton.module.css'

const AccountButton = ({ handleOpen }) => {
    const [hovered, setHovered] = useState(false)
    const {
        metamaskState: { walletAccount },
        metamaskDispatch
    } = useMetaMask()

    const accountButtonHandler = () => {
        if (!walletAccount) {
            handleOpen()
        } else {
            localStorage.clear('walletAddress')
            metamaskDispatch({
                type: 'CHANGE_WALLET_ADDRESS',
                payload: null
            })
            metamaskDispatch({
                type: 'DISCONNECT',
                payload: true
            })
        }
    }

    return (
        <Button
            className={styles.accountButtonStyles}
            onClick={accountButtonHandler}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Link href="#">
                <>
                    <Image
                        src="/assets/images/account-icon.png"
                        className={styles.accountButtonLogo}
                        width={28.82}
                        height={28.75}
                    />
                    <a className={styles.accountLink}>
                        {!walletAccount
                            ? 'Connect Wallet'
                            : hovered
                            ? 'Disconnect Wallet'
                            : addressTruncator(walletAccount)}
                    </a>
                </>
            </Link>
        </Button>
    )
}

export default AccountButton
