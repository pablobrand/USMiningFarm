import { Box } from '@material-ui/core'
import Image from 'next/image'
import styles from './AboutBlurb.module.css'

const AboutBlurb = ({ image = '/assets/images/analysis.png', heading, text }) => {
    return (
        <Box className="about-blurb">
            <Box className={styles.aboutBlurbBG}>
                <Box className={styles.aboutBlurbImg}>
                    <Image src={image} alt="" width={60} height={60} />
                </Box>

                <Box className={styles.aboutBlurbText}>
                    <h4> {heading} </h4>
                    <p>{text}</p>
                </Box>
            </Box>
        </Box>
    )
}

export default AboutBlurb
