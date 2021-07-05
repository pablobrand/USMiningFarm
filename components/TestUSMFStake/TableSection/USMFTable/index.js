import {
    Grid,
    TableContainer,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import USMFTableItem from './USMFTableItem'

const useStyles = makeStyles({
    tableSection: {
        minHeight: 'calc(100vh - 198px)',
        backgroundColor: 'rgba(2,2,2,.85)',
        padding: '25px',
        flex: '1 1'
    },

    table: {
        minWidth: 960
    },

    tableHeadFirstCell: {
        fontSize: '1rem',
        fontWeight: 700,
        textAlign: 'center',
        minWidth: '300px',
        borderColor: 'transparent'
    },

    tableHeadCell: {
        fontSize: '1rem',
        fontWeight: 700,
        minWidth: '165px',
        borderColor: 'transparent'
    },

    tableBodyRow: {
        borderTop: '10px solid #020202',
        backgroundColor: '#212121'
    },

    tableBodyFirstCell: {
        fontSize: '1rem',
        fontWeight: 700,
        minWidth: '300px',
        borderColor: 'transparent',
        display: 'flex'
    },

    tableBodyCell: {
        color: '#6c6c6c',
        fontSize: '18px',
        fontWeight: 700,
        padding: '0 15px',
        minWidth: '165px',
        borderColor: 'transparent'
    },

    type: {
        fontSize: '20px',
        fontWeight: 700,
        color: '#8e353c',
        paddingLeft: '1rem'
    },

    typeValue: {
        fontSize: '20px',
        fontWeight: 700,
        color: '#ffffff'
    }
})

const USMFTable = () => {
    const classes = useStyles()
    return (
        <Grid lg={7} container item className={classes.tableSectionRow}>
            <TableContainer>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHeadFirstCell}>
                                TOTAL STAKED AMOUNT
                            </TableCell>
                            <TableCell className={classes.tableHeadCell}>STATUS</TableCell>
                            <TableCell className={classes.tableHeadCell}>
                                ESTIMATED REWARDS
                            </TableCell>
                            <TableCell className={classes.tableHeadCell}>
                                TIME TILL MATURITY
                            </TableCell>
                            <TableCell className={classes.tableHeadCell}>CURRENT VOTED %</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <USMFTableItem type={1} initialStatus="Locked" />
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
