/* eslint-disable import/prefer-default-export */
export const metamaskInitialState = {
    isMetamaskInstalled: false
}

export const metamaskReducer = (state, { type, payload }) => {
    switch (type) {
        case 'METAMASK_INSTALLED':
            return { ...state, isMetamaskInstalled: payload }
        default:
            return state
    }
}
