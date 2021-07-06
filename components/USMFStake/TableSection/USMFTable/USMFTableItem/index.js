import { useState, useEffect } from 'react'
import { Typography, TableCell, TableRow } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Image from 'next/image'
import { useMetaMask } from '../../../../../functions/metamask/MetamaskContext'

const useStyles = makeStyles({
    tableBodyFirstCell: {
        backgroundColor: '#212121',
        fontSize: '1rem',
        fontWeight: 700,
        minWidth: '200px',
        borderColor: 'transparent',
        display: 'flex',
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px'
    },

    tableBodyCell: {
        backgroundColor: '#212121',
        color: '#6c6c6c',
        fontSize: '18px',
        fontWeight: 700,
        padding: '0 15px',
        minWidth: '100px',
        borderColor: 'transparent'
    },

    tableBodyLastCell: {
        backgroundColor: '#212121',
        color: '#6c6c6c',
        fontSize: '18px',
        fontWeight: 700,
        padding: '0 15px',
        minWidth: '100px',
        borderColor: 'transparent',
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px'
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
    // eslint-disable-next-line no-unused-vars
    const [status, setStatus] = useState(initialStatus)
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

    const setStatusColor = (currentStatus) => {
        switch (currentStatus.toUpperCase()) {
            case 'ACTIVE':
                return '#169e2d'
            case 'VOTING':
                return '#F7A417'
            case 'LOCKED':
                return '#F71726'
            default:
                return '#6c6c6c'
        }
    }

    useEffect(() => {
        setStatusColor(status)
    }, [])

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
            <TableCell
                className={classes.tableBodyCell}
                style={{ color: `${setStatusColor(status)}` }}
            >
                {status.toUpperCase()}
            </TableCell>
            <TableCell className={classes.tableBodyCell}>{initialEstimatedRewards}</TableCell>
            <TableCell className={classes.tableBodyCell}>{initialTimeTillMaturity}</TableCell>
            <TableCell className={classes.tableBodyLastCell}>{initialCurrentVoted}</TableCell>
        </TableRow>
    )
}

export default USMFTableItem
