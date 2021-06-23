import Script from 'next/script'
import BannerSection from './BannerSection'
import NetworkSection from './network-section'
import HomeModal from './HomeModal'

export default function HomeComponent() {
    return (
        <>
            <BannerSection />
            <section className="network-section">
                <div className="container">
                    <NetworkSection />
                </div>
            </section>
            <HomeModal />
            <Script strategy="afterInteractive">
                {`$(document).ready(function() {
                        $('#myModal3').modal('show');
                    });
                    $(document).ready(function() {
                        $('#myModal2').modal('show');
                    });`}
            </Script>
        </>
    )
}
