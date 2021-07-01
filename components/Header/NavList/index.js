import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './NavList.module.css'

const NavList = () => {
    const router = useRouter()
    const path = router.pathname

    return (
        <nav className={styles.navList}>
            <div className={styles.navListContainer}>
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
                <Link href="/all-network">
                    <a
                        className={`${styles.navItem} ${
                            path === '/all-network' ? styles.active : ''
                        }`}
                    >
                        LP STAKE
                    </a>
                </Link>
            </div>
        </nav>
    )
}

export default NavList
