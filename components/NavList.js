import { Link, Button } from '@material-ui/core'
import { useRouter } from 'next/router'
import navListStyles from '../styles/NavList.module.css'

function NavList() {
    const router = useRouter()
    const path = router.pathname
    const buttonGradient = 'linear-gradient(to right, #b43838, #b8374d, #b83b61, #b54175, #ae4a87)'

    return (
        <nav className={navListStyles.nav}>
            <Button
                variant="text"
                className={navListStyles}
                style={{
                    backgroundImage: `${path === '/' ? buttonGradient : ''}`
                }}
            >
                <Link href="/">HOME</Link>
            </Button>
            <Button
                variant="text"
                style={{
                    backgroundImage: `${path === '/usmf-stake' ? buttonGradient : ''}`
                }}
            >
                <Link href="/usmf-stake">USMF STAKE</Link>
            </Button>
            <Button
                variant="text"
                style={{
                    backgroundImage: `${path === '/all-network' ? buttonGradient : ''}`
                }}
            >
                <Link href="/all-network">LP STAKE</Link>
            </Button>
        </nav>
    )
}

export default NavList
