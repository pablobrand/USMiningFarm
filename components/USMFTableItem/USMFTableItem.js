import { useState, useEffect } from 'react'
import { Typography, TableCell, TableRow, Grid } from '@material-ui/core'
import Image from 'next/image'
import { useMetaMask } from '../../functions/metamask/MetamaskContext'
import styles from './usmftableitem.module.css'

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

    return (
        <TableRow className={styles.tableBodyRow} onClick={changeStakeCardHandler}>
            <TableCell className={styles.tableBodyFirstCell}>
                <Grid container>
                    <Image src="/assets/images/logo.png" height={80} width={80} />
                    <Grid>
                        <Typography variant="h6" className={styles.type} component="h3">
                            TYPE {type}
                        </Typography>
                        <Typography variant="h5" className={styles.typeValue}>
                            0M {Number(initialCurrentTotalStake).toFixed(2)}
                        </Typography>
                    </Grid>
                </Grid>
            </TableCell>
            <TableCell className={styles.tableBodyCell}>
                <Typography variant="h6" style={{ color: `${setStatusColor(status)}` }}>
                    {status.toUpperCase()}
                </Typography>
            </TableCell>
            <TableCell className={styles.tableBodyCell}>
                <Typography variant="h6">{initialEstimatedRewards}</Typography>
            </TableCell>
            <TableCell className={styles.tableBodyCell}>
                <Typography variant="h6">{initialTimeTillMaturity}</Typography>
            </TableCell>
            <TableCell className={styles.tableBodyLastCell}>
                <Typography variant="h6">{initialCurrentVoted}</Typography>
            </TableCell>
        </TableRow>
    )
}

export default USMFTableItem
