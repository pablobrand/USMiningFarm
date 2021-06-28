/* eslint-disable react/button-has-type */
import ValueSection from './ValueSection'
import TableSection from './TableSection'
import USMFBanner from '../USMFBanner'
import styles from './USMFStake.module.css'

function USMFStakeComponent() {
    return (
        <div className={styles.container}>
            <USMFBanner />
            <ValueSection />
            <TableSection />
        </div>
    )
}

export default USMFStakeComponent
