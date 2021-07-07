import { Grid, makeStyles } from '@material-ui/core'
import NetworkStats from './NetworkStats'
import AboutSection from './AboutSection'

const useStyles = makeStyles({
    networkSectionContainer: {
        padding: '4rem 2rem 0',
        backgroundImage: 'linear-gradient(180deg,#3c3c3a,#2f2e2d,#222121,#151515,#020202)'
    }
})

export default function NetworkSection() {
    const classes = useStyles()

    return (
        <Grid
            container
            justify="center"
            component="section"
            className={classes.networkSectionContainer}
        >
            <NetworkStats />
            <AboutSection />
        </Grid>
    )
}
