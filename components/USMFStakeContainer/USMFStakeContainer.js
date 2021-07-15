import { Grid, makeStyles, Typography, Button } from '@material-ui/core'
import USMFTable from '../USMFTable/USMFTable'
import StakeCard from '../StakeCard/StakeCard'

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

    valueSection: {
        border: '1px solid #fff',
        backgroundColor: '#212121',
        padding: '1.3125rem 3.75rem'
    },

    value: {
        fontFamily: 'inherit',
        color: 'transparent',
        position: 'relative',
        fontSize: '2.1875rem',
        fontWeight: 700,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        backgroundImage: 'linear-gradient(90deg,#b43838,#b8374d,#b83b61,#b54175,#ae4a87)'
    },

    valueButton: {
        backgroundImage: 'linear-gradient(90deg,#b43838,#b8374d,#b83b61,#b54175,#ae4a87)',
        padding: '0.5rem 3.75rem !important',
        borderRadius: '12px !important',
        clipPath: 'polygon(80.5% 0, 100% 50%, 100% 100%, 0 100%, 0 0)',
        '& span': {
            fontSize: '1.8125rem',
            fontWeight: 700
        }
    },

    tableSection: {
        padding: '1.3125rem 3.75rem',
        backgroundColor: 'rgba(2,2,2,.85)'
    },

    stakeCardContainer: {
        paddingLeft: '1rem'
    },

    '@media (max-width: 1199px)': {
        stakeCardContainer: {
            paddingLeft: 0
        }
    },

    '@media (max-width: 767px)': {
        valueSection: {
            '& h4': {
                marginBottom: '0.5rem'
            }
        }
    }
})

const USMFStakeContainer = () => {
    const classes = useStyles()

    return (
        <Grid component="main" className={classes.main}>
            <Grid container item component="section" className={classes.banner} />
            <Grid container item component="section" className={classes.valueSection}>
                <Grid container item justify="space-between" alignItems="center">
                    <Typography variant="h4">
                        TOTAL STAKED VALUE:{' '}
                        <Typography component="span" className={classes.value}>
                            $0
                        </Typography>
                    </Typography>
                    <Button className={classes.valueButton}>BUY USMF</Button>
                </Grid>
            </Grid>
            <Grid
                container
                item
                component="section"
                justify="space-between"
                className={classes.tableSection}
            >
                <Grid container item xs={12} xl={8} className={classes.tableContainer}>
                    <USMFTable />
                </Grid>
                <Grid container item xs={12} xl={4} className={classes.stakeCardContainer}>
                    <StakeCard />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default USMFStakeContainer
