import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

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
    },

    valueSection: {
        backgroundColor: '#212121',
        padding: '25px',
        border: '1px solid #fff'
    },

    valueText: {
        fontSize: 32,
        color: '#ffffff',
        fontWeight: 700
    },

    stakedValue: {
        backgroundImage: 'linear-gradient(90deg,#b43838,#b8374d,#b83b61,#b54175,#ae4a87)',
        color: 'transparent',
        position: 'relative',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        fontSize: 32,
        fontWeight: 700
    },

    buttonStyles: {
        backgroundImage: 'linear-gradient(90deg,#b43838,#b8374d,#b83b61,#b54175,#ae4a87)',
        color: '#ffffff',
        border: 'none',
        borderRadius: '10px',
        fontSize: 16,
        fontWeight: 600,
        padding: '8px 35px'
    }
})

const ValueSection = () => {
    const classes = useStyles()

    return (
        <Grid container item className={classes.valueSection} component="section">
            <Grid container item className={classes.valueRow}>
                <Grid container item justify="space-between">
                    <Typography className={classes.valueText} variant="h2">
                        TOTAL STAKED VALUE:{' '}
                        <Typography component="span" className={classes.stakedValue}>
                            $0
                        </Typography>
                    </Typography>
                    <Button variant="contained" className={classes.buttonStyles}>
                        BUY USMF
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ValueSection
