import { Box } from '@material-ui/core'
import Image from 'next/image'
import styles from './NetworkBlurb.module.css'

const NetworkBlurb = ({ image = '/assets/images/wireless.png', heading, amount, propWidth }) => {
    return (
        <Box>
            <Box className={styles.networkImgBG}>
                <Image src={image} alt="" width={100} height={100} />
            </Box>
            <Box className={styles.networkBlurbText}>
                <h3 style={{ width: propWidth }}>{heading}</h3>
                <p>{amount}</p>
            </Box>
        </Box>
    )
}

export default NetworkBlurb
