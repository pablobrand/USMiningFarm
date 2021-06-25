import Image from 'next/image'

const TableItem = ({
    initialStatus = 'active',
    initialEstimatedRewards = '35.30%',
    initialTimeTillMaturity = '02:01 - 21-05-2021',
    initialCurrentVoted = '0 OM'
}) => {
    return (
        <tbody className="text-white">
            <tr className="bg-grey-type">
                <td className="ml-4 d-flex">
                    {' '}
                    <span>
                        {' '}
                        <Image src="/assets/images/logo.png" width={80} height={80} />
                    </span>{' '}
                    <span className="pl-3 mt-4" style={{ lineHeight: 1.15, fontSize: 20 }}>
                        {' '}
                        <span style={{ color: '#8e353c' }}> TYPE1 </span> <br /> OM 0.00{' '}
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
