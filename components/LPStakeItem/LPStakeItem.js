import { Grid, Typography, Button } from '@material-ui/core'
import Image from 'next/image'
import styles from './lpstakeitem.module.css'

const LPStakeItem = () => {
    return (
        <Grid container item className={styles.LPStakeItem}>
            <Grid container item className={styles.LPStakeItemContainer}>
                <Grid container item lg={5} className={styles.LPStakeItemHeader}>
                    <Grid direction="column" className={styles.headerImg}>
                        <Grid>
                            <Image src="/assets/images/logo.png" height={86} width={86} />
                        </Grid>
                        <Typography variant="h6" style={{ fontSize: '1.6875rem' }}>
                            UNISWAP
                        </Typography>
                    </Grid>
                    <Grid container item className={styles.headerValue}>
                        <Typography variant="h3">$54,934</Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    item
                    lg={7}
                    justify="center"
                    alignItems="center"
                    className={styles.LPStakeItemInput}
                >
                    <Grid
                        container
                        item
                        direction="column"
                        className={styles.LPStakeItemInputContainer}
                    >
                        <Typography variant="h4">CURRENT USMF APR</Typography>
                        <Button>DEPOSIT USMF</Button>
                        <Typography variant="h6" component="p">
                            EARN 11.35% APR IN POOL
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default LPStakeItem
