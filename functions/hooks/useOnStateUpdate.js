import { useRef, useEffect } from 'react'

const useOnStateUpdate = (depArgs = [], cb = () => {}) => {
    const isMounted = useRef(false)
    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true
            return () => {}
        }

        cb()
        return () => {}
    }, [...depArgs])
}

export default useOnStateUpdate
