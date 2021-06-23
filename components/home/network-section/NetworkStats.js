const NetworkStats = () => {
    return (
        <div className="row">
            <div className="col-md-12 col-xs-12 col-sm-12 text-center">
                <h2 className="font-weight-bold text-white"> THE NETWORK IS LIVE </h2>
                <p className="text-white">
                    {' '}
                    The People’s Network is the world’s fastest growing wireless network ever.
                </p>
            </div>

            <div className="col-md-8 md-offset-2 m-auto col-xs-12 col-sm-12">
                <div className="row">
                    <div className="col-md-4 col-xs-12 col-sm-12">
                        <div className="round-bg">
                            <img src="assets/images/wireless.png" alt="" />
                        </div>
                        <h3 className="text-white text-center">
                            {' '}
                            USMF <br /> OWNED{' '}
                        </h3>
                        <h1 className="text-white text-center"> 46,391 </h1>
                    </div>
                    <div className="col-md-4 col-xs-12 col-sm-12">
                        <div className="round-bg">
                            <img src="assets/images/credit-card.png" alt="" />
                        </div>
                        <h3 className="text-white text-center">
                            {' '}
                            CURRENT USMF <br /> STAKED{' '}
                        </h3>
                        <h1 className="text-white text-center"> 2,32,980 </h1>
                    </div>
                    <div className="col-md-4 col-xs-12 col-sm-12">
                        <div className="round-bg">
                            <img src="assets/images/data.png" alt="" />
                        </div>
                        <h3 className="text-white text-center">
                            {' '}
                            CURRENT LP <br /> STAKED{' '}
                        </h3>
                        <h1 className="text-white text-center"> 0.6 GB </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NetworkStats
