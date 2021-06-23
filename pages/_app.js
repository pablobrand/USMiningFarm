import Head from 'next/head'
import Script from 'next/script'
import Header from '../components/Header'

import 'bootstrap/dist/css/bootstrap.css'
import '../public/assets/css/style.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                    crossOrigin="anonymous"
                />
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
            <Script src="/assets/js/other.js" />
        </>
    )
}

export default MyApp
