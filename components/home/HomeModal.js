import { useState } from 'react'
import { metamaskHandler } from '../../functions/metamask/metamask'
import { useMetaMask } from '../../functions/metamask/MetamaskContext'

/* eslint-disable jsx-a11y/anchor-is-valid */
const HomeModal = () => {
    const [isInstalling, setIsInstalling] = useState(false)
    const { metamaskState } = useMetaMask()
    return (
        <>
            <div className="col-md-6 col-xs-12 col-sm-12">
                <div
                    className="modal fade"
                    id="myModal2"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="myModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button
                                    type="button"
                                    className="text-white close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img src="assets/images/wallet-modal.png" alt="" />
                                <h1 className="text-center text-white">
                                    {' '}
                                    {metamaskState.isMetamaskInstalled && 'CONNECT TO WALLET'}
                                    {!metamaskState.isMetamaskInstalled &&
                                        'Click here to install MetaMask'}
                                </h1>
                                <p className="text-center text-white">
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                    commodo ligula eget dolor.
                                </p>
                                <button
                                    type="button"
                                    style={{
                                        background: 'none',
                                        outline: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        display: 'block',
                                        margin: '0 auto'
                                    }}
                                    onClick={() => {
                                        metamaskHandler(metamaskState.isMetamaskInstalled)
                                        if (!metamaskState.isMetamaskInstalled) {
                                            setIsInstalling(true)
                                        }
                                    }}
                                >
                                    {!isInstalling && (
                                        <img src="assets/images/metamask.png" alt="" />
                                    )}
                                    {isInstalling && <h1>Installing...</h1>}
                                </button>
                                <a href="#" className="text-white m-auto text-center d-block">
                                    {' '}
                                    Help{' '}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-xs-12 col-sm-12">
                <div
                    className="modal fade"
                    id="myModal3"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="myModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button
                                    type="button"
                                    className="text-white close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
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
                                    className="review-button font-weight-bold d-block border-0"
                                >
                                    {' '}
                                    REVIEW DEPOSIT
                                </button>

                                <img src="assets/images/arrow.png" className="back-arrow" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeModal
