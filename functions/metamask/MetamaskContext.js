import { createContext, useContext, useEffect, useReducer } from 'react'
import { isMetamaskInstalled } from './metamask'
import { metamaskInitialState, metamaskReducer } from './metamaskStore'

const MetaMask = createContext()

export const useMetaMask = () => {
    return useContext(MetaMask)
}

export default function MetaMaskProvider({ children }) {
    const [metamaskState, metamaskDispatch] = useReducer(metamaskReducer, metamaskInitialState)

    useEffect(() => {
        metamaskDispatch({
            type: 'METAMASK_INSTALLED',
            payload: isMetamaskInstalled()
        })
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
