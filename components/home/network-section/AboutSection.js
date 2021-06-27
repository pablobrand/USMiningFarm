import Image from 'next/image'
import AboutBlurb from './AboutBlurb'

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

                <AboutBlurb
                    heading="SECURE USER DATA"
                    text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
                />

                <AboutBlurb
                    image="/assets/images/credibility.png"
                    heading="MOST CREADIBILITY"
                    text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
                />

                <AboutBlurb
                    image="/assets/images/secure.png"
                    heading="BIG DATA INSIGHTS"
                    text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
                />
            </div>
        </div>
    )
}

export default AboutSection
