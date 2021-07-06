import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import LPStakeSection from './LPStakeSection'

const useStyles = makeStyles({
    bannerStyles: {
        backgroundImage: 'url(/assets/images/top-header-bg.jpg)',
        backgroundSize: '100%',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#1d1d1d'
    },

    bannerArea: {
        height: '100px'
    }
})

const LPStake = () => {
    const classes = useStyles()

    return (
        <Grid container className={classes.bannerStyles}>
            <Grid container item className={classes.bannerArea} component="section" />
            <LPStakeSection />
        </Grid>
    )
}

export default LPStake
