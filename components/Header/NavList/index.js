import Link from 'next/link'
import { useRouter } from 'next/router'
import { Box, Button, makeStyles } from '@material-ui/core'
import styles from './NavList.module.css'

const useStyles = makeStyles({
    active: {
        padding: 0,
        borderRadius: '10px',
        backgroundImage: 'linear-gradient(to right, #b43838, #b8374d, #b83b61, #b54175, #ae4a87)'
    }
})

const NavList = () => {
    const classes = useStyles()
    const router = useRouter()
    const path = router.pathname

    return (
        <Box component="nav" className={styles.navList}>
            <Box className={styles.navListContainer}>
                <Button className={`${path === '/' ? classes.active : ''}`}>
                    <Link href="/">
                        <a className={styles.navItem}>HOME</a>
                    </Link>
                </Button>
                <Button className={`${path === '/usmf-stake' ? classes.active : ''}`}>
                    <Link href="/usmf-stake">
                        <a className={styles.navItem}>USMF STAKE</a>
                    </Link>
                </Button>
                <Button className={`${path === '/lp-stake' ? classes.active : ''}`}>
                    <Link href="/lp-stake">
                        <a className={styles.navItem}>LP STAKE</a>
                    </Link>
                </Button>
            </Box>
        </Box>
    )
}

export default NavList
