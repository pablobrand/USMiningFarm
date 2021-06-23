/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => {
    return (
        <div className="navigation-wrap start-header start-style" id="banner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-xs-12 col-sm-12">
                        <nav className="navbar navbar-expand-md navbar-dark">
                            <a className="navbar-brand" href="/" target="_blank">
                                <div className="logo_div">
                                    <img src="assets/images/logo.png" alt="" />
                                </div>
                            </a>

                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav center-nav text-center m-auto">
                                    <li className="nav-item pl-3 pl-md-0 ml-0 ml-md-3 active active--first">
                                        {' '}
                                        <a className="nav-link pl-4 pr-4 text-white" href="/">
                                            {' '}
                                            HOME{' '}
                                        </a>
                                    </li>
                                    <li className="nav-item pl-3 pl-md-0 ml-0 ml-md-3 pr-3">
                                        <a className="nav-link text-white" href="/usmf-stake">
                                            {' '}
                                            USMF STAKE{' '}
                                        </a>
                                    </li>
                                    <li className="nav-item pl-3 pl-md-0 ml-0 ml-md-2 pr-3">
                                        <a className="nav-link text-white" href="/all-network">
                                            {' '}
                                            LP STAKE{' '}
                                        </a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav right-nav">
                                    <li className="nav-item mr-1 ml-1 button-section text-center d-lg-block">
                                        <a className="nav-link text-white" href="#">
                                            {' '}
                                            <img
                                                className="mr-2"
                                                src="assets/images/account-icon.png"
                                                alt=""
                                            />{' '}
                                            OCXA 12........6665
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
