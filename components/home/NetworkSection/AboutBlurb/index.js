import Image from 'next/image'
import styles from './AboutBlurb.module.css'

const AboutBlurb = ({ image = '/assets/images/analysis.png', heading, text }) => {
    return (
        <div className="about-blurb">
            <div className={styles.aboutBlurbBG}>
                <div className={styles.aboutBlurbImg}>
                    <Image src={image} alt="" width={60} height={60} />
                </div>

                <div className={styles.aboutBlurbText}>
                    <h4> {heading} </h4>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutBlurb
