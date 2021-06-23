const AboutSection = () => {
    return (
        <div className="row about-section-row">
            <div className="col-md-6 col-xs-12 col-sm-12">
                <img className="w-100" src="assets/images/about-imag.png" alt="" />
            </div>
            <div className="col-md-6 col-xs-12 col-sm-12">
                <h1 className="text-white"> ABOUT USMF </h1>
                <div className="line" />
                <p className="text-white">
                    {' '}
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                    eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.{' '}
                </p>

                <div className="round-bg-with-image">
                    <div className="row">
                        <div className="col-md-2 col-xs-6">
                            <img src="assets/images/analysis.png" alt="" />
                        </div>
                        <div className="col-md-10 col-xs-6">
                            <div className="ml-2">
                                <h4 className="font-weight-bold text-white"> SECURE USER DATA </h4>
                                <p className="text-white medium-text">
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                    commodo ligula eget dolor. Aenean massa{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="round-bg-with-image">
                    <div className="row">
                        <div className="col-md-2 col-xs-6">
                            <img src="assets/images/credibility.png" alt="" />
                        </div>
                        <div className="col-md-10 col-xs-6">
                            <div className="ml-2">
                                <h4 className="font-weight-bold text-white"> MOST CREADIBILITY </h4>
                                <p className="text-white medium-text">
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                    commodo ligula eget dolor. Aenean massa{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="round-bg-with-image">
                    <div className="row">
                        <div className="col-md-2 col-xs-6">
                            <img src="assets/images/secure.png" alt="" />
                        </div>
                        <div className="col-md-10 col-xs-6">
                            <div className="ml-2">
                                <h4 className="font-weight-bold text-white"> BIG DATA INSIGHTS </h4>
                                <p className="text-white medium-text">
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                    commodo ligula eget dolor. Aenean massa{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
