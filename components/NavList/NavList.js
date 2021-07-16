import Link from 'next/link'
import { useRouter } from 'next/router'
import { Grid, Button } from '@material-ui/core'
import styles from './navlist.module.css'

const NavList = () => {
    const router = useRouter()
    const path = router.pathname

    return (
        <Grid container component="nav" className={styles.navList}>
            <Grid
                container
                item
                justify="center"
                alignItems="center"
                className={styles.navListContainer}
                spacing={2}
            >
                <Grid item>
                    <Button
                        className={`${path === '/' ? styles.active : ''}`}
                        style={{ padding: 0, borderRadius: '10px' }}
                    >
                        <Link href="/">
                            <a className={styles.navItem}>HOME</a>
                        </Link>
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        className={`${path === '/usmf-stake' ? styles.active : ''}`}
                        style={{ padding: 0, borderRadius: '10px' }}
                    >
                        <Link href="/usmf-stake">
                            <a className={styles.navItem}>USMF STAKE</a>
                        </Link>
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        className={`${path === '/lp-stake' ? styles.active : ''}`}
                        style={{ padding: 0, borderRadius: '10px' }}
                    >
                        <Link href="/lp-stake">
                            <a className={styles.navItem}>LP STAKE</a>
                        </Link>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default NavList
