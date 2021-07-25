import { gql } from '@apollo/client'

export const COIN_QUERY = gql`
    query tokens($tokenAddress: Bytes!) {
        tokens(where: { id: $tokenAddress }) {
            derivedETH
            totalLiquidity
            symbol
        }
    }
`

export const ETH_PRICE_QUERY = gql`
    query ethPrice {
        bundle(id: "1") {
            ethPrice
        }
    }
`
