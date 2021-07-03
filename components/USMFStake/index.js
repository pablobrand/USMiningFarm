/* eslint-disable react/button-has-type */
import { Box } from '@material-ui/core'
import ValueSection from './ValueSection'
import TableSection from './TableSection'
import USMFBanner from '../USMFBanner'
import styles from './USMFStake.module.css'

function USMFStakeComponent() {
    return (
        <Box className={styles.container}>
            <USMFBanner />
            <ValueSection />
            <TableSection />
        </Box>
    )
}

export default USMFStakeComponent
