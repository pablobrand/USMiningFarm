import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Box, Button, makeStyles } from '@material-ui/core'
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

    mobileNavItem: {
        color: '#fff',
        fontSize: '17px',
        fontWeight: 600
    }
})

const MobileMenu = () => {
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
            <Box className={`${styles.mobileMenu} ${isMenuExpanded ? styles.show : ''}`}>
                <Box className={styles.mobileNavListContainer}>
                    <Button className={`${path === '/' ? classes.active : ''}`}>
                        <Link href="/">
                            <a className={classes.mobileNavItem}>HOME</a>
                        </Link>
                    </Button>
                    <Button className={`${path === '/usmf-stake' ? classes.active : ''}`}>
                        <Link href="/usmf-stake">
                            <a className={classes.mobileNavItem}>USMF STAKE</a>
                        </Link>
                    </Button>
                    <Button className={`${path === '/lp-stake' ? classes.active : ''}`}>
                        <Link href="/lp-stake">
                            <a className={classes.mobileNavItem}>LP STAKE</a>
                        </Link>
                    </Button>
                </Box>
                <MobileAccountButton />
            </Box>
        </>
    )
}

export default MobileMenu
