/* eslint-disable react/button-has-type */
import Table from './Table'
import StakeCard from './StakeCard'
import styles from './TableSection.module.css'

const TableSection = () => {
    return (
        <section className={styles.tableSection}>
            <div className={styles.tableSectionRow}>
                {/* <div className="margin-30 stake-button">
                    <button> STAKE </button>
                </div> */}
                <Table />
                <StakeCard />
            </div>
        </section>
    )
}

export default TableSection
