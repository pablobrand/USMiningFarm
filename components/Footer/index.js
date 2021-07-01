/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footerContainer}>
                    <div className={styles.row}>
                        <div className={styles.col3}>
                            <Image src="/assets/images/footer-logo.png" width={120} height={120} />
                        </div>
                        <div className={styles.col2}>
                            <ul>
                                <h5> Company </h5>
                                <li>
                                    <Link href="#">
                                        <a> Home </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a> About Us </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a> Support </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a> Blog </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.col2}>
                            <ul>
                                <h5> Get in Touch </h5>
                                <li>
                                    <Link href="#">
                                        <a> info@usmf.com </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a> sales@usmf.com </a>
                                    </Link>
                                </li>
                                <h5 className={styles.press}> Press </h5>
                                <li>
                                    <Link href="#">
                                        <a> press@usmf.com </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.col4}>
                            <ul>
                                <h5> Subscribe to Our Newsletter </h5>
                            </ul>
                            <p> Subscribe To Newsletter To Stay Up To Date On Our Latest News </p>
                            <form className={styles.searchWrapper}>
                                <input type="text" placeholder="Email..." />
                                <button type="submit"> Subscribe </button>
                            </form>

                            <div className={styles.socialIcons}>
                                <Image src="/assets/images/in.png" width={30} height={30} />
                                <Image src="/assets/images/tw.png" width={30} height={30} />
                                <Image src="/assets/images/fb.png" width={30} height={30} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.creditContainer}>
                <div className={styles.footerContainer}>
                    <div className={styles.creditRow}>
                        <div>
                            <p> © 2021 usmf. All rights reserved. </p>
                        </div>
                        <div>
                            <p>
                                <Link href="#">
                                    <a> Privacy Policy </a>
                                </Link>
                                <Link href="#">
                                    <a>| FAQ </a>
                                </Link>{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
