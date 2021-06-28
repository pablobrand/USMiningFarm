const TableHead = () => {
    return (
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
    )
}

export default TableHead
