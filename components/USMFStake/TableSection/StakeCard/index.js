/* eslint-disable react/button-has-type */
import { Box } from '@material-ui/core'
import Image from 'next/image'
import { useMetaMask } from '../../../../functions/metamask/MetamaskContext'
import styles from './StakeCard.module.css'

const StakeCard = () => {
    const { metamaskState } = useMetaMask()
    return (
        <Box className={styles.stakeCard}>
            <Box className={styles.stakeCardBG}>
                <Box className={styles.stakeCardType}>
                    <Box className={styles.stakeCardImg}>
                        <Image src="/assets/images/logo.png" width={60} height={60} />
                    </Box>
                    <Box className={styles.stakeCardTypeLabel}>
                        <h2>
                            {metamaskState?.stakeCardDetails?.typeId} <br />{' '}
                            <span> OM - STAKING </span>{' '}
                        </h2>
                    </Box>
                </Box>

                <Box className={styles.stakeCardBalance}>
                    <Box className={styles.stakeCardBalanceLabel}>
                        <p> YOUR BALANCE </p>
                    </Box>
                    <Box className={styles.stakeCardBalanceAmount}>
                        <p> {metamaskState.stakeCardDetails?.currentTotalStake} OM </p>
                    </Box>
                </Box>

                <Box className={styles.stakeCardTotalStake}>
                    <Box className={styles.stakeCardTotalStakeLabel}>
                        <p> CURRENT TOTAL STAKE </p>
                    </Box>
                    <Box className={styles.stakeCardTotalStakeAmount}>
                        <p> {metamaskState.stakeCardDetails?.currentTotalStake} OM </p>
                    </Box>
                </Box>

                <Box className={styles.stakeCardInput}>
                    <Box className={styles.stakeCardInputLabel}>
                        <h5> USMF </h5>
                    </Box>
                    <Box className={styles.stakeCardInputArea}>
                        <h6> STAKE AMOUNT </h6>
                        <input type="text" placeholder="10000" />
                        <p> MIN. STAKE: 1 OM </p>
                    </Box>
                </Box>

                <Box className={styles.stakeCardEstimatedRewards}>
                    <Box className={styles.stakeCardEstimatedRewardsLabel}>
                        <p> ESTIMATED REWARDS </p>
                    </Box>
                    <Box className={styles.stakeCardEstimatedRewardsAmount}>
                        <p> 9 OM </p>
                    </Box>
                </Box>

                <Box className={styles.stakeCardMaturityDate}>
                    <Box className={styles.stakeCardMaturityDateLabel}>
                        <p> MATURITY DATE </p>
                    </Box>
                    <Box className={styles.stakeCardMaturityDateAmount}>
                        <p> {metamaskState?.stakeCardDetails?.timeTillMaturity} </p>
                    </Box>
                </Box>

                <button className={styles.stakeCardButton}>
                    {' '}
                    STAKE <i className="pull-right position-relative fa fa-arrow-right" />
                </button>
            </Box>
        </Box>
    )
}

export default StakeCard
