const addressTruncator = (addr = '') => {
    if (addr !== '') {
        return `${addr.slice(0, 6)}...${addr.slice(addr.length - 4)}`
    }

    return addr
}

export default addressTruncator
