import dynamic from 'next/dynamic'
import NetworkSection from './NetworkSection'
import HeroSection from './HeroSection'

const HomeModal = dynamic(() => import('./HomeModal'), {
    loading: () => <div />
})

function HomeComponent() {
    return (
        <>
            <HeroSection />
            <NetworkSection />
            <HomeModal />
        </>
    )
}

export default HomeComponent
