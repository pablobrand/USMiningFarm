import styles from './HeroSection.module.css'

const HeroSection = () => {
    return (
        <section className={styles.heroBG}>
            <div className="container-fluid">
                <div className="row pl-4 pr-4">
                    <div className="col-md-5 col-xs-12 col-sm-12">
                        <div className={styles.positionSet}>
                            <h1 className="text-white"> LOREM IPSUM SIMPLE DUMMY </h1>
                            <p className="text-white">
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod enim tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip{' '}
                            </p>
                            <button type="button" className="text-white">
                                {' '}
                                LEARN MORE{' '}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
