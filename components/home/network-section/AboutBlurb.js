import Image from 'next/image'

const AboutBlurb = ({ image = '/assets/images/analysis.png', heading, text }) => {
    return (
        <div className="about-blurb">
            <div className="about-blurb-bg">
                <div className="about-blurb-img">
                    <Image src={image} alt="" width={60} height={60} />
                </div>

                <div className="about-blurb-text">
                    <h4 className="font-weight-bold text-white"> {heading} </h4>
                    <p className="text-white medium-text">{text}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutBlurb
