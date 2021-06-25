/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-xs-12 col-sm-12">
                            <Image
                                className="footer-logo"
                                src="/assets/images/footer-logo.png"
                                width={120}
                                height={120}
                            />
                        </div>
                        <div className="col-md-2 col-xs-12 col-sm-12">
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
                        <div className="col-md-3 col-xs-12 col-sm-12">
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
                                <h5 className="press"> Press </h5>
                                <li>
                                    <Link href="#">
                                        <a> press@usmf.com </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-xs-12 col-sm-12">
                            <ul>
                                <h5> Subscribe to Our Newsletter </h5>
                            </ul>
                            <p> Subscribe To Newsletter To Stay Up To Date On Our Latest News </p>
                            <form className="search-wrapper cf">
                                <input type="text" placeholder="Email..." />
                                <button type="submit"> Subscribe </button>
                            </form>

                            <div className={`social-icon-footer mt-4 ${styles.img}`}>
                                <Image src="/assets/images/in.png" width={30} height={30} />
                                <Image src="/assets/images/tw.png" width={30} height={30} />
                                <Image src="/assets/images/fb.png" width={30} height={30} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-line">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-xs-12 col-sm-12">
                            <p className="text-white"> © 2021 usmf. All rights reserved. </p>
                        </div>
                        <div className="col-md-6 col-xs-12 col-sm-12">
                            <p className="text-right text-white">
                                <Link href="#">
                                    <a className="text-white"> Privacy Policy </a>
                                </Link>
                                <Link href="#">
                                    <a className="text-white">| FAQ </a>
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
