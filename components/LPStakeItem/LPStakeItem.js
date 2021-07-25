import { useQuery } from '@apollo/client'
import { Grid, Typography, Button } from '@material-ui/core'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { COIN_QUERY } from '../../functions/apollo/queries'
import styles from './lpstakeitem.module.css'

const LPStakeItem = ({ handleOpen, ethPriceLoading = true, ethData = null, token = null }) => {
    const [coinPriceInUSD, setCoinPriceInUSD] = useState(null)
    const { loading: tokenLoading, data: coinData } = useQuery(COIN_QUERY, {
        variables: {
            tokenAddress: token?.address || ''
        },
        pollInterval: 60000,
        fetchPolicy: 'cache-and-network'
    })

    useEffect(() => {
        if (!tokenLoading && !ethPriceLoading) {
            const price = (
                parseFloat(coinData.tokens[0].derivedETH) * parseFloat(ethData.bundle.ethPrice)
            ).toFixed(2)
            setCoinPriceInUSD(price)
        }
    }, [tokenLoading, ethPriceLoading])
    return (
        <Grid
            container
            item
            className={styles.LPStakeItem}
            style={{
                marginBottom: '0.5rem'
            }}
        >
            <Grid container item className={styles.LPStakeItemContainer}>
                <Grid container item lg={5} className={styles.LPStakeItemHeader}>
                    <Grid container direction="column" className={styles.headerImg}>
                        <Grid>
                            <Image src="/assets/images/logo.png" height={86} width={86} />
                        </Grid>
                        <Typography variant="h6" style={{ fontSize: '1.6875rem' }}>
                            {token?.coin}
                        </Typography>
                    </Grid>
                    <Grid container item className={styles.headerValue}>
                        <Typography variant="h3">
                            {coinPriceInUSD && `$${coinPriceInUSD}`}
                        </Typography>
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
                        <Button onClick={handleOpen}>DEPOSIT USMF</Button>
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
