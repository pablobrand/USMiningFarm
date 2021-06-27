/* eslint-disable react/no-unescaped-entities */
import NetworkBlurb from './NetworkBlurb'

const NetworkStats = () => {
    return (
        <section className="usmf-section">
            <div className="usmf-row">
                <div className="usmf-column">
                    <div className="network-heading text-white text-center">
                        <h1>THE NETWORK IS LIVE</h1>
                        <p>
                            The People's Network is the world's fastest growing wireless network
                            ever.
                        </p>
                    </div>
                </div>
            </div>

            <div className="usmf-row gap-30">
                <div className="usmf-column">
                    <NetworkBlurb heading="USMF OWNED" amount="46,391" propWidth={80} />
                </div>
                <div className="usmf-column">
                    <NetworkBlurb
                        image="/assets/images/credit-card.png"
                        heading="CURRENT USMF STAKED"
                        amount="2,32,980"
                    />
                </div>
                <div className="usmf-column">
                    <NetworkBlurb
                        image="/assets/images/data.png"
                        heading="CURRENT LP STAKED"
                        amount="0.6 GB"
                    />
                </div>
            </div>
        </section>
    )
}

export default NetworkStats
