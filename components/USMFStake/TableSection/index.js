/* eslint-disable react/button-has-type */
import { Box } from '@material-ui/core'
import Table from './Table'
import StakeCard from './StakeCard'
import styles from './TableSection.module.css'

const TableSection = () => {
    return (
        <Box component="section" className={styles.tableSection}>
            <Box className={styles.tableSectionRow}>
                {/* <div className="margin-30 stake-button">
                    <button> STAKE </button>
                </div> */}
                <Table />
                <StakeCard />
            </Box>
        </Box>
    )
}

export default TableSection
