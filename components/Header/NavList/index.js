import Link from 'next/link'
import { useRouter } from 'next/router'
import { Box } from '@material-ui/core'
import styles from './NavList.module.css'

const NavList = () => {
    const router = useRouter()
    const path = router.pathname

    return (
        <Box component="nav" className={styles.navList}>
            <Box className={styles.navListContainer}>
                <Link href="/">
                    <a className={`${styles.navItem} ${path === '/' ? styles.active : ''}`}>HOME</a>
                </Link>
                <Link href="/usmf-stake">
                    <a
                        className={`${styles.navItem} ${
                            path === '/usmf-stake' ? styles.active : ''
                        }`}
                    >
                        USMF STAKE
                    </a>
                </Link>
                <Link href="/lp-stake">
                    <a className={`${styles.navItem} ${path === '/lp-stake' ? styles.active : ''}`}>
                        LP STAKE
                    </a>
                </Link>
            </Box>
        </Box>
    )
}

export default NavList
