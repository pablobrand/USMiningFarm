import NetworkStats from './NetworkStats'
import AboutSection from './AboutSection'
import styles from './NetworkSection.module.css'

export default function NetworkSection() {
    return (
        <section className={styles.networkSection}>
            <div className="container">
                <NetworkStats />
                <AboutSection />
            </div>
        </section>
    )
}
