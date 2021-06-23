import NavBar from '../components/NavBar'
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head'
import HomeComponent from '../components/home'

export default function Home() {
    return (
        <>
            <NavBar />
            <Head>
                <title>USMF</title>
            </Head>
            <HomeComponent />
        </>
    )
}
