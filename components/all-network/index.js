import Script from 'next/script'
import TableSection from './table-section'
import DepositModal from './DepositModal'

function AllNetworkComponent() {
    return (
        <div>
            {/* <!-- banner section start --> */}
            <section className="banner__black__usmf" />
            {/* <!-- banner section end --> */}

            {/* <!-- Table-section --> */}
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
