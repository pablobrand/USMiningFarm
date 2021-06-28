import { useEffect } from 'react'
import TableItem from './TableItem'
import TableHead from './TableHead'
import { useMetaMask } from '../../../../functions/metamask/MetamaskContext'

const Table = () => {
    const { metamaskDispatch } = useMetaMask()
    useEffect(() => {
        metamaskDispatch({
            type: 'CHANGE_STAKE_CARD',
            payload: {
                typeId: `Type 1`,
                typeName: 'OM - STAKING',
                stakeBalance: 0,
                timeTillMaturity: '21-05-2021'.replace(/-/g, '/'),
                currentTotalStake: 0.0
            }
        })
    }, [])
    return (
        <table className="margin-30 width-85 table table-responsive">
            <TableHead />
            <TableItem type={1} />
            <TableItem
                type={2}
                initialStatus="VOTING"
                initialEstimatedRewards="35.30%"
                initialTimeTillMaturity="02:01 - 22-05-2021"
                initialTimeTillMaturityDate="22-05-2021"
                initialCurrentVoted="2 RFUEL"
                initialCurrentTotalStake={1.0}
            />
            <TableItem
                type={3}
                initialStatus="LOCKED"
                initialEstimatedRewards="35.30%"
                initialTimeTillMaturity="02:01 - 23-05-2021"
                initialTimeTillMaturityDate="23-05-2021"
                initialCurrentVoted="3 OM"
                initialCurrentTotalStake={2.0}
            />
        </table>
    )
}

export default Table
