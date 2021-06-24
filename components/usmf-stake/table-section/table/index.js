import TableItem from './TableItem'
import TableHead from './TableHead'

const Table = () => {
    return (
        <table className="margin-30 width-85 table table-responsive">
            <TableHead />
            <TableItem
                initialStatus="active"
                initialEstimatedRewards="35.30%"
                initialTimeTillMaturity="02:01 - 21-05-2021"
                initialCurrentVoted="0 OM"
            />
            <TableItem
                initialStatus="VOTING"
                initialEstimatedRewards="35.30%"
                initialTimeTillMaturity="02:01 - 21-05-2021"
                initialCurrentVoted="0 RFUEL"
            />
            <TableItem
                initialStatus="LOCKED"
                initialEstimatedRewards="35.30%"
                initialTimeTillMaturity="02:01 - 21-05-2021"
                initialCurrentVoted="0 OM"
            />
        </table>
    )
}

export default Table
