/* eslint-disable react/no-unescaped-entities */
import { Grid, Button, Typography, makeStyles } from '@material-ui/core'
import LPStakeItem from './LPStakeItem'
import useModal from './DepositModal/useModal'
import DepositModal from './DepositModal'

const useStyles = makeStyles({
    LPStakeSection: {
        backgroundColor: 'rgba(2,2,2,.85)',
        minHeight: 'calc(100vh - 98px)'
    },

    LPStakeContainer: {
        padding: '25px',
        paddingBottom: '50px'
    },

    buttonStyles: {
        backgroundImage: 'linear-gradient(90deg,#b43838,#b8374d,#b83b61,#b54175,#ae4a87)',
        color: '#ffffff',
        border: 'none',
        borderRadius: '50px',
        fontSize: 22,
        fontWeight: 600,
        padding: '0px 35px',
        marginTop: 'auto',
        marginBottom: 'auto'
    },

    dropdownContainer: {
        justifyContent: 'flex-end'
    },

    messageSection: {
        flex: '0 0 66.666667%',
        maxWidth: '66.666667%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },

    messageHeading: {
        color: '#fff',
        fontSize: '1.25rem',
        fontWeight: 600,
        marginBottom: '.5rem'
    },

    messageParagraph: {
        color: '#fff',
        fontWeight: 600,
        marginBottom: '1rem'
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

        dropdownContainer: {
            justifyContent: 'center'
        },

        messageSection: {
            flex: '0 0 100%',
            maxWidth: '100%',
            marginLeft: 0,
            marginRight: 0
        }
    }
})

const LPStakeSection = () => {
    const classes = useStyles()
    const { isOpen, handleOpen, handleClose } = useModal(false)

    return (
        <Grid item className={classes.LPStakeSection}>
            <Grid container item className={classes.LPStakeContainer} component="section">
                <Grid container item justify="space-between" style={{ marginBottom: '5rem' }}>
                    <Grid item container xs={12} md={6} className={classes.LPStakeButtonContainer}>
                        {/* <DepositModal /> */}
                        <Button className={classes.buttonStyles} onClick={handleOpen}>
                            LP STAKE
                        </Button>
                    </Grid>
                    <Grid item container xs={12} md={6} className={classes.dropdownContainer}>
                        {/* <Dropdown /> */}
                    </Grid>
                </Grid>
                <Grid container item>
                    <Grid container item className={classes.messageSection}>
                        <Typography variant="h5" className={classes.messageHeading}>
                            MESSAGE
                        </Typography>
                        <Typography variant="p" className={classes.messageParagraph}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the since the 1500s, when an unknown printer took a galley of type
                            and make a type specimen book
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item>
                    <LPStakeItem handleOpen={handleOpen} />
                    <DepositModal isOpen={isOpen} handleClose={handleClose} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default LPStakeSection
