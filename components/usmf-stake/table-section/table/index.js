const Table = () => {
    return (
        <table className="margin-30 width-85 table table-responsive">
            <thead>
                <tr className="text-white">
                    <th className="min-width-first">
                        {' '}
                        TOTAL STAKED <br /> AMOUNT{' '}
                    </th>
                    <th className="min-width"> STATUS </th>
                    <th className="min-width">
                        {' '}
                        ESTIMATED <br /> REWARDS{' '}
                    </th>
                    <th className="min-width">
                        {' '}
                        TIME TILL <br /> MATURITY{' '}
                    </th>
                    <th className="min-width">
                        {' '}
                        CURRENT <br /> VOTED %{' '}
                    </th>
                </tr>
            </thead>

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
                    <td className="active-col"> ACTIVE </td>
                    <td className="grey-color"> 35.30% </td>
                    <td className="grey-color"> 02:01 - 21-05-2021 </td>
                    <td className="grey-color"> 0 OM </td>
                </tr>
            </tbody>

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
                    <td className="active-col"> VOTING </td>
                    <td className="grey-color"> 35.30% </td>
                    <td className="grey-color"> 02:01 - 21-05-2021 </td>
                    <td className="grey-color"> 0 RFUEL </td>
                </tr>
            </tbody>

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
                    <td className="active-col"> LOCKED </td>
                    <td className="grey-color"> 35.30% </td>
                    <td className="grey-color"> 02:01 - 21-05-2021 </td>
                    <td className="grey-color"> 0 OM </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table
