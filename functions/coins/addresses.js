import { toChecksumAddress } from 'tochecksum'

export const UNISWAP_ADDRESS = '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
export const DAI_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f'

const logo = (checksumAddress) => {
    return `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${checksumAddress}/logo.png`
}

const tokens = [
    {
        coin: 'UNISWAP',
        address: UNISWAP_ADDRESS,
        logo: logo(toChecksumAddress(UNISWAP_ADDRESS))
    },
    {
        coin: 'DAI',
        address: DAI_ADDRESS,
        logo: logo(toChecksumAddress(DAI_ADDRESS))
    }
]

export default tokens
