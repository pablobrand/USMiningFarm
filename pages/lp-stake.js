import Head from 'next/head'
import LPStakeComponent from '../components/LPStake'

function AllNetwork() {
    return (
        <>
            <Head>
                <title>LP Stake</title>
            </Head>
            <LPStakeComponent />
        </>
    )
}

export default AllNetwork

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
