import { Typography, TableCell, TableRow } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Image from 'next/image'
import { useMetaMask } from '../../../../../functions/metamask/MetamaskContext'

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

const USMFTableItem = ({
    initialStatus = 'active',
    initialEstimatedRewards = '35.30%',
    initialTimeTillMaturity = '02:01 - 21-05-2021',
    initialCurrentVoted = '0 OM',
    initialTimeTillMaturityDate = '21-05-2021',
    initialCurrentTotalStake = 0.0,
    type = 1
}) => {
    const { metamaskState, metamaskDispatch } = useMetaMask()
    const changeStakeCardHandler = () => {
        metamaskDispatch({
            type: 'CHANGE_STAKE_CARD',
            payload: {
                ...metamaskState.stakeCardDetails,
                typeId: `Type ${type}`,
                timeTillMaturity: initialTimeTillMaturityDate,
                currentTotalStake: Number(initialCurrentTotalStake).toFixed(2)
            }
        })
    }

    const classes = useStyles()
    return (
        <TableRow className={classes.tableBodyRow} onClick={changeStakeCardHandler}>
            <TableCell className={classes.tableBodyFirstCell}>
                <Image src="/assets/images/logo.png" height={80} width={80} />
                <Typography className={classes.type} component="h3">
                    TYPE {type}
                    <Typography className={classes.typeValue}>
                        0M {Number(initialCurrentTotalStake).toFixed(2)}
                    </Typography>
                </Typography>
            </TableCell>
            <TableCell className={classes.tableBodyCell} style={{ color: '#169e2d' }}>
                {initialStatus.toUpperCase()}
            </TableCell>
            <TableCell className={classes.tableBodyCell}>{initialEstimatedRewards}</TableCell>
            <TableCell className={classes.tableBodyCell}>{initialTimeTillMaturity}</TableCell>
            <TableCell className={classes.tableBodyCell}>{initialCurrentVoted}</TableCell>
        </TableRow>
    )
}

export default USMFTableItem
