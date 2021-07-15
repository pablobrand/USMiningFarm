import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import Image from 'next/image'
import HeroText from '../HeroText/HeroText'
import CTAButton from '../CTAButton/CTAButton'
import NetworkText from '../NetworkText/NetworkText'
import NetworkBlurb from '../NetworkBlurb/NetworkBlurb'
import AboutBlurb from '../AboutBlurb/AboutBlurb'

const useStyles = makeStyles({
    heroSection: {
        backgroundImage: "url('/assets/images/banner.png')",
        backgroundPosition: '80%',
        backgroundRepeat: 'no-repeat',
        padding: '0 60px',
        minHeight: '59.0625rem'
    },

    heroContainer: {
        maxWidth: '1800px'
    },

    networkStatsContainer: {
        margin: '67px 60px 46px',
        maxWidth: '1035px'
    },

    heroTextColumn: {
        maxWidth: '887px',
        marginRight: 'auto'
    },

    networkSection: {
        padding: '4.1875rem 60px 2.875rem',
        backgroundImage: 'linear-gradient(180deg,#3c3c3a,#2f2e2d,#222121,#151515,#020202)'
    },

    networkBlurbColumn: {
        marginTop: '5.9375rem'
    },

    aboutSection: {
        padding: '0 60px'
    },

    aboutHeadingLine: {
        backgroundColor: '#b33b47',
        border: '2px solid #b33b47',
        width: '100px',
        margin: '20px 0'
    },

    '@media (max-width: 767px)': {
        heroSection: {
            padding: '0 24px'
        },

        networkSection: {
            padding: '4.1875rem 24px 2.875rem'
        },

        networkStatsContainer: {
            margin: '4.1875rem 24px 2.875rem'
        },

        aboutImgContainer: {
            marginBottom: '2rem !important'
        }
    },

    '@media (min-width: 1921px)': {
        heroSection: {
            backgroundSize: 'cover'
        }
    }
})

const HomeContainer = () => {
    const classes = useStyles()

    return (
        <Grid container component="main" className={`${classes.main}`}>
            {/* hero section */}
            <Grid
                container
                item
                justify="center"
                component="section"
                className={`${classes.heroSection}`}
            >
                {/* hero section container */}
                <Grid container item alignItems="center" className={`${classes.heroContainer}`}>
                    <Grid item className={`${classes.heroTextColumn}`}>
                        <HeroText />
                        <CTAButton href="/" />
                    </Grid>
                </Grid>
            </Grid>
            {/* network section */}
            <Grid
                container
                item
                justify="center"
                component="section"
                className={classes.networkSection}
            >
                {/* network section container */}
                <Grid container className={classes.networkStatsContainer}>
                    <NetworkText />
                    <Grid
                        container
                        justify="space-between"
                        direction="row"
                        className={classes.networkBlurbColumn}
                    >
                        <NetworkBlurb
                            image="/assets/images/wireless.png"
                            heading="USMF OWNED"
                            figure="46,391"
                        />
                        <NetworkBlurb
                            image="/assets/images/credit-card.png"
                            heading="CURRENT USMF STAKED"
                            figure="2,32,980"
                        />
                        <NetworkBlurb
                            image="/assets/images/data.png"
                            heading="CURRENT LP STAKED"
                            figure="0.6 GB"
                        />
                    </Grid>
                </Grid>
                <Grid container item component="section" className={classes.aboutContainer}>
                    {/* about section container */}
                    <Grid container item className={classes.aboutContainer}>
                        <Grid container xs={12} md={6} item className={classes.aboutImgContainer}>
                            <Grid item>
                                <Image
                                    src="/assets/images/about-imag.png"
                                    width={975}
                                    height={975}
                                />
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} md={6} className={classes.aboutInfoContainer}>
                            <Grid item className={classes.aboutHeadingContainer}>
                                <Typography variant="h2">ABOUT USMF</Typography>
                                <Box className={classes.aboutHeadingLine} />
                                <Typography variant="body2">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                                    penatibus et magnis dis parturient montes, nascetur ridiculus
                                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                    quis, sem. Nulla consequat massa quis enim.{' '}
                                </Typography>
                            </Grid>
                            <Grid container item className={classes.aboutBlurbContainer}>
                                <AboutBlurb
                                    image="/assets/images/credibility.png"
                                    heading="MOST CREADIBILITY"
                                    text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
                                />
                                <AboutBlurb
                                    image="/assets/images/credibility.png"
                                    heading="MOST CREADIBILITY"
                                    text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
                                />
                                <AboutBlurb
                                    image="/assets/images/credibility.png"
                                    heading="MOST CREADIBILITY"
                                    text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* about section */}
        </Grid>
    )
}

export default HomeContainer
