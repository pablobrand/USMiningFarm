import { Grid, Typography } from '@material-ui/core'
import styles from './herotext.module.css'

const HeroText = () => {
    return (
        <Grid container item className={styles.heroText}>
            <Grid container item>
                <Typography variant="h1">LOREM IPSUM SIMPLE DUMMY</Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod enim
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip{' '}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default HeroText
