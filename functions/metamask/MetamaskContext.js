import { useRef, createContext, useContext, useEffect, useReducer } from 'react'
import cookie from '../cookies'
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
            if (localStorage.getItem('walletAddress')) {
                metamaskDispatch({
                    type: 'CHANGE_WALLET_ADDRESS',
                    payload: localStorage.getItem('walletAddress')
                        ? localStorage.getItem('walletAddress')
                        : null
                })
            }

            return () => {}
        }

        cookie.set('metamaskData', metamaskState, {
            maxAge: 604800
        })
        return () => {}
    }, [metamaskState])

    useEffect(() => {
        window?.ethereum?.on('accountsChanged', (res = []) => {
            metamaskDispatch({
                type: 'CHANGE_WALLET_ADDRESS',
                payload: res.length === 0 ? null : res[0]
            })
        })
        return () => {
            window?.ethereum?.on('accountsChanged', (res = []) => {
                metamaskDispatch({
                    type: 'CHANGE_WALLET_ADDRESS',
                    payload: res.length === 0 ? null : res[0]
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
