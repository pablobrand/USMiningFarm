import Head from 'next/head'
import HomeComponent from '../components/Homepage'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <Head>
                <title>USMF</title>
            </Head>
            <HomeComponent />
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
