/* eslint-disable react/button-has-type */
import Image from 'next/image'
import { useMetaMask } from '../../../../functions/metamask/MetamaskContext'
import styles from './StakeCard.module.css'

const StakeCard = () => {
    const { metamaskState } = useMetaMask()
    return (
        <div className={styles.stakeCard}>
            <div className={styles.stakeCardBG}>
                <div className={styles.stakeCardType}>
                    <div className={styles.stakeCardImg}>
                        <Image src="/assets/images/logo.png" width={60} height={60} />
                    </div>
                    <div className={styles.stakeCardTypeLabel}>
                        <h2>
                            {metamaskState.stakeCardDetails.typeId} <br />{' '}
                            <span> OM - STAKING </span>{' '}
                        </h2>
                    </div>
                </div>

                <div className={styles.stakeCardBalance}>
                    <div className={styles.stakeCardBalanceLabel}>
                        <p> YOUR BALANCE </p>
                    </div>
                    <div className={styles.stakeCardBalanceAmount}>
                        <p> {metamaskState.stakeCardDetails?.currentTotalStake} OM </p>
                    </div>
                </div>

                <div className={styles.stakeCardTotalStake}>
                    <div className={styles.stakeCardTotalStakeLabel}>
                        <p> CURRENT TOTAL STAKE </p>
                    </div>
                    <div className={styles.stakeCardTotalStakeAmount}>
                        <p> {metamaskState.stakeCardDetails?.currentTotalStake} OM </p>
                    </div>
                </div>

                <div className={styles.stakeCardInput}>
                    <div className={styles.stakeCardInputLabel}>
                        <h5> USMF </h5>
                    </div>
                    <div className={styles.stakeCardInputArea}>
                        <h6> STAKE AMOUNT </h6>
                        <input type="text" placeholder="10000" />
                        <p> MIN. STAKE: 1 OM </p>
                    </div>
                </div>

                <div className={styles.stakeCardEstimatedRewards}>
                    <div className={styles.stakeCardEstimatedRewardsLabel}>
                        <p> ESTIMATED REWARDS </p>
                    </div>
                    <div className={styles.stakeCardEstimatedRewardsAmount}>
                        <p> 9 OM </p>
                    </div>
                </div>

                <div className={styles.stakeCardMaturityDate}>
                    <div className={styles.stakeCardMaturityDateLabel}>
                        <p> MATURITY DATE </p>
                    </div>
                    <div className={styles.stakeCardMaturityDateAmount}>
                        <p> {metamaskState?.stakeCardDetails?.timeTillMaturity} </p>
                    </div>
                </div>

                <button className={styles.stakeCardButton}>
                    {' '}
                    STAKE <i className="pull-right position-relative fa fa-arrow-right" />
                </button>
            </div>
        </div>
    )
}

export default StakeCard
