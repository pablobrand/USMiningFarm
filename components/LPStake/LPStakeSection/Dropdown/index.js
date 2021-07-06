import { useState } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import styles from './Dropdown.module.css'

const Dropdown = () => {
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <button className={styles.dropdownButton} type="button" onClick={handleClick}>
                ALL NETWORKS <span className={styles.caret} />
            </button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
            >
                <MenuItem onClick={handleClose}>Lorem Ipsum</MenuItem>
                <MenuItem onClick={handleClose}>Lorem Ipsum</MenuItem>
                <MenuItem onClick={handleClose}>Lorem Ipsum</MenuItem>
            </Menu>
        </>
    )
}

export default Dropdown
