/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMetaMask } from '../functions/metamask/MetamaskContext'
import styles from '../styles/NavBar.module.css'

function NavBar() {
    const {
        metamaskState: { walletAccount }
    } = useMetaMask()
    const router = useRouter()
    const path = router.pathname

    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav center-nav text-center m-auto">
                <li className={`nav-item ${styles.navItem} ${path === '/' ? styles.active : ''}`}>
                    <Link href="/">
                        <a className="nav-link text-white">HOME</a>
                    </Link>
                </li>
                <li
                    className={`nav-item ${styles.navItem} ${
                        path === '/usmf-stake' ? styles.active : ''
                    }`}
                >
                    <Link href="/usmf-stake">
                        <a className="nav-link text-white">USMF STAKE</a>
                    </Link>
                </li>
                <li
                    className={`nav-item ${styles.navItem} ${
                        path === '/all-network' ? styles.active : ''
                    }`}
                >
                    <Link href="/all-network">
                        <a className="nav-link text-white">LP STAKE</a>
                    </Link>
                </li>
            </ul>
            <ul className="navbar-nav right-nav">
                <li className="nav-item mr-1 ml-1 button-section text-center d-lg-block">
                    <a className="nav-link text-white" href="#">
                        {' '}
                        <img className="mr-2" src="assets/images/account-icon.png" alt="" />
                        {!walletAccount && 'Connect Wallet'}
                        {walletAccount && 'OCXA12........6665'}
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
