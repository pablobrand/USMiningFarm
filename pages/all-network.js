import Head from 'next/head'
import AllNetworkComponent from '../components/LPStake'

function AllNetwork() {
    return (
        <>
            <Head>
                <title>LP Stake</title>
            </Head>
            <AllNetworkComponent />
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
            metamaskData: JSON.parse(metamaskData) || null
        }
    }
}
