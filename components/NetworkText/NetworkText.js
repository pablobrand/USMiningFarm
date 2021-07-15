/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@material-ui/core'
import styles from './networktext.module.css'

const NetworkText = () => {
    return (
        <Grid container item justify="center" className={styles.networkText}>
            <Typography variant="h2">THE NETWORK IS LIVE</Typography>
            <Typography variant="body2">
                The People's Network is the world's fastest growing wireless network ever
            </Typography>
        </Grid>
    )
}

export default NetworkText
