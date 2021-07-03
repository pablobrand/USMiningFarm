import { Box } from '@material-ui/core'
import TableSection from './TableSection'
import USMFBanner from '../USMFBanner'
import styles from './USMFNetwork.module.css'

function AllNetworkComponent() {
    return (
        <Box className={styles.container}>
            <USMFBanner />
            <TableSection />
        </Box>
    )
}

export default AllNetworkComponent
