import Head from 'next/head'
import HomeContainer from '../components/HomeContainer/HomeContainer'
import Footer from '../components/Footer/Footer'

export default function Home() {
    return (
        <>
            <Head>
                <title>USMF</title>
            </Head>
            <HomeContainer />
            <Footer />
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
