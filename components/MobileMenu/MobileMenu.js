import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Button, Grid } from '@material-ui/core'
import styles from './MobileMenu.module.css'
import MobileAccountButton from '../MobileAccountButton/MobileAccountButton'

const MobileMenu = ({ handleOpen }) => {
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
            <Grid container className={styles.mobileMenuContainer}>
                <Grid
                    container
                    item
                    className={`${isMenuExpanded ? styles.mobileMenuShow : styles.mobileMenu}`}
                >
                    <Grid container item className={styles.mobileNavListContainer}>
                        <Button
                            disabled={!isMenuExpanded}
                            className={`${styles.mobileNavButton} ${
                                path === '/' ? styles.active : ''
                            }`}
                            onClick={() => {
                                setIsMenuExpanded(false)
                            }}
                        >
                            <Link href="/">
                                <a className={styles.mobileNavItem}>HOME</a>
                            </Link>
                        </Button>
                        <Button
                            disabled={!isMenuExpanded}
                            className={`${styles.mobileNavButton} ${
                                path === '/usmf-stake' ? styles.active : ''
                            }`}
                            onClick={() => {
                                setIsMenuExpanded(false)
                            }}
                        >
                            <Link href="/usmf-stake">
                                <a className={styles.mobileNavItem}>USMF STAKE</a>
                            </Link>
                        </Button>
                        <Button
                            disabled={!isMenuExpanded}
                            className={`${styles.mobileNavButton} ${
                                path === '/lp-stake' ? styles.active : ''
                            }`}
                            onClick={() => {
                                setIsMenuExpanded(false)
                            }}
                        >
                            <Link href="/lp-stake">
                                <a className={styles.mobileNavItem}>LP STAKE</a>
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
