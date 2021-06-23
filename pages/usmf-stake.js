/* eslint-disable react/button-has-type */
function USMFStake() {
    return (
        <div>
            {/* <!-- banner section start --> */}
            <section className="banner__black__usmf" />
            {/* <!-- banner section end --> */}

            {/* <!-- value-Section --> */}
            <section className="value-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-xs-12 col-sm-12">
                            <h2 className="mb-0 font-weight-bold text-white">
                                {' '}
                                TOTAL STAKED VALUE: <span> $0 </span>{' '}
                            </h2>
                        </div>
                        <div className="col-md-6 col-xs-12 col-sm-12">
                            <button className="text-white buy-om"> BUY OM </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Table-section --> */}
            <section className="table-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 col-xs-12 col-xs-12">
                            <div className="margin-30 stake-button">
                                <button> STAKE </button>
                            </div>

                            <table className="margin-30 width-85 table table-responsive">
                                <thead>
                                    <tr className="text-white">
                                        <th className="min-width-first">
                                            {' '}
                                            TOTAL STAKED <br /> AMOUNT{' '}
                                        </th>
                                        <th className="min-width"> STATUS </th>
                                        <th className="min-width">
                                            {' '}
                                            ESTIMATED <br /> REWARDS{' '}
                                        </th>
                                        <th className="min-width">
                                            {' '}
                                            TIME TILL <br /> MATURITY{' '}
                                        </th>
                                        <th className="min-width">
                                            {' '}
                                            CURRENT <br /> VOTED %{' '}
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="text-white">
                                    <tr className="bg-grey-type">
                                        <td className="ml-4 d-flex">
                                            {' '}
                                            <span>
                                                {' '}
                                                <img
                                                    style={{ width: 80 }}
                                                    src="assets/images/logo.png"
                                                    alt=""
                                                />{' '}
                                            </span>{' '}
                                            <span
                                                className="pl-3 mt-4"
                                                style={{ lineHeight: 1.15, fontSize: 20 }}>
                                                {' '}
                                                <span style={{ color: '#8e353c' }}>
                                                    {' '}
                                                    TYPE1{' '}
                                                </span>{' '}
                                                <br /> OM 0.00{' '}
                                            </span>
                                        </td>
                                        <td className="active-col"> ACTIVE </td>
                                        <td className="grey-color"> 35.30% </td>
                                        <td className="grey-color"> 02:01 - 21-05-2021 </td>
                                        <td className="grey-color"> 0 OM </td>
                                    </tr>
                                </tbody>

                                <tbody className="text-white">
                                    <tr className="bg-grey-type">
                                        <td className="ml-4 d-flex">
                                            {' '}
                                            <span>
                                                {' '}
                                                <img
                                                    style={{ width: 80 }}
                                                    src="assets/images/logo.png"
                                                    alt=""
                                                />{' '}
                                            </span>{' '}
                                            <span
                                                className="pl-3 mt-4"
                                                style={{ lineHeight: 1.15, fontSize: 20 }}>
                                                {' '}
                                                <span style={{ color: '#8e353c' }}>
                                                    {' '}
                                                    TYPE1{' '}
                                                </span>{' '}
                                                <br /> OM 0.00{' '}
                                            </span>
                                        </td>
                                        <td className="active-col"> VOTING </td>
                                        <td className="grey-color"> 35.30% </td>
                                        <td className="grey-color"> 02:01 - 21-05-2021 </td>
                                        <td className="grey-color"> 0 RFUEL </td>
                                    </tr>
                                </tbody>

                                <tbody className="text-white">
                                    <tr className="bg-grey-type">
                                        <td className="ml-4 d-flex">
                                            {' '}
                                            <span>
                                                {' '}
                                                <img
                                                    style={{ width: 80 }}
                                                    src="assets/images/logo.png"
                                                    alt=""
                                                />{' '}
                                            </span>{' '}
                                            <span
                                                className="pl-3 mt-4"
                                                style={{ lineHeight: 1.15, fontSize: 20 }}>
                                                {' '}
                                                <span style={{ color: '#8e353c' }}>
                                                    {' '}
                                                    TYPE1{' '}
                                                </span>{' '}
                                                <br /> OM 0.00{' '}
                                            </span>
                                        </td>
                                        <td className="active-col"> LOCKED </td>
                                        <td className="grey-color"> 35.30% </td>
                                        <td className="grey-color"> 02:01 - 21-05-2021 </td>
                                        <td className="grey-color"> 0 OM </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-md-4 col-xs-12 col-xs-12">
                            <div className="bg-grey-type">
                                <div className="row padding-20 m-0 border-bottom">
                                    <div className="col-md-2 col-xs-6 col-sm-6">
                                        <img
                                            className="small-image"
                                            src="assets/images/logo.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-md-10 col-xs-6 col-sm-6">
                                        <h2 className="pl-3 font-weight-bold mb-0 right-side-text">
                                            TYPE1 <br />{' '}
                                            <span className="text-white font-weight-bold">
                                                {' '}
                                                OM - STAKING{' '}
                                            </span>{' '}
                                        </h2>
                                    </div>
                                </div>

                                <div className="row padding-0-20 m-0">
                                    <div className="col-md-6 col-6">
                                        <p className="mb-0 text-white font-weight-bold">
                                            {' '}
                                            YOUR BALANCE{' '}
                                        </p>
                                    </div>
                                    <div className="col-md-6 col-6">
                                        <p className="mb-0 text-right font-weight-bold text-white">
                                            {' '}
                                            0 OM{' '}
                                        </p>
                                    </div>
                                </div>

                                <div className="row border-bottom padding-0-20 m-0">
                                    <div className="col-md-6 col-6">
                                        <p className="mb-0 text-white font-weight-bold">
                                            {' '}
                                            CURRENT TOTAL STAKE{' '}
                                        </p>
                                    </div>
                                    <div className="col-md-6 col-6">
                                        <p
                                            style={{ color: '#8e353c' }}
                                            className="mb-0 text-right font-weight-bold">
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
                                        <h6 className="text-white font-weight-bold">
                                            {' '}
                                            STAKE AMOUNT{' '}
                                        </h6>
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
                                        <p className="mb-0 text-white font-weight-bold">
                                            {' '}
                                            ESTIMATED REWARDS{' '}
                                        </p>
                                    </div>
                                    <div className="col-md-6 col-6">
                                        <p
                                            className="mb-0 text-right font-weight-bold"
                                            style={{ color: '#8e353c' }}>
                                            {' '}
                                            9 OM{' '}
                                        </p>
                                    </div>
                                </div>

                                <div className="row padding-0-20 m-0">
                                    <div className="col-md-6 col-6">
                                        <p className="mb-0 text-white font-weight-bold">
                                            {' '}
                                            MATURITY DATE{' '}
                                        </p>
                                    </div>
                                    <div className="col-md-6 col-6">
                                        <p
                                            style={{ color: '#8e353c' }}
                                            className="mb-0 text-right font-weight-bold">
                                            {' '}
                                            21/02/2024{' '}
                                        </p>
                                    </div>
                                </div>

                                <button className="text-white stake-btn">
                                    {' '}
                                    STAKE{' '}
                                    <i className="pull-right position-relative fa fa-arrow-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Table-section --> */}
        </div>
    )
}

export default USMFStake
