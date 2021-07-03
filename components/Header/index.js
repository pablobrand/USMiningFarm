import Image from 'next/image'
import { Box } from '@material-ui/core'
import styles from './Header.module.css'
import MobileMenu from './MobileMenu'
import NavList from './NavList'
import HomeModal from '../HomeModal'

const Header = () => {
    return (
        <Box className={styles.header} id="banner">
            <Box className={styles.container}>
                <Box className={styles.logo}>
                    <Image src="/assets/images/logo.png" width={60} height={60} />
                </Box>
                <NavList />
                <HomeModal />
                <MobileMenu />
            </Box>
        </Box>
    )
}

export default Header
