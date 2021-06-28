import Script from 'next/script'
import dynamic from 'next/dynamic'
import BannerSection from './BannerSection'
import NetworkSection from './NetworkSection'

const HomeModal = dynamic(() => import('./HomeModal'), {
    loading: () => <div />
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
                {`
                    $(document).ready(function() {
                        $('#myModal2').modal('show');
                    });`}
            </Script>
        </>
    )
}
