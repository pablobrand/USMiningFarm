/* eslint-disable react/no-unescaped-entities */
import { Button, Grid, Typography, makeStyles } from '@material-ui/core'
import { useQuery } from '@apollo/client'
import LPStakeItem from '../LPStakeItem/LPStakeItem'
import useModal from '../../functions/hooks/useModal'
import DepositModal from '../DepositModal/DepositModal'
import { ETH_PRICE_QUERY } from '../../functions/apollo/queries'
import tokens from '../../functions/coins/addresses'

const useStyles = makeStyles({
    main: {
        backgroundImage: 'url(/assets/images/top-header-bg.jpg)',
        backgroundColor: '#1d1d1d',
        backgroundSize: '100%',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat'
    },

    banner: {
        minHeight: '255px'
    },

    LPStakeButton: {
        borderRadius: '34px !important',
        padding: '0 2.1875rem !important',
        backgroundImage: 'linear-gradient(to right, #b43838, #b8374d, #b83b61, #b54175, #ae4a87)',
        '& span': {
            fontSize: '2.1875rem !important',
            fontWeight: 700
        }
    },

    LPStakeButtonContainer: {
        marginTop: 'auto',
        marginBottom: 'auto',
        padding: '2.875rem 3.75rem'
    },

    LPStakeTableContainer: {
        marginTop: 'auto',
        marginBottom: 'auto',
        padding: '2.875rem 3.75rem'
    },

    LPStakeSection: {
        backgroundColor: 'rgba(2,2,2,.85)',
        minHeight: 'calc(100vh - 255px)'
    },

    messageContainer: {
        maxWidth: '1217px',
        marginBottom: '2.5rem !important',
        '& h6': {
            marginBottom: '0.9375rem'
        },

        '& p': {
            color: '#858585',
            fontWeight: 700,
            lineHeight: '2.1875rem'
        }
    },

    LPStakeItemContainer: {
        maxWidth: '1217px'
    },

    '@media (max-width: 767px)': {
        LPStakeButtonContainer: {
            padding: '2.875rem 1.5rem',
            justifyContent: 'center'
        },

        LPStakeTableContainer: {
            padding: '2.875rem 1.5rem',
            backgroundColor: 'rgba(2,2,2,.85)'
        }
    }
})

const LPStakeContainer = () => {
    const { isOpen, handleClose, handleOpen } = useModal()
    const classes = useStyles()
    const { loading: ethPriceLoading, data: ethData } = useQuery(ETH_PRICE_QUERY, {
        fetchPolicy: 'cache-and-network',
        pollInterval: 60000
    })
    return (
        <Grid container component="main" className={classes.main}>
            <Grid container item component="section" className={classes.banner} />
            <Grid container item component="section" className={classes.LPStakeSection}>
                <Grid container item className={classes.LPStakeButtonContainer}>
                    <Button onClick={handleOpen} className={classes.LPStakeButton}>
                        LP STAKE
                    </Button>
                </Grid>
                <Grid container item justify="center" className={classes.LPStakeTableContainer}>
                    <Grid container item className={classes.messageContainer}>
                        <Typography variant="h6">MESSAGE</Typography>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>
                    </Grid>
                    <Grid container item className={classes.LPStakeItemContainer}>
                        {tokens.map((token) => (
                            <LPStakeItem
                                key={token.coin}
                                handleOpen={handleOpen}
                                ethPriceLoading={ethPriceLoading}
                                ethData={ethData}
                                token={token}
                            />
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <DepositModal isOpen={isOpen} handleClose={handleClose} />
        </Grid>
    )
}

export default LPStakeContainer
