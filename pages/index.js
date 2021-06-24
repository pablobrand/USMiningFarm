import Head from 'next/head'
import HomeComponent from '../components/home'

export default function Home() {
    return (
        <>
            <Head>
                <title>USMF</title>
            </Head>
            <HomeComponent />
        </>
    )
}
