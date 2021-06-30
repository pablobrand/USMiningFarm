/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import Table from './Table'
import Dropdown from '../Dropdown'

const TableSection = () => {
    return (
        <section className="table-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-xs-12 col-xs-12">
                        <div className="margin-30 stake-button">
                            <button> LP STAKE </button>
                        </div>
                    </div>

                    <div className="col-md-6 col-xs-12 col-xs-12">
                        <div className="form-group network-dropdown">
                            <div className="dropdown">
                                <Dropdown />
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="#"> Lorem </a>
                                    </li>
                                    <li>
                                        <a href="#"> Lorem </a>
                                    </li>
                                    <li>
                                        <a href="#"> Lorem </a>
                                    </li>
                                    <li>
                                        <a href="#"> Lorem </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tables */}
                <Table />
            </div>
        </section>
    )
}

export default TableSection
