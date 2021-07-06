import { Grid, Typography, makeStyles, Button } from '@material-ui/core'
import Image from 'next/image'

const useStyles = makeStyles({
    LPStakeItem: {
        flex: '0 0 66.666667%',
        maxWidth: '66.666667%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '1.5rem'
    },

    LPStakeItemLabel: {
        backgroundImage: 'linear-gradient(90deg,#b43838,#b8374d,#b83b61,#b54175,#ae4a87)',
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
        padding: '2rem',
        flex: '0 0 33.333%',
        maxWidth: '33.333%'
    },

    LPStakeItemLabelHeader: {
        color: '#fff',
        marginRight: '15px'
    },

    LPStakeItemLabelValue: {
        color: '#fff'
    },

    LPStakeItemActions: {
        flex: '0 0 66.666667%',
        maxWidth: '66.666667%',
        padding: '2rem',
        justifyContent: 'center',
        backgroundColor: '#212121',
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px'
    },

    LPStakeItemActionsContainer: {
        maxWidth: '80%',
        color: '#fff',
        justifyContent: 'center'
    },

    buttonStyles: {
        width: '100%',
        padding: '5px 10px',
        textAlign: 'center',
        borderRadius: '8px',
        border: 'none',
        outline: 'none',
        color: '#fff',
        fontFamily: 'inherit',
        fontSize: '1rem',
        fontWeight: '700',
        backgroundImage: 'linear-gradient(to left, #b43838, #b8374d, #b83b61, #b54175, #ae4a87)'
    },

    '@media (max-width: 575px)': {
        LPStakeItemActionsContainer: {
            maxWidth: '100%'
        }
    },

    '@media (max-width: 767px)': {
        LPStakeContainer: {
            padding: '15px'
        },

        LPStakeButtonContainer: {
            justifyContent: 'center',
            marginBottom: '10px'
        },

        LPStakeItem: {
            flexDirection: 'column',
            flex: '0 0 100%',
            maxWidth: '100%',
            marginLeft: 'auto',
            marginRight: 'auto'
        },

        LPStakeItemLabel: {
            flex: '0 0 100%',
            maxWidth: '100%',
            justifyContent: 'space-evenly',
            padding: '1rem',
            borderTopRightRadius: '10px',
            borderBottomLeftRadius: 0
        },

        LPStakeItemActions: {
            flex: '0 0 100%',
            maxWidth: '100%',
            padding: '1rem',
            borderTopRightRadius: 0,
            borderBottomLeftRadius: '10px'
        },

        dropdownContainer: {
            justifyContent: 'center'
        },

        messageSection: {
            flex: '0 0 100%',
            maxWidth: '100%',
            marginLeft: 0,
            marginRight: 0
        }
    },
    '@media (min-width: 768px) and (max-width: 1369px)': {
        buttonStyles: {
            margin: 'auto'
        }
    }
})

const LPStakeItem = ({ handleOpen }) => {
    const classes = useStyles()

    return (
        <Grid container item className={classes.LPStakeItemSection}>
            <Grid container item className={classes.LPStakeItem}>
                <Grid container item direction="row" className={classes.LPStakeItemLabel}>
                    <Grid item direction="column" className={classes.LPStakeItemLabelHeader}>
                        <Image src="/assets/images/logo.png" height={80} width={80} />
                        <Typography
                            variant="h3"
                            style={{
                                fontSize: '18px',
                                fontWeight: 700
                            }}
                        >
                            UNISWAP
                        </Typography>
                    </Grid>
                    <Grid item className={classes.LPStakeItemLabelValue}>
                        <Typography
                            variant="h2"
                            style={{
                                fontSize: '2.5rem',
                                fontWeight: 700
                            }}
                        >
                            $54,934
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item className={classes.LPStakeItemActions}>
                    <Grid container item className={classes.LPStakeItemActionsContainer}>
                        <Typography
                            variant="h3"
                            style={{
                                fontSize: '1.75rem',
                                fontWeight: 700,
                                marginTop: 'auto',
                                marginBottom: '.5rem'
                            }}
                        >
                            CURRENT USMF APR
                        </Typography>
                        <Button className={classes.buttonStyles} onClick={handleOpen}>
                            DEPOSIT USMF
                        </Button>
                        <Typography
                            variant="span"
                            style={{
                                fontSize: '12px',
                                fontWeight: 600,
                                opacity: '.7',
                                marginTop: '5px',
                                marginRight: 'auto'
                            }}
                        >
                            EARN 11.35% APR IN POOL
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default LPStakeItem
