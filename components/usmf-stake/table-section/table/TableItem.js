/* eslint-disable no-unused-vars */
import { useState } from 'react'

const TableItem = ({
    initialStatus,
    initialEstimatedRewards,
    initialTimeTillMaturity,
    initialCurrentVoted
}) => {
    const [status, setStatus] = useState(initialStatus)
    const [estimatedRewards, setEstimatedRewards] = useState(initialEstimatedRewards)
    const [timeTillMaturity, setTimeTillMaturity] = useState(initialTimeTillMaturity)
    const [currentVoted, setCurrentVoted] = useState(initialCurrentVoted)

    return (
        <tbody className="text-white">
            <tr className="bg-grey-type">
                <td className="ml-4 d-flex">
                    {' '}
                    <span>
                        {' '}
                        <img style={{ width: 80 }} src="assets/images/logo.png" alt="" />{' '}
                    </span>{' '}
                    <span className="pl-3 mt-4" style={{ lineHeight: 1.15, fontSize: 20 }}>
                        {' '}
                        <span style={{ color: '#8e353c' }}> TYPE1 </span> <br /> OM 0.00{' '}
                    </span>
                </td>
                <td className="active-col"> {status.toUpperCase()} </td>
                <td className="grey-color"> {estimatedRewards} </td>
                <td className="grey-color"> {timeTillMaturity} </td>
                <td className="grey-color"> {currentVoted} </td>
            </tr>
        </tbody>
    )
}

export default TableItem
