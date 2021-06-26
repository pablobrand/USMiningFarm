import Script from 'next/script'
import dynamic from 'next/dynamic'
import BannerSection from './BannerSection'
import NetworkSection from './network-section'
// import HomeModal from './HomeModal'

const HomeModal = dynamic(() => import('./HomeModal'), {
    loader: <div />,
    ssr: false
})

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
