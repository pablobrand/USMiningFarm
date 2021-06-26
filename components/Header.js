import Image from 'next/image'
import NavBar from './NavBar'

function Header() {
    return (
        <div className="navigation-wrap start-header start-style" id="banner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-xs-12 col-sm-12">
                        <nav className="navbar navbar-expand-md navbar-dark">
                            <a className="navbar-brand" href="/">
                                <div className="logo_div">
                                    <Image src="/assets/images/logo.png" width={60} height={60} />
                                </div>
                            </a>

                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <NavBar />
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
