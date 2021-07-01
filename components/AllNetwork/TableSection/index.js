/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import Table from './Table'
import Dropdown from '../Dropdown'
import styles from './TableSection.module.css'

const TableSection = () => {
    return (
        <section className={styles.tableSection}>
            <div className={styles.tableContainer}>
                <div className={styles.tableRow}>
                    <div className={styles.tableCol}>
                        <div className={styles.stakeButton}>
                            <button> LP STAKE </button>
                        </div>
                    </div>

                    <div className={styles.tableCol}>
                        <div>
                            <Dropdown />
                        </div>
                    </div>
                </div>
                <div className={styles.tableRow2}>
                    <div className={styles.tableCol2}>
                        <Table />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TableSection
