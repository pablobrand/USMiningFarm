import { useState } from 'react'

const useModal = (isAutoLoad) => {
    const [isOpen, setIsOpen] = useState(isAutoLoad)

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    return { isOpen, handleOpen, handleClose }
}

export default useModal
