/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import Image from 'next/image'
import { Button, makeStyles } from '@material-ui/core'
import { useMetaMask } from '../../../../functions/metamask/MetamaskContext'

const useStyles = makeStyles({
    mobileAccountButtonStyles: {
        width: '100%',
        backgroundColor: '#3f3f3f',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '50px',
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
    }
})

const AccountButton = ({ handleOpen, isMenuExpanded }) => {
    const classes = useStyles()
    const {
        metamaskState: { walletAccount }
    } = useMetaMask()

    return (
        <Button
            disabled={!isMenuExpanded}
            className={classes.mobileAccountButtonStyles}
            onClick={handleOpen}
        >
            <Link href="#">
                <>
                    <Image src="/assets/images/account-icon.png" width={30} height={30} />
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
