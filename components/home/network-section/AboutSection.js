import Image from 'next/image'

const AboutSection = () => {
    return (
        <div className="row about-section-row">
            <div className="col-md-6 col-xs-12 col-sm-12">
                <Image
                    className="w-100"
                    src="/assets/images/about-imag.png"
                    alt=""
                    width={540}
                    height={546.69}
                />
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
                            <Image
                                src="/assets/images/analysis.png"
                                alt=""
                                width={80}
                                height={80.55}
                            />
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
                            <Image
                                src="/assets/images/credibility.png"
                                alt=""
                                width={80}
                                height={81.11}
                            />
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
                            <Image src="/assets/images/secure.png" alt="" width={80} height={80} />
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
