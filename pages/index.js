import Head from 'next/head'
import HomeComponent from '../components/home'
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
