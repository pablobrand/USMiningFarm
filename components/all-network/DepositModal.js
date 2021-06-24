const DepositModal = () => {
    return (
        <div className="col-md-6 col-xs-12 col-sm-12">
            <div
                className="modal fade"
                id="myModal3"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <button
                                type="button"
                                className="text-white close"
                                data-dismiss="modal"
                                aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img src="assets/images/logo.png" className="width-100" alt="" />
                            <h1 className="text-center text-white"> DEPOSIT USMF TO WIN </h1>

                            <input
                                type="text"
                                className="custom-input-modal d-block text-white border-0 font-weight-bold"
                                placeholder="TICKET AMOUNT:"
                            />
                            <button
                                type="button"
                                className="review-button font-weight-bold d-block border-0">
                                {' '}
                                REVIEW DEPOSIT
                            </button>

                            <img src="assets/images/arrow.png" className="back-arrow" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DepositModal
