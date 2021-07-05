/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import Image from 'next/image'
import { useMetaMask } from '../../../../functions/metamask/MetamaskContext'
import styles from './AccountButton.module.css'

const AccountButton = () => {
    const {
        metamaskState: { walletAccount }
    } = useMetaMask()

    return (
        <div className={styles.accountButton}>
            <Link href="#">
                <a className={styles.accountLink}>
                    <Image src="/assets/images/account-icon.png" width={30} height={30} />
                    {!walletAccount && 'Connect Wallet'}
                    {walletAccount && walletAccount}
                </a>
            </Link>
        </div>
    )
}

export default AccountButton
