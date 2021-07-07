import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import Image from 'next/image'
import AboutBlurb from '../AboutBlurb'

const useStyles = makeStyles({
    aboutSectionContainer: {
        maxWidth: '1140px',
        marginTop: '5rem'
    },

    aboutSectionImageContainer: {
        paddingRight: '15px',
        paddingLeft: '10px'
    },

    aboutSectionHeading: {
        color: '#fff',
        fontSize: '36px',
        fontWeight: 700
    },

    aboutSectionTextLine: {
        backgroundColor: '#b33b47',
        border: '2px solid #b33b47',
        width: '100px',
        margin: '20px 0'
    },

    aboutSectionParagraph: {
        color: '#fff'
    }
})

const AboutSection = () => {
    const classes = useStyles()

    return (
        <Grid container className={classes.aboutSectionContainer}>
            <Grid item md={6} className={classes.aboutSectionImageContainer}>
                <Image src="/assets/images/about-imag.png" alt="" width={540} height={546.69} />
            </Grid>
            <Grid item md={6}>
                <Typography component="h2" className={classes.aboutSectionHeading}>
                    {' '}
                    ABOUT USMF{' '}
                </Typography>
                <Box className={classes.aboutSectionTextLine} />
                <Typography className={classes.aboutSectionParagraph}>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                    eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.{' '}
                </Typography>

                <AboutBlurb
                    heading="SECURE USER DATA"
                    text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
                />

                <AboutBlurb
                    image="/assets/images/credibility.png"
                    heading="MOST CREADIBILITY"
                    text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
                />

                <AboutBlurb
                    image="/assets/images/secure.png"
                    heading="BIG DATA INSIGHTS"
                    text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
                />
            </Grid>
        </Grid>
    )
}

export default AboutSection
