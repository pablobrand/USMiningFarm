import styles from './TableHead.module.css'

const TableHead = () => {
    return (
        <thead>
            <tr className={styles.tableRow}>
                <th className={styles.tableColumn1}>
                    {' '}
                    TOTAL STAKED <br /> AMOUNT{' '}
                </th>
                <th className={styles.tableColumn}> STATUS </th>
                <th className={styles.tableColumn}>
                    {' '}
                    ESTIMATED <br /> REWARDS{' '}
                </th>
                <th className={styles.tableColumn}>
                    {' '}
                    TIME TILL <br /> MATURITY{' '}
                </th>
                <th className={styles.tableColumn}>
                    {' '}
                    CURRENT <br /> VOTED %{' '}
                </th>
            </tr>
        </thead>
    )
}

export default TableHead
