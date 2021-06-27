import Image from 'next/image'

const NetworkBlurb = ({ image = '/assets/images/wireless.png', heading, amount, propWidth }) => {
    return (
        <div className="network-blurb">
            <div className="network-blurb-img network-img-bg">
                <Image src={image} alt="" width={100} height={100} />
            </div>
            <div className="network-blurb-text text-white text-center">
                <h3 style={{ width: propWidth }}>{heading}</h3>
                <p className="amount">{amount}</p>
            </div>
        </div>
    )
}

export default NetworkBlurb
