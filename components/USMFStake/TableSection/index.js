/* eslint-disable react/button-has-type */
import Table from './Table'
import StakeCard from './StakeCard'

const TableSection = () => {
    return (
        <section className="table-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 col-xs-12 col-xs-12">
                        {/* <div className="margin-30 stake-button">
                            <button> STAKE </button>
                        </div> */}
                        <Table />
                    </div>
                    <StakeCard />
                </div>
            </div>
        </section>
    )
}

export default TableSection
