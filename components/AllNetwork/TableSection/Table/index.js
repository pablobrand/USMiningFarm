/* eslint-disable react/no-unescaped-entities */
import TableItem from './TableItem'
import MessageBlurb from './MessageBlurb'

const Table = () => {
    return (
        <div className="row message-section">
            <div className="col-md-8 md-offset-2 m-auto col-xs-12 col-sm-12">
                <MessageBlurb />
                <TableItem />
                <TableItem />
                <TableItem />
            </div>
        </div>
    )
}

export default Table
