import NetworkStats from './NetworkStats'
import AboutSection from './AboutSection'

export default function NetworkSection() {
    return (
        <section className="network-section">
            <div className="container">
                <NetworkStats />
                <AboutSection />
            </div>
        </section>
    )
}
