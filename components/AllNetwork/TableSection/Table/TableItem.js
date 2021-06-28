/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import DepositModal from '../../DepositModal'

const TableItem = () => {
    const showModal = () => {
        $(document).ready(function () {
            $('#myModal3').modal('show')
        })
    }

    return (
        <div className="mt-4">
            <div className="row m-0">
                <div className="col-md-4 col-xs-12 col-sm-12 triangle-4">
                    <div className="triangle">
                        <div className="row p-7">
                            <div className="col-md-4 col-6 p-0">
                                <img className="w-50" src="assets/images/logo.png" alt="" />
                                <h3 className="font-weight-bold text-white"> UNISWAP </h3>
                            </div>
                            <div className="col-md-8 col-6">
                                <h1 className="font-weight-bold text-white"> $54,934 </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 col-xs-12 col-sm-12 triangle-6">
                    <div className="triangle">
                        <div className="row p-6">
                            <div className="col-md-12 col-xs-12 col-sm-12">
                                <h3 className="text-white font-weight-bold text-center">
                                    {' '}
                                    CURRENT USMF APR{' '}
                                </h3>
                                <div className="padding--setting">
                                    <button
                                        className="custom-input"
                                        onClick={(event) => showModal(event)}
                                    >
                                        DEPOSIT USMF LP
                                    </button>
                                    <div className="validation"> EARN 11.35% APR IN POOL </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DepositModal id={3} />
        </div>
    )
}

export default TableItem