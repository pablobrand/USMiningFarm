import Image from 'next/image'
import styles from './NetworkBlurb.module.css'

const NetworkBlurb = ({ image = '/assets/images/wireless.png', heading, amount, propWidth }) => {
    return (
        <div>
            <div className={styles.networkImgBG}>
                <Image src={image} alt="" width={100} height={100} />
            </div>
            <div className={styles.networkBlurbText}>
                <h3 style={{ width: propWidth }}>{heading}</h3>
                <p>{amount}</p>
            </div>
        </div>
    )
}

export default NetworkBlurb
