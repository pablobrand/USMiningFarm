/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@material-ui/core'
import { useMetaMask } from '../../functions/metamask/MetamaskContext'
import styles from './mobileaccountbutton.module.css'

const AccountButton = ({ handleOpen, isMenuExpanded }) => {
    const {
        metamaskState: { walletAccount }
    } = useMetaMask()

    return (
        <Button
            disabled={!isMenuExpanded}
            className={styles.mobileAccountButtonStyles}
            onClick={handleOpen}
        >
            <Link href="#">
                <>
                    <Image src="/assets/images/account-icon.png" width={30} height={30} />
                    <a className={styles.accountLink}>
                        {!walletAccount && 'Connect Wallet'}
                        {walletAccount && walletAccount}
                    </a>
                </>
            </Link>
        </Button>
    )
}

export default AccountButton
