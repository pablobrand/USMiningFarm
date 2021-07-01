/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import Image from 'next/image'
import { useMetaMask } from '../../../functions/metamask/MetamaskContext'
import styles from './AccountButton.module.css'

const AccountButton = ({ handleOpen }) => {
    const {
        metamaskState: { walletAccount }
    } = useMetaMask()

    return (
        <button type="button" className={styles.accountButton} onClick={handleOpen}>
            <Link href="#">
                <a className={styles.accountLink}>
                    <Image src="/assets/images/account-icon.png" width={30} height={30} />
                    {!walletAccount && 'Connect Wallet'}
                    {walletAccount && 'OCXA12........6665'}
                </a>
            </Link>
        </button>
    )
}

export default AccountButton
