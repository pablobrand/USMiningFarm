/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-xs-12 col-sm-12">
                            <img
                                className="footer-logo"
                                src="assets/images/footer-logo.png"
                                alt=""
                            />
                        </div>
                        <div className="col-md-2 col-xs-12 col-sm-12">
                            <ul>
                                <h5> Company </h5>
                                <li>
                                    <a href="#"> Home </a>
                                </li>
                                <li>
                                    <a href="#"> About Us </a>
                                </li>
                                <li>
                                    <a href="#"> Support </a>
                                </li>
                                <li>
                                    <a href="#"> Blog </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-xs-12 col-sm-12">
                            <ul>
                                <h5> Get in Touch </h5>
                                <li>
                                    <a href="#"> info@usmf.com </a>
                                </li>
                                <li>
                                    <a href="#"> sales@usmf.com </a>
                                </li>
                                <h5 className="press"> Press </h5>
                                <li>
                                    <a href="#"> press@usmf.com </a>
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

                            <div className="social-icon-footer mt-4">
                                <img src="assets/images/in.png" alt="" />
                                <img src="assets/images/tw.png" alt="" />
                                <img src="assets/images/fb.png" alt="" />
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
                            <p className="text-right">
                                <a href="#" className="text-white">
                                    {' '}
                                    Privacy Policy{' '}
                                </a>{' '}
                                <a className="text-white" href="#">
                                    {' '}
                                    | FAQ{' '}
                                </a>{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
