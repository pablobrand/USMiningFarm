import Head from 'next/head'
import USMFStakeComponent from '../components/USMFStakeContainer/USMFStakeContainer'

function USMFStake() {
    return (
        <>
            <Head>
                <title>USMF Stake</title>
            </Head>
            <USMFStakeComponent />
        </>
    )
}

export async function getServerSideProps(ctx) {
    const {
        cookies: { metamaskData }
    } = ctx.req

    return {
        props: {
            metamaskData: metamaskData ? JSON.parse(metamaskData) : null
        }
    }
}

export default USMFStake
