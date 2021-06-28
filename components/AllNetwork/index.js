import Script from 'next/script'
import TableSection from './table-section'
import DepositModal from './DepositModal'
import USMFBanner from '../USMFBanner'

function AllNetworkComponent() {
    return (
        <div>
            <USMFBanner />
            <TableSection />
            <DepositModal />
            <Script strategy="afterInteractive">
                {`$(document).ready(function() {
                    $('#myModal3').modal('show');
                    });`}
            </Script>
        </div>
    )
}

export default AllNetworkComponent
