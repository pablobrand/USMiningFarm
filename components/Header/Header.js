import Image from 'next/image'
import { AppBar, Toolbar, Grid } from '@material-ui/core'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import NavList from '../NavList/NavList'
import AccountButton from '../AccountButton/AccountButton'
import HomeModal from '../HomeModal/HomeModal'
import useModal from '../../functions/hooks/useModal'
import styles from './header.module.css'

const Header = () => {
    const { isOpen, handleClose, handleOpen } = useModal()

    return (
        <AppBar className={styles.appBar} id="banner">
            <Toolbar disableGutters>
                <Grid
                    container
                    justify="space-between"
                    alignItems="center"
                    className={styles.headerContainer}
                >
                    <Grid item className={styles.headerImgContainer}>
                        <Link href="/">
                            <Image
                                src="/assets/images/logo.png"
                                width={112}
                                height={112}
                                className={styles.brandLogo}
                            />
                        </Link>
                    </Grid>
                    <NavList />
                    <AccountButton handleOpen={handleOpen} />
                    <MobileMenu handleOpen={handleOpen} />
                    <HomeModal isOpen={isOpen} handleClose={handleClose} />
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header
