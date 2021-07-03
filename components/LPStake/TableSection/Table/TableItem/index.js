/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import { Box } from '@material-ui/core'
import Image from 'next/image'
import DepositModal from '../../../DepositModal'
import styles from './TableItem.module.css'

const TableItem = () => {
    return (
        <Box className={styles.tableItem}>
            <Box className={styles.tableItemRow}>
                <Box className={styles.tableItemColumn1}>
                    <Box className={styles.tableItemLabel}>
                        <Box className={styles.tableItemImg}>
                            <Image src="/assets/images/logo.png" width={100} height={100} />
                            <h3> UNISWAP </h3>
                        </Box>
                        <h1> $54,934 </h1>
                    </Box>
                </Box>
                <Box className={styles.tableItemColumn2}>
                    <Box className={styles.tableItemInput}>
                        <h3>CURRENT USMF APR</h3>
                        <Box>
                            <DepositModal id={3} />
                            <Box className={styles.validation}> EARN 11.35% APR IN POOL </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default TableItem
