import Image from 'next/image'
import { AppBar, Toolbar, Grid, makeStyles } from '@material-ui/core'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import NavList from './NavList'
import AccountButton from './AccountButton'
import HomeModal from '../HomeModal'
import useModal from '../HomeModal/useModal'

const useStyles = makeStyles({
    appBar: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        transition: 'all .3s ease-out',
        padding: 0
    },

    headerContainer: {
        padding: '1rem 60px'
    },

    '@media (max-width: 767px)': {
        headerContainer: {
            padding: '1rem 24px'
        }
    }
})

const Header = () => {
    const classes = useStyles()
    const { isOpen, handleClose, handleOpen } = useModal()

    return (
        <AppBar className={classes.appBar} id="banner">
            <Toolbar disableGutters>
                <Grid
                    container
                    justify="space-between"
                    alignItems="center"
                    className={classes.headerContainer}
                >
                    <Grid item>
                        <Link href="/">
                            <Image src="/assets/images/logo.png" width={60} height={60} />
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
