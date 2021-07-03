/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import { Box } from '@material-ui/core'
import Table from './Table'
import Dropdown from '../Dropdown'
import styles from './TableSection.module.css'

const TableSection = () => {
    return (
        <Box component="section" className={styles.tableSection}>
            <Box className={styles.tableContainer}>
                <Box className={styles.tableRow}>
                    <Box className={styles.tableCol}>
                        <Box className={styles.stakeButton}>
                            <button> LP STAKE </button>
                        </Box>
                    </Box>

                    <Box className={styles.tableCol}>
                        <Box>
                            <Dropdown />
                        </Box>
                    </Box>
                </Box>
                <Box className={styles.tableRow2}>
                    <Box className={styles.tableCol2}>
                        <Table />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default TableSection
