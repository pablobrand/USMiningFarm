import { Box } from '@material-ui/core'
import styles from './HeroSection.module.css'

const HeroSection = () => {
    return (
        <Box component="section" className={styles.heroBG}>
            <Box className={styles.heroContainer}>
                <Box className={styles.heroContainer}>
                    <Box className={styles.heroColumn}>
                        <Box className={styles.positionSet}>
                            <h1> LOREM IPSUM SIMPLE DUMMY </h1>
                            <p>
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod enim tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip{' '}
                            </p>
                            <button className={styles.heroButton} type="button">
                                {' '}
                                LEARN MORE{' '}
                            </button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default HeroSection
