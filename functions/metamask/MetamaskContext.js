import { useRef, createContext, useContext, useEffect, useReducer } from 'react'
import cookie from '../cookies'

import { isMetamaskInstalled } from './metamask'
import { metamaskInitialState, metamaskReducer } from './metamaskStore'

const MetaMask = createContext()

export const useMetaMask = () => {
    return useContext(MetaMask)
}

export default function MetaMaskProvider({ children, metamaskData }) {
    const isMounted = useRef(false)
    const [metamaskState, metamaskDispatch] = useReducer(
        metamaskReducer,
        metamaskData || metamaskInitialState
    )

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true
            return () => {}
        }
        cookie.set('metamaskData', metamaskState, {
            maxAge: 604800
        })
        return () => {}
    }, [metamaskState])

    useEffect(() => {
        if (!metamaskData?.isMetamaskInstalled) {
            metamaskDispatch({
                type: 'METAMASK_INSTALLED',
                payload: isMetamaskInstalled()
            })
        }
    }, [])

    useEffect(() => {
        window?.ethereum?.on('accountsChanged', () => {
            metamaskDispatch({
                type: 'CHANGE_WALLET_ADDRESS',
                payload: window?.ethereum?.selectedAddress
            })
        })

        return () => {
            window?.ethereum?.on('accountsChanged', () => {
                metamaskDispatch({
                    type: 'CHANGE_WALLET_ADDRESS',
                    payload: window?.ethereum?.selectedAddress
                })
            })
        }
    }, [])
    return (
        <MetaMask.Provider
            value={{
                metamaskState,
                metamaskDispatch
            }}
        >
            {children}
        </MetaMask.Provider>
    )
}
