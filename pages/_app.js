import Head from 'next/head'
import { useEffect } from 'react'
import Script from 'next/script'
import $ from 'jquery'
import Header from '../components/Header'

import '../public/assets/css/style.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MetaMaskProvider from '../functions/metamask/MetamaskContext'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 75) {
                $('#banner').addClass('sticky')
            } else {
                $('#banner').removeClass('sticky')
            }
        })
    }, [])
    return (
        <MetaMaskProvider {...pageProps}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header />
            <Component {...pageProps} />
            <Script
                src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
                strategy="beforeInteractive"
            />
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"
                strategy="lazyOnload"
            />
            <Script
                src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
                strategy="beforeInteractive"
            />
            {/* <Script src="/assets/js/other.js" /> */}
        </MetaMaskProvider>
    )
}
export default MyApp
