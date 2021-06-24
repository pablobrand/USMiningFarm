import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/core/Icon'
import MobileMenu from './MobileMenu'
import mobileMenuButtonStyles from '../styles/MobileMenuButton.module.css'

function MobileMenuButton() {
    return (
        <nav className={mobileMenuButtonStyles.nav}>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <MobileMenu />
        </nav>
    )
}

export default MobileMenuButton
