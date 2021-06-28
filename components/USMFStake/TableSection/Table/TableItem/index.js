/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import Image from 'next/image'
import { useMetaMask } from '../../../../../functions/metamask/MetamaskContext'
import styles from './TableItem.module.css'

const TableItem = ({
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
    return (
        <tbody className={styles.tableItemBody} onClick={changeStakeCardHandler}>
            <tr className={styles.tableItemRow}>
                <td className={styles.tableItemColumn1}>
                    <Image src="/assets/images/logo.png" width={80} height={80} />
                    <span className={styles.totalStakedAmount}>
                        <span className={styles.type}> TYPE {type} </span> <br /> OM{' '}
                        {Number(initialCurrentTotalStake).toFixed(2)}
                    </span>
                </td>
                <td className={styles.statusColumn}> {initialStatus.toUpperCase()} </td>
                <td className={styles.estimatedRewardsColumn}> {initialEstimatedRewards} </td>
                <td className={styles.timeTillMaturityColumn}> {initialTimeTillMaturity} </td>
                <td className={styles.currentVotedColumn}> {initialCurrentVoted} </td>
            </tr>
        </tbody>
    )
}

export default TableItem
