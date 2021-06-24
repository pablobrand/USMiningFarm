/* eslint-disable react/button-has-type */
const ValueSection = () => {
    return (
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
    )
}

export default ValueSection
