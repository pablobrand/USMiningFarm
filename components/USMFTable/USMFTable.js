import {
    Grid,
    TableContainer,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from '@material-ui/core'
import USMFTableItem from '../USMFTableItem/USMFTableItem'
import styles from './usmftable.module.css'

const USMFTable = () => {
    return (
        <Grid container item className={styles.tableSectionRow}>
            <TableContainer style={{ height: 'max-content' }}>
                <Table className={styles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={styles.tableHeadFirstCell}>
                                <Typography variant="h6" component="h2">
                                    TOTAL STAKED AMOUNT
                                </Typography>
                            </TableCell>
                            <TableCell className={styles.tableHeadCell}>
                                <Typography variant="h6" component="h2">
                                    STATUS
                                </Typography>
                            </TableCell>
                            <TableCell className={styles.tableHeadCell}>
                                <Typography variant="h6" component="h2">
                                    ESTIMATED REWARDS
                                </Typography>
                            </TableCell>
                            <TableCell className={styles.tableHeadCell}>
                                <Typography variant="h6" component="h2">
                                    TIME TILL MATURITY
                                </Typography>
                            </TableCell>
                            <TableCell className={styles.tableHeadCell}>
                                <Typography variant="h6" component="h2">
                                    CURRENT VOTED %
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <USMFTableItem type={1} initialStatus="ACTIVE" />
                        <USMFTableItem
                            type={2}
                            initialStatus="VOTING"
                            initialEstimatedRewards="35.30%"
                            initialTimeTillMaturity="02:01 - 22-05-2021"
                            initialTimeTillMaturityDate="22-05-2021"
                            initialCurrentVoted="2 RFUEL"
                            initialCurrentTotalStake={1.0}
                        />
                        <USMFTableItem
                            type={3}
                            initialStatus="LOCKED"
                            initialEstimatedRewards="35.30%"
                            initialTimeTillMaturity="02:01 - 23-05-2021"
                            initialTimeTillMaturityDate="23-05-2021"
                            initialCurrentVoted="3 OM"
                            initialCurrentTotalStake={2.0}
                        />
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}

export default USMFTable
