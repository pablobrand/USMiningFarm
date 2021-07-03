import TableSection from './TableSection'
import USMFBanner from '../USMFBanner'
import styles from './USMFNetwork.module.css'

function AllNetworkComponent() {
    return (
        <div className={styles.container}>
            <USMFBanner />
            <TableSection />
        </div>
    )
}

export default AllNetworkComponent
