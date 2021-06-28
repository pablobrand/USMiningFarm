/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import Image from 'next/image'
import DepositModal from '../../../DepositModal'
import styles from './TableItem.module.css'

const TableItem = () => {
    const showModal = () => {
        $(document).ready(function () {
            $('#myModal3').modal('show')
        })
    }

    return (
        <div className={styles.tableItem}>
            <div className={styles.tableItemRow}>
                <div className={styles.tableItemColumn1}>
                    <div className={styles.tableItemLabel}>
                        <div className={styles.tableItemImg}>
                            <Image src="/assets/images/logo.png" width={100} height={100} />
                            <h3> UNISWAP </h3>
                        </div>
                        <h1> $54,934 </h1>
                    </div>
                </div>
                <div className={styles.tableItemColumn2}>
                    <div className={styles.tableItemInput}>
                        <h3>CURRENT USMF APR</h3>
                        <div>
                            <button className="custom-input" onClick={(event) => showModal(event)}>
                                DEPOSIT USMF LP
                            </button>
                            <div className="validation"> EARN 11.35% APR IN POOL </div>
                        </div>
                    </div>
                </div>
            </div>
            <DepositModal id={3} />
        </div>
    )
}

export default TableItem
