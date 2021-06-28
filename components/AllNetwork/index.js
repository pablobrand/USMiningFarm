<<<<<<< HEAD:components/all-network/index.js
import TableSection from './table-section'
=======
import Script from 'next/script'
import TableSection from './TableSection'
import DepositModal from './DepositModal'
>>>>>>> a0b7b37d96a267a2d0d1b5d1a927983e2592eb45:components/AllNetwork/index.js
import USMFBanner from '../USMFBanner'

function AllNetworkComponent() {
    return (
        <div>
            <USMFBanner />
            <TableSection />
        </div>
    )
}

export default AllNetworkComponent
