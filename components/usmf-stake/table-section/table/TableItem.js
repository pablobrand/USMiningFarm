/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import Image from 'next/image'
import { useMetaMask } from '../../../../functions/metamask/MetamaskContext'
import style from '../../../../styles/usmf-stake/TableItem.module.css'

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
        <tbody className={`text-white ${style.tbody}`} onClick={changeStakeCardHandler}>
            <tr className="bg-grey-type">
                <td className="ml-4 d-flex">
                    {' '}
                    <span>
                        {' '}
                        <Image src="/assets/images/logo.png" width={80} height={80} />
                    </span>{' '}
                    <span className="pl-3 mt-4" style={{ lineHeight: 1.15, fontSize: 20 }}>
                        {' '}
                        <span style={{ color: '#8e353c' }}> TYPE {type} </span> <br /> OM{' '}
                        {Number(initialCurrentTotalStake).toFixed(2)}{' '}
                    </span>
                </td>
                <td className="active-col"> {initialStatus.toUpperCase()} </td>
                <td className="grey-color"> {initialEstimatedRewards} </td>
                <td className="grey-color"> {initialTimeTillMaturity} </td>
                <td className="grey-color"> {initialCurrentVoted} </td>
            </tr>
        </tbody>
    )
}

export default TableItem
