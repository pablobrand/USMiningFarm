/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-unresolved
import MetaMaskOnboarding from '@metamask/onboarding'

export const isMetamaskInstalled = () => {
    const { ethereum } = window
    return Boolean(ethereum && ethereum.isMetaMask)
}

const installMetamask = () => {
    const onboarding = new MetaMaskOnboarding()
    onboarding.startOnboarding()
}

const metamaskConnect = async (disconnected = false, cb = (address = '') => address) => {
    try {
        const { ethereum } = window
        if (!disconnected) {
            const res = await ethereum.request({
                method: 'eth_requestAccounts'
            })
            localStorage.setItem('walletAddress', res[0])
        }

        if (disconnected) {
            const res = await ethereum.request({
                method: 'eth_requestAccounts'
            })
            await ethereum.request({
                method: 'wallet_requestPermissions',
                params: [
                    {
                        eth_accounts: {}
                    }
                ]
            })
            cb(res[0])
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
    }
}

export const metamaskHandler = (
    isInstalled = false,
    disconnected = false,
    cbHandler = (address = '') => address
) => {
    if (!isInstalled) {
        return installMetamask()
    }

    return metamaskConnect(disconnected, cbHandler)
}
