import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Button, Grid, makeStyles } from '@material-ui/core'
import styles from './MobileMenu.module.css'
import MobileAccountButton from './MobileAccountButton'

const useStyles = makeStyles({
    active: {
        width: '100%',
        borderRadius: '10px',
        backgroundImage: 'linear-gradient(to right, #b43838, #b8374d, #b83b61, #b54175, #ae4a87)',
        color: '#fff',
        textDecoration: 'none'
    },

    mobileNavButton: {
        width: '100%'
    },

    mobileMenuContainer: {
        display: 'none'
    },

    mobileNavItem: {
        width: '100%',
        color: '#fff',
        fontSize: '17px',
        fontWeight: 600
    },

    mobileMenu: {
        display: 'block',
        opacity: 0,
        transition: 'all 0.3s ease-out',
        top: 0
    },

    mobileMenuShow: {
        display: 'block',
        width: '100%',
        opacity: 1,
        transition: 'all 0.3s ease-out',
        transform: 'translateY(25px)'
    },

    '@media (max-width: 767px)': {
        mobileMenu: {
            position: 'absolute',
            right: 0,
            left: 0,
            backgroundColor: '#f7a417',
            padding: '20px',
            borderRadius: '10px'
        },

        mobileMenuShow: {
            position: 'absolute',
            right: 0,
            left: 0,
            backgroundColor: '#f7a417',
            padding: '20px',
            borderRadius: '10px'
        },

        mobileMenuContainer: {
            display: 'block',
            width: '100%',
            position: 'relative',
            flexBasis: '100%',
            flexGrow: 1
        },

        mobileNavListContainer: {
            marginBottom: '10px'
        }
    }
})

const MobileMenu = ({ handleOpen }) => {
    const classes = useStyles()
    const [isMenuExpanded, setIsMenuExpanded] = useState(false)
    const router = useRouter()
    const path = router.pathname

    const handleClick = () => {
        setIsMenuExpanded((prevState) => {
            document.getElementById('mobileMenuToggle').ariaExpanded = !prevState
            return !prevState
        })
    }

    return (
        <>
            <button
                className={styles.mobileMenuToggle}
                type="button"
                onClick={handleClick}
                aria-expanded={isMenuExpanded}
                id="mobileMenuToggle"
            >
                <span className={styles.mobileMenuToggleIcon} />
            </button>
            <Grid container className={classes.mobileMenuContainer}>
                <Grid
                    container
                    item
                    className={`${isMenuExpanded ? classes.mobileMenuShow : classes.mobileMenu}`}
                >
                    <Grid item className={classes.mobileNavListContainer}>
                        <Button
                            disabled={!isMenuExpanded}
                            className={`${classes.mobileNavButton} ${
                                path === '/' ? classes.active : ''
                            }`}
                            onClick={() => {
                                setIsMenuExpanded(false)
                            }}
                        >
                            <Link href="/">
                                <a className={classes.mobileNavItem}>HOME</a>
                            </Link>
                        </Button>
                        <Button
                            disabled={!isMenuExpanded}
                            className={`${classes.mobileNavButton} ${
                                path === '/usmf-stake' ? classes.active : ''
                            }`}
                            onClick={() => {
                                setIsMenuExpanded(false)
                            }}
                        >
                            <Link href="/usmf-stake">
                                <a className={classes.mobileNavItem}>USMF STAKE</a>
                            </Link>
                        </Button>
                        <Button
                            disabled={!isMenuExpanded}
                            className={`${classes.mobileNavButton} ${
                                path === '/lp-stake' ? classes.active : ''
                            }`}
                            onClick={() => {
                                setIsMenuExpanded(false)
                            }}
                        >
                            <Link href="/lp-stake">
                                <a className={classes.mobileNavItem}>LP STAKE</a>
                            </Link>
                        </Button>
                    </Grid>
                    <MobileAccountButton isMenuExpanded={isMenuExpanded} handleOpen={handleOpen} />
                </Grid>
            </Grid>
        </>
    )
}

export default MobileMenu
