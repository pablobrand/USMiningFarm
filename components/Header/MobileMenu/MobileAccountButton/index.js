/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import Image from 'next/image'
import { Button, makeStyles } from '@material-ui/core'
import { useMetaMask } from '../../../../functions/metamask/MetamaskContext'
import styles from './AccountButton.module.css'

const useStyles = makeStyles({
    mobileAccountButtonStyles: {
        width: '100%',
        backgroundColor: '#3f3f3f',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '50px',
        textAlign: 'center'
    }
})

const AccountButton = ({ handleOpen }) => {
    const classes = useStyles()
    const {
        metamaskState: { walletAccount }
    } = useMetaMask()

    return (
        <Button className={classes.mobileAccountButtonStyles} onClick={handleOpen}>
            <Link href="#">
                <a className={styles.accountLink}>
                    <Image src="/assets/images/account-icon.png" width={30} height={30} />
                    {!walletAccount && 'Connect Wallet'}
                    {walletAccount && 'OCXA12........6665'}
                </a>
            </Link>
        </Button>
    )
}

export default AccountButton
