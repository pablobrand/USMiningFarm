import { Card, CardHeader, makeStyles } from '@material-ui/core'
import Image from 'next/image'

const useStyles = makeStyles({
    aboutBlurbContainer: {
        backgroundColor: '#181818',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '30px 10px',
        boxShadow: '0 0 4px -1px rgb(0 0 0 / 60%)'
    },

    aboutBlurbContent: {
        display: 'flex'
    },

    aboutBlurbTitle: {
        color: '#fff',
        fontSize: '20px',
        fontWeight: 700
    },

    aboutBlurbSubheader: {
        color: '#fff',
        fontFamily: "'Poppins', sans-serif"
    },

    '@media (max-width: 767px)': {
        aboutBlurbContent: {
            flexDirection: 'column'
        }
    }
})

const AboutBlurb = ({ image = '/assets/images/analysis.png', heading, text }) => {
    const classes = useStyles()
    return (
        <Card className={classes.aboutBlurbContainer}>
            <CardHeader
                avatar={<Image src={image} alt="" width={60} height={60} />}
                title={heading}
                subheader={text}
                classes={{ title: classes.aboutBlurbTitle, subheader: classes.aboutBlurbSubheader }}
                className={classes.aboutBlurbContent}
            />
        </Card>
    )
}

export default AboutBlurb
