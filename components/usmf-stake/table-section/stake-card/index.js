/* eslint-disable react/button-has-type */

const StakeCard = () => {
    return (
        <div className="col-md-4 col-xs-12 col-xs-12">
            <div className="bg-grey-type">
                <div className="row padding-20 m-0 border-bottom">
                    <div className="col-md-2 col-xs-6 col-sm-6">
                        <img className="small-image" src="assets/images/logo.png" alt="" />
                    </div>
                    <div className="col-md-10 col-xs-6 col-sm-6">
                        <h2 className="pl-3 font-weight-bold mb-0 right-side-text">
                            TYPE1 <br />{' '}
                            <span className="text-white font-weight-bold"> OM - STAKING </span>{' '}
                        </h2>
                    </div>
                </div>

                <div className="row padding-0-20 m-0">
                    <div className="col-md-6 col-6">
                        <p className="mb-0 text-white font-weight-bold"> YOUR BALANCE </p>
                    </div>
                    <div className="col-md-6 col-6">
                        <p className="mb-0 text-right font-weight-bold text-white"> 0 OM </p>
                    </div>
                </div>

                <div className="row border-bottom padding-0-20 m-0">
                    <div className="col-md-6 col-6">
                        <p className="mb-0 text-white font-weight-bold"> CURRENT TOTAL STAKE </p>
                    </div>
                    <div className="col-md-6 col-6">
                        <p
                            style={{ color: '#8e353c' }}
                            className="mb-0 text-right font-weight-bold"
                        >
                            {' '}
                            0 OM{' '}
                        </p>
                    </div>
                </div>

                <div className="row padding-20 m-0">
                    <div className="col-md-3 col-xs-6 col-sm-6">
                        <h5 className="text-white font-weight-bold align-items-center h-100 d-flex">
                            {' '}
                            USMF{' '}
                        </h5>
                    </div>
                    <div className="col-md-9 col-xs-6 col-sm-6">
                        <h6 className="text-white font-weight-bold"> STAKE AMOUNT </h6>
                        <input
                            type="text"
                            className="custom-form-control text-white w-100"
                            placeholder="10000"
                        />
                        <p className="mb-0" style={{ color: '#aaaaaa' }}>
                            {' '}
                            MIN. STAKE: 1 OM{' '}
                        </p>
                    </div>
                </div>

                <div className="row padding-0-20 m-0">
                    <div className="col-md-6 col-6">
                        <p className="mb-0 text-white font-weight-bold"> ESTIMATED REWARDS </p>
                    </div>
                    <div className="col-md-6 col-6">
                        <p
                            className="mb-0 text-right font-weight-bold"
                            style={{ color: '#8e353c' }}
                        >
                            {' '}
                            9 OM{' '}
                        </p>
                    </div>
                </div>

                <div className="row padding-0-20 m-0">
                    <div className="col-md-6 col-6">
                        <p className="mb-0 text-white font-weight-bold"> MATURITY DATE </p>
                    </div>
                    <div className="col-md-6 col-6">
                        <p
                            style={{ color: '#8e353c' }}
                            className="mb-0 text-right font-weight-bold"
                        >
                            {' '}
                            21/02/2024{' '}
                        </p>
                    </div>
                </div>

                <button className="text-white stake-btn">
                    {' '}
                    STAKE <i className="pull-right position-relative fa fa-arrow-right" />
                </button>
            </div>
        </div>
    )
}

export default StakeCard
