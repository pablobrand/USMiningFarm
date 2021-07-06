import Image from 'next/image'
import { Box } from '@material-ui/core'
import styles from './Header.module.css'
import MobileMenu from './MobileMenu'
import NavList from './NavList'
import AccountButton from './AccountButton'
import HomeModal from '../HomeModal'
import useModal from '../HomeModal/useModal'

const Header = () => {
    const { isOpen, handleClose, handleOpen } = useModal()

    return (
        <Box className={styles.header} id="banner">
            <Box className={styles.container}>
                <Box className={styles.logo}>
                    <Image src="/assets/images/logo.png" width={60} height={60} />
                </Box>
                <NavList />
                <AccountButton handleOpen={handleOpen} />
                <MobileMenu handleOpen={handleOpen} />
                <HomeModal isOpen={isOpen} handleClose={handleClose} />
            </Box>
        </Box>
    )
}

export default Header
