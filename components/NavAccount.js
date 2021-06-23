import { Typography, Link } from '@material-ui/core'
import Image from 'next/image'
import navAccountStyles from '../styles/NavAccount.module.css'

function NavAccount() {
    return (
        <nav className={navAccountStyles.nav}>
            <Link style={{ color: 'white' }}>
                <Image src="/account-icon.png" layout="fixed" width={25} height={26.14} />
                <Typography>OCXA 12.......6665</Typography>
            </Link>
        </nav>
    )
}

export default NavAccount
