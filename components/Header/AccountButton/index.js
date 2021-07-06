/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, makeStyles } from '@material-ui/core'
import Link from 'next/link'
import Image from 'next/image'
import { useMetaMask } from '../../../functions/metamask/MetamaskContext'

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

    accountLink: {
        display: 'flex',
        justifyContent: 'center',
        alignTtems: 'center',
        fontSize: '17px',
        fontWeight: 600,
        color: '#fff',
        marginLeft: '8px'
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
                <>
                    <Image
                        src="/assets/images/account-icon.png"
                        className={classes.accountButtonLogo}
                        width={30}
                        height={30}
                    />
                    <a className={classes.accountLink}>
                        {!walletAccount && 'Connect Wallet'}
                        {walletAccount && walletAccount}
                    </a>
                </>
            </Link>
        </Button>
    )
}

export default AccountButton
