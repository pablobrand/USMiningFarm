import { Grid, Typography, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    heroSection: {
        backgroundImage: "url('/assets/images/banner.png')",
        backgroundPosition: '80%',
        backgroundRepeat: 'no-repeat',
        minHeight: '950px'
    },

    heroContainer: {
        padding: '0 60px'
    },

    heroHeading: {
        color: '#fff',
        fontSize: '82px',
        fontWeight: 700,
        lineHeight: 1
    },

    heroSubheader: {
        margin: '1rem auto 1.5rem',
        color: '#fff'
    },

    heroColumn: {
        position: 'relative',
        width: '100%',
        paddingRight: '15px',
        paddingLeft: '15px'
    },

    heroButton: {
        border: 'none',
        borderRadius: '10px',
        backgroundImage: 'linear-gradient(to right, #b43838, #b8374d, #b83b61, #b54175, #ae4a87)',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        fontWeight: 600,
        padding: '8px 22px',
        marginTop: '10px',
        outline: 'none',
        color: '#fff',
        width: '150px'
    },

    '@media (max-width: 767px)': {
        heroContainer: {
            padding: '0 24px'
        }
    }
})

const HeroSection = () => {
    const classes = useStyles()

    return (
        <Grid container component="section" className={classes.heroSection}>
            <Grid
                container
                direction="column"
                justify="center"
                item
                xs={12}
                md={6}
                className={classes.heroContainer}
            >
                <Typography component="h1" className={classes.heroHeading}>
                    {' '}
                    LOREM IPSUM SIMPLE DUMMY{' '}
                </Typography>
                <Typography className={classes.heroSubheader}>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod enim
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip{' '}
                </Typography>
                <Button className={classes.heroButton} type="button">
                    {' '}
                    LEARN MORE{' '}
                </Button>
            </Grid>
        </Grid>
    )
}

export default HeroSection
