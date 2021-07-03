import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Box } from '@material-ui/core'
import styles from './MobileMenu.module.css'
import MobileAccountButton from './MobileAccountButton'

const MobileMenu = () => {
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
                    <Link href="/">
                        <a
                            className={`${styles.mobileNavItem} ${
                                path === '/' ? styles.active : ''
                            }`}
                        >
                            HOME
                        </a>
                    </Link>
                    <Link href="/usmf-stake">
                        <a
                            className={`${styles.mobileNavItem} ${
                                path === '/usmf-stake' ? styles.active : ''
                            }`}
                        >
                            USMF STAKE
                        </a>
                    </Link>
                    <Link href="/all-network">
                        <a
                            className={`${styles.mobileNavItem} ${
                                path === '/all-network' ? styles.active : ''
                            }`}
                        >
                            LP STAKE
                        </a>
                    </Link>
                </Box>
                <MobileAccountButton />
            </Box>
        </>
    )
}

export default MobileMenu
