import { Box } from '@material-ui/core'
import Image from 'next/image'
import AboutBlurb from '../AboutBlurb'
import styles from './AboutSection.module.css'

const AboutSection = () => {
    return (
        <Box className={`${styles.aboutSectionRow}`}>
            <Box className={styles.aboutSectionCol}>
                <Image src="/assets/images/about-imag.png" alt="" width={540} height={546.69} />
            </Box>
            <Box className={`${styles.aboutSectionCol} ${styles.aboutSectionText}`}>
                <h1 className> ABOUT USMF </h1>
                <Box className={styles.aboutSectionTextLine} />
                <p>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                    eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.{' '}
                </p>

                <AboutBlurb
                    heading="SECURE USER DATA"
                    text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
                />

                <AboutBlurb
                    image="/assets/images/credibility.png"
                    heading="MOST CREADIBILITY"
                    text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
                />

                <AboutBlurb
                    image="/assets/images/secure.png"
                    heading="BIG DATA INSIGHTS"
                    text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
                />
            </Box>
        </Box>
    )
}

export default AboutSection
