import { Box } from '@material-ui/core'
import NetworkStats from './NetworkStats'
import AboutSection from './AboutSection'
import styles from './NetworkSection.module.css'

export default function NetworkSection() {
    return (
        <Box component="section" className={styles.networkSection}>
            <Box className={styles.networkSectionColumn}>
                <NetworkStats />
                <AboutSection />
            </Box>
        </Box>
    )
}
