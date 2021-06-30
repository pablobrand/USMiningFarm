/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image'
import styles from './Header.module.css'
import MobileMenu from './MobileMenu'
import NavList from './NavList'
import AccountButton from './AccountButton'

const Header = () => {
    return (
        <div className={styles.header} id="banner">
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image src="/assets/images/logo.png" width={60} height={60} />
                </div>
                <NavList />
                <AccountButton />
                <MobileMenu />
            </div>
        </div>
    )
}

export default Header
