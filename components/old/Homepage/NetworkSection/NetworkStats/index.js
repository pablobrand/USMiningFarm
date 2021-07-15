/* eslint-disable react/no-unescaped-entities */
import { Grid, makeStyles, Typography } from '@material-ui/core'
import NetworkBlurb from '../NetworkBlurb'

const useStyles = makeStyles({
    networkStatContainer: {
        maxWidth: '1140px'
    },

    networkStatHeading: {
        color: '#fff',
        fontSize: '36px',
        fontWeight: '700',
        textAlign: 'center'
    },

    networkStatSubheader: {
        color: '#fff',
        textAlign: 'center'
    }
})

const NetworkStats = () => {
    const classes = useStyles()

    return (
        <Grid
            container
            justify="center"
            component="section"
            className={classes.networkStatContainer}
        >
            <Grid container item direction="column">
                <Typography className={classes.networkStatHeading} component="h2">
                    THE NETWORK IS LIVE
                </Typography>
                <Typography className={classes.networkStatSubheader}>
                    The People's Network is the world's fastest growing wireless network ever.
                </Typography>
            </Grid>

            <Grid container item direction="row" justify="center" spacing={2}>
                <Grid xs={12} md={4} item>
                    <NetworkBlurb heading="USMF OWNED" amount="46,391" propWidth={80} />
                </Grid>
                <Grid xs={12} md={4} item>
                    <NetworkBlurb
                        image="/assets/images/credit-card.png"
                        heading="CURRENT USMF STAKED"
                        amount="2,32,980"
                    />
                </Grid>
                <Grid xs={12} md={4} item>
                    <NetworkBlurb
                        image="/assets/images/data.png"
                        heading="CURRENT LP STAKED"
                        amount="0.6 GB"
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default NetworkStats
