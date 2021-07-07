import { Grid, makeStyles } from '@material-ui/core'
import Image from 'next/image'

const useStyles = makeStyles({
    networkImgContainer: {
        width: '225px',
        backgroundColor: '#1b1b1b',
        marginTop: '2rem',
        padding: '35px',
        borderRadius: '30px 10px',
        textAlign: 'center'
    },

    networkBlurbTitle: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 600,
        fontSize: '20px',
        margin: '10px auto'
    },

    networkBlurbSubheader: {
        color: '#fff',
        textAlign: 'center',
        fontSize: '36px',
        fontWeight: 700,
        margin: 0
    },

    '@media (max-width: 767px)': {
        networkImgContainer: {
            width: '100%'
        }
    }
})

const NetworkBlurb = ({ image = '/assets/images/wireless.png', heading, amount, propWidth }) => {
    const classes = useStyles()

    return (
        <Grid container justify="center" alignItems="center" direction="column">
            <Grid item className={classes.networkImgContainer}>
                <Image src={image} alt="" width={100} height={100} />
            </Grid>
            <Grid item>
                <h3 className={classes.networkBlurbTitle} style={{ width: propWidth }}>
                    {heading}
                </h3>
                <p className={classes.networkBlurbSubheader}>{amount}</p>
            </Grid>
        </Grid>
    )
}

export default NetworkBlurb
