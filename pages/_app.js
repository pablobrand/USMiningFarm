import Head from 'next/head'
import { useEffect } from 'react'
import $ from 'jquery'
import { ThemeProvider } from '@material-ui/styles'
import { StylesProvider } from '@material-ui/core/styles'
import { ApolloProvider } from '@apollo/client'
import { theme } from '../components/theme'
import Header from '../components/Header/Header'
import '../public/assets/css/style.css'
import 'font-awesome/css/font-awesome.min.css'
import MetaMaskProvider from '../functions/metamask/MetamaskContext'
import { client } from '../functions/apollo/client'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 25) {
                $('#banner').addClass('sticky')
            } else {
                $('#banner').removeClass('sticky')
            }
        })
    }, [])

    return (
        <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
                <MetaMaskProvider {...pageProps}>
                    <Head>
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                    </Head>
                    <Header />
                    <ApolloProvider client={client}>
                        <Component {...pageProps} />
                    </ApolloProvider>
                </MetaMaskProvider>
            </ThemeProvider>
        </StylesProvider>
    )
}
export default MyApp
