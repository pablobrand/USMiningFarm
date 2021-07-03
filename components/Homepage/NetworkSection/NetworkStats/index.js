/* eslint-disable react/no-unescaped-entities */
import { Box } from '@material-ui/core'
import NetworkBlurb from '../NetworkBlurb'
import styles from './NetworkStats.module.css'

const NetworkStats = () => {
    return (
        <Box compoenent="section">
            <Box className={styles.networkStatRow}>
                <Box>
                    <Box className={styles.networkStatText}>
                        <h1>THE NETWORK IS LIVE</h1>
                        <p>
                            The People's Network is the world's fastest growing wireless network
                            ever.
                        </p>
                    </Box>
                </Box>
            </Box>

            <Box className={styles.networkStatRow}>
                <Box>
                    <NetworkBlurb heading="USMF OWNED" amount="46,391" propWidth={80} />
                </Box>
                <Box>
                    <NetworkBlurb
                        image="/assets/images/credit-card.png"
                        heading="CURRENT USMF STAKED"
                        amount="2,32,980"
                    />
                </Box>
                <Box>
                    <NetworkBlurb
                        image="/assets/images/data.png"
                        heading="CURRENT LP STAKED"
                        amount="0.6 GB"
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default NetworkStats
