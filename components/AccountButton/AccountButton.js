/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from '@material-ui/core'
import Link from 'next/link'
import Image from 'next/image'
import { useMetaMask } from '../../functions/metamask/MetamaskContext'
import { addressTruncator } from '../../functions/utils'
import styles from './accountbutton.module.css'

const AccountButton = ({ handleOpen }) => {
    const {
        metamaskState: { walletAccount }
    } = useMetaMask()

    return (
        <Button
            className={styles.accountButtonStyles}
            onClick={handleOpen}
            disabled={Boolean(walletAccount)}
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
                        {!walletAccount ? 'Connect Wallet' : addressTruncator(walletAccount)}
                    </a>
                </>
            </Link>
        </Button>
    )
}

export default AccountButton
