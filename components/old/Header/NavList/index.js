import Link from 'next/link'
import { useRouter } from 'next/router'
import { Grid, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    active: {
        padding: 0,
        borderRadius: '10px',
        backgroundImage: 'linear-gradient(to right, #b43838, #b8374d, #b83b61, #b54175, #ae4a87)'
    },

    navList: {
        position: 'absolute',
        left: 'calc(50% - 250px)'
    },

    navListContainer: {
        width: '500px'
    },

    navItem: {
        color: '#fff',
        padding: '0px 1.5rem',
        fontSize: '17px',
        fontWeight: 600
    },

    '@media (max-width: 767px)': {
        navList: {
            display: 'none'
        }
    },

    '@media (max-width: 991px)': {
        navList: {
            left: 'calc(50% - 320px)'
        }
    }
})

const NavList = () => {
    const classes = useStyles()
    const router = useRouter()
    const path = router.pathname

    return (
        <Grid container component="nav" className={classes.navList}>
            <Grid
                container
                item
                justify="center"
                alignItems="center"
                className={classes.navListContainer}
                spacing={2}
            >
                <Grid item>
                    <Button
                        className={`${path === '/' ? classes.active : ''}`}
                        style={{ padding: 0, borderRadius: '10px' }}
                    >
                        <Link href="/">
                            <a className={classes.navItem}>HOME</a>
                        </Link>
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        className={`${path === '/usmf-stake' ? classes.active : ''}`}
                        style={{ padding: 0, borderRadius: '10px' }}
                    >
                        <Link href="/usmf-stake">
                            <a className={classes.navItem}>USMF STAKE</a>
                        </Link>
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        className={`${path === '/lp-stake' ? classes.active : ''}`}
                        style={{ padding: 0, borderRadius: '10px' }}
                    >
                        <Link href="/lp-stake">
                            <a className={classes.navItem}>LP STAKE</a>
                        </Link>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default NavList
