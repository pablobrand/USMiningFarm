import { Grid, Typography } from '@material-ui/core'
import Image from 'next/image'
import styles from './aboutblurb.module.css'

const AboutBlurb = ({ image = '/assets/images/analysis.png', heading, text }) => {
    return (
        <Grid container item className={styles.aboutBlurbContainer}>
            <Grid className={styles.aboutBlurbImgContainer}>
                <Image src={image} height={150} width={150} />
            </Grid>
            <Grid className={styles.aboutBlurbTextContainer}>
                <Typography variant="h5">{heading}</Typography>
                <Typography>{text}</Typography>
            </Grid>
        </Grid>
    )
}

export default AboutBlurb
