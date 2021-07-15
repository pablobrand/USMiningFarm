import { Grid, Typography, Input, Button } from '@material-ui/core'
import Image from 'next/image'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import styles from './stakecard.module.css'
import { useMetaMask } from '../../functions/metamask/MetamaskContext'

const StakeCard = () => {
    const { metamaskState } = useMetaMask()

    return (
        <Grid container item className={styles.stakeCard}>
            <Grid container item direction="column" className={styles.stakeCardContainer}>
                <Grid container item className={styles.stakeCardHeader}>
                    <Grid className={styles.headerImg}>
                        <Image src="/assets/images/logo.png" height={90} width={90} />
                    </Grid>
                    <Grid className={styles.headerText}>
                        <Typography variant="h6">
                            {metamaskState.stakeCardDetails.typeId}
                        </Typography>
                        <Typography variant="h5">OM - STAKING</Typography>
                    </Grid>
                </Grid>
                <Grid container item justify="center" className={styles.stakeCardAmount}>
                    <Grid
                        container
                        item
                        justify="space-between"
                        className={styles.balanceContainer}
                    >
                        <Typography variant="h6">YOUR BALANCE</Typography>
                        <Typography variant="h6">
                            {metamaskState.stakeCardDetails?.currentTotalStake} 0M
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        item
                        justify="space-between"
                        className={styles.currentTotalContainer}
                    >
                        <Typography variant="h6">CURRENT TOTAL STAKE</Typography>
                        <Typography variant="h6">
                            {metamaskState.stakeCardDetails?.currentTotalStake} 0M
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item className={styles.stakeCardInput}>
                    <Grid container item className={styles.stakeCardInputContainer}>
                        <Grid item className={styles.inputLabel}>
                            <Typography variant="h6" style={{ fontSize: '1.875rem' }}>
                                USMF
                            </Typography>
                        </Grid>
                        <Grid item className={styles.inputContainer}>
                            <Typography variant="h6">STAKE AMOUNT</Typography>
                            <Input
                                className={styles.input}
                                placeholder="10000"
                                variant="outlined"
                            />
                            <Typography
                                variant="h6"
                                style={{ color: '#AAAAAA', fontWeight: 'normal' }}
                            >
                                MIN. STAKE: 1 0M
                            </Typography>
                        </Grid>
                        <Grid container item>
                            <Grid
                                container
                                justify="space-between"
                                alignItems="center"
                                className={styles.estimatedRewardsContainer}
                            >
                                <Typography variant="h6">ESTIMATED REWARDS</Typography>
                                <Typography
                                    variant="h6"
                                    style={{ fontSize: '1.875rem', color: '#B33D4B' }}
                                >
                                    9 0M
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                justify="space-between"
                                alignItems="center"
                                className={styles.maturityDateContainer}
                            >
                                <Typography variant="h6">MATURITY DATE</Typography>
                                <Typography
                                    variant="h6"
                                    style={{ fontSize: '1.875rem', color: '#B33D4B' }}
                                >
                                    {metamaskState?.stakeCardDetails?.timeTillMaturity}
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                item
                                justify="center"
                                className={styles.inputButtonContainer}
                            >
                                <Button
                                    endIcon={<ArrowForwardIcon />}
                                    className={styles.inputButton}
                                >
                                    STAKE
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default StakeCard
