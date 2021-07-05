import {
    Grid,
    Button,
    Typography,
    Card,
    CardHeader,
    CardActions,
    CardContent,
    Input
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Image from 'next/image'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { useMetaMask } from '../../../../functions/metamask/MetamaskContext'

const useStyles = makeStyles({
    tableSection: {
        minHeight: 'calc(100vh - 198px)',
        backgroundColor: 'rgba(2,2,2,.85)',
        padding: '25px',
        flex: '1 1'
    },

    table: {
        minWidth: 960
    },

    tableHeadFirstCell: {
        fontSize: '1rem',
        fontWeight: 700,
        textAlign: 'center',
        minWidth: '300px',
        borderColor: 'transparent'
    },

    tableHeadCell: {
        fontSize: '1rem',
        fontWeight: 700,
        minWidth: '165px',
        borderColor: 'transparent'
    },

    tableBodyRow: {
        borderTop: '10px solid #020202',
        backgroundColor: '#212121'
    },

    tableBodyFirstCell: {
        fontSize: '1rem',
        fontWeight: 700,
        minWidth: '300px',
        borderColor: 'transparent',
        display: 'flex'
    },

    tableBodyCell: {
        color: '#6c6c6c',
        fontSize: '18px',
        fontWeight: 700,
        padding: '0 15px',
        minWidth: '165px',
        borderColor: 'transparent'
    },

    type: {
        fontSize: '20px',
        fontWeight: 700,
        color: '#8e353c',
        paddingLeft: '1rem'
    },

    typeValue: {
        fontSize: '20px',
        fontWeight: 700,
        color: '#ffffff'
    },

    stakeCardContainer: {
        backgroundColor: '#212121',
        padding: '10px',
        margin: '30px 0px 30px 30px',
        borderRadius: '10px',
        width: '550px'
    },

    stakeCardHeaderRoot: {
        borderBottom: '1px solid #dee2e6',
        padding: '20px'
    },

    stakeCardTitle: {
        color: '#8e353c',
        fontSize: '20px',
        fontWeight: 700
    },

    stakeCardSubheader: {
        color: '#ffffff',
        fontSize: '20px',
        fontWeight: 700
    },

    stakeCardAvatar: {
        padding: '0 15px'
    },

    stakeCardText: {
        color: '#ffffff',
        fontSize: '1rem',
        fontWeight: 700,
        padding: '0 15px'
    },

    stakeCardTextValue: {
        color: '#8e353c',
        fontSize: '1rem',
        fontWeight: 700,
        padding: '0 15px'
    },

    stakeCardInput: {
        width: '100%',
        color: '#fff',
        outline: 'none',
        fontWeight: 600,
        border: '1px solid hsla(0,0%,86.7%,.34901960784313724)',
        borderRadius: '10px',
        backgroundColor: '#3a3a3a',
        padding: '10px 15px'
    },

    USMFLabelColumn: {
        flex: '0 0 25%'
    },

    stakeCardInputColumn: {
        flex: '0 0 75%',
        padding: '0 15px !important'
    },

    USMFLabel: {
        color: '#fff',
        fontWeight: 700,
        fontSize: '1.25rem',
        padding: '0 15px'
    },

    stakeCardButton: {
        width: '70%',
        border: 'none',
        borderRadius: '10px',
        backgroundImage: 'linear-gradient(90deg,#b43838,#b8374d,#b83b61,#b54175,#ae4a87)',
        fontWeight: 600,
        outline: 'none',
        color: '#fff',
        margin: '2rem auto 1rem'
    },

    '@media (max-width: 575px)': {
        stakeCardTextContainer: {
            flexDirection: 'column'
        },

        stakeCardText: {
            width: '100%'
        },

        USMFLabelColumn: {
            flex: '0 0 100%'
        },

        stakeCardInputColumn: {
            flex: '0 0 100%',
            padding: '4px !important'
        }
    },

    '@media (max-width: 991px)': {
        stakeCardContainer: {
            margin: '30px 0',
            width: '100%'
        }
    }
})

const StakeCard = () => {
    const classes = useStyles()
    const { metamaskState } = useMetaMask()

    return (
        <Grid lg={5} container item justify="flex-end" className={classes.stakeCard}>
            <Card className={classes.stakeCardContainer}>
                <CardHeader
                    avatar={<Image src="/assets/images/logo.png" height={60} width={60} />}
                    title={metamaskState.stakeCardDetails.typeId}
                    subheader="OM-STAKING"
                    classes={{
                        root: classes.stakeCardHeaderRoot,
                        title: classes.stakeCardTitle,
                        subheader: classes.stakeCardSubheader,
                        avatar: classes.stakeCardAvatar
                    }}
                />
                <CardContent style={{ borderBottom: '1px solid #dee2e6' }}>
                    <Grid container direction="column" spacing={2}>
                        <Grid
                            item
                            container
                            justify="space-between"
                            className={classes.stakeCardTextContainer}
                        >
                            <Grid item>
                                <Typography className={classes.stakeCardText}>
                                    YOUR BALANCE
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.stakeCardText}>
                                    {metamaskState.stakeCardDetails?.currentTotalStake} OM
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            justify="space-between"
                            className={classes.stakeCardTextContainer}
                        >
                            <Grid item>
                                <Typography className={classes.stakeCardText}>
                                    CURRENT TOTAL STAKE
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.stakeCardTextValue}>
                                    {metamaskState.stakeCardDetails?.currentTotalStake} OM
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardContent style={{ padding: '20px' }}>
                    <Grid container direction="row" spacing={1}>
                        <Grid
                            item
                            container
                            alignItems="center"
                            className={classes.USMFLabelColumn}
                        >
                            <Typography className={classes.USMFLabel}>USMF</Typography>
                        </Grid>
                        <Grid
                            item
                            container
                            xs={12}
                            direction="column"
                            spacing={1}
                            className={classes.stakeCardInputColumn}
                        >
                            <Grid item>
                                <Typography className={classes.stakeCardText}>
                                    STAKE AMOUNT
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Input
                                    className={classes.stakeCardInput}
                                    placeholder="10000"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item>
                                <Typography style={{ color: '#aaa', padding: '0px 15px' }}>
                                    MIN. STAKE: 1 0M
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardContent>
                    <Grid container direction="column" spacing={2}>
                        <Grid
                            item
                            container
                            justify="space-between"
                            className={classes.stakeCardTextContainer}
                        >
                            <Grid item>
                                <Typography className={classes.stakeCardText}>
                                    ESTIMATED REWARDS
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.stakeCardText}>9 0M</Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            justify="space-between"
                            className={classes.stakeCardTextContainer}
                        >
                            <Grid item>
                                <Typography className={classes.stakeCardText}>
                                    MATURITY DATE
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.stakeCardTextValue}>
                                    {metamaskState?.stakeCardDetails?.timeTillMaturity}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button endIcon={<ArrowForwardIcon />} className={classes.stakeCardButton}>
                        STAKE
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default StakeCard
