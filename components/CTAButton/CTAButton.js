import { Button, Grid } from '@material-ui/core'
import Link from 'next/link'
import styles from './ctabutton.module.css'

const CTAButton = ({ text = 'Learn More', href }) => {
    return (
        <Grid item className={styles.buttonContainer}>
            <Button>
                <Link href={href}>
                    <a className={styles.buttonText}>{text}</a>
                </Link>
            </Button>
        </Grid>
    )
}

export default CTAButton
