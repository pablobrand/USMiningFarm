/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, makeStyles } from '@material-ui/core'
import Link from 'next/link'
import Image from 'next/image'
import { useMetaMask } from '../../../functions/metamask/MetamaskContext'
import styles from './AccountButton.module.css'

const useStyles = makeStyles({
    accountButtonStyles: {
        backgroundColor: '#3f3f3f',
        fontFamily: 'inherit',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '50px',
        border: 'none',
        textAlign: 'center'
    },

    '@media (max-width: 767px)': {
        accountButtonStyles: {
            display: 'none'
        }
    }
})

const AccountButton = ({ handleOpen }) => {
    const classes = useStyles()
    const {
        metamaskState: { walletAccount }
    } = useMetaMask()

    return (
        <Button className={classes.accountButtonStyles} onClick={handleOpen}>
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
