/* eslint-disable import/prefer-default-export */
import MetaMaskOnboarding from '@metamask/onboarding'

export const isMetamaskInstalled = () => {
    const { ethereum } = window
    return Boolean(ethereum && ethereum.isMetaMask)
}

const installMetamask = () => {
    const onboarding = new MetaMaskOnboarding()
    onboarding.startOnboarding()
}

const metamaskConnect = async () => {
    try {
        const { ethereum } = window
        await ethereum.request({
            method: 'eth_requestAccounts'
        })
    } catch (error) {
        console.error(error)
    }
}

export const metamaskHandler = (isInstalled = false) => {
    if (!isInstalled) {
        return installMetamask()
    }

    return metamaskConnect()
}
