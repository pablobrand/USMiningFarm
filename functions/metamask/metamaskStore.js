/* eslint-disable import/prefer-default-export */
export const metamaskInitialState = {
    isMetamaskInstalled: false,
    walletAccount: null,
    stakeCardDetails: {
        typeId: 'Type 1',
        typeName: 'OM - STAKING',
        stakeBalance: 0,
        timeTillMaturity: '01/01/1969',
        currentTotalStake: Number(0).toFixed(2)
    }
}

export const metamaskReducer = (state, { type, payload }) => {
    switch (type) {
        case 'METAMASK_INSTALLED':
            return { ...state, isMetamaskInstalled: payload }
        case 'CHANGE_STAKE_CARD':
            return {
                ...state,
                stakeCardDetails: payload
            }
        case 'CHANGE_WALLET_ADDRESS':
            return {
                ...state,
                walletAccount: payload
            }
        default:
            return state
    }
}
