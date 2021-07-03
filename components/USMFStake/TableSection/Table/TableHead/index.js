import styles from './TableHead.module.css'

const TableHeadComponent = () => {
    return (
        <thead>
            <tr className={styles.tableRow}>
                <th align="center" className={styles.tableColumn1}>
                    {' '}
                    TOTAL STAKED <br /> AMOUNT{' '}
                </th>
                <th align="center" className={styles.tableColumn}>
                    {' '}
                    STATUS{' '}
                </th>
                <th align="center" className={styles.tableColumn}>
                    {' '}
                    ESTIMATED <br /> REWARDS{' '}
                </th>
                <th align="center" className={styles.tableColumn}>
                    {' '}
                    TIME TILL <br /> MATURITY{' '}
                </th>
                <th align="center" className={styles.tableColumn}>
                    {' '}
                    CURRENT <br /> VOTED %{' '}
                </th>
            </tr>
        </thead>
    )
}

export default TableHeadComponent
