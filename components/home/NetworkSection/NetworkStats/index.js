/* eslint-disable react/no-unescaped-entities */
import NetworkBlurb from '../NetworkBlurb'
import styles from './NetworkStats.module.css'

const NetworkStats = () => {
    return (
        <section>
            <div className={styles.networkStatRow}>
                <div>
                    <div className={styles.networkStatText}>
                        <h1>THE NETWORK IS LIVE</h1>
                        <p>
                            The People's Network is the world's fastest growing wireless network
                            ever.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.networkStatRow}>
                <div>
                    <NetworkBlurb heading="USMF OWNED" amount="46,391" propWidth={80} />
                </div>
                <div>
                    <NetworkBlurb
                        image="/assets/images/credit-card.png"
                        heading="CURRENT USMF STAKED"
                        amount="2,32,980"
                    />
                </div>
                <div>
                    <NetworkBlurb
                        image="/assets/images/data.png"
                        heading="CURRENT LP STAKED"
                        amount="0.6 GB"
                    />
                </div>
            </div>
        </section>
    )
}

export default NetworkStats
