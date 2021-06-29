import Script from 'next/script'
import dynamic from 'next/dynamic'
import NetworkSection from './NetworkSection'
import HeroSection from './HeroSection'

const HomeModal = dynamic(() => import('./TestHomeModal'), {
    loading: () => <div />
})

export default function HomeComponent() {
    return (
        <>
            <HeroSection />
            <NetworkSection />
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
