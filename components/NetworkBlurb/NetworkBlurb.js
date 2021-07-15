import { Grid, Typography } from '@material-ui/core'
import Image from 'next/image'
import styles from './networkblurb.module.css'

const NetworkBlurb = ({ image, heading, figure }) => {
    return (
        <Grid item className={styles.networkBlurbContainer}>
            <Grid container item justify="center" className={styles.networkBlurbImg}>
                <Image src={image} width={150} height={150} />
            </Grid>
            <Grid
                container
                item
                direction="column"
                alignItems="center"
                className={styles.networkBlurbText}
            >
                <Typography variant="h4">{heading}</Typography>
                <Typography variant="h3" component="p">
                    {figure}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default NetworkBlurb
