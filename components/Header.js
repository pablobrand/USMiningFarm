import { useState, useEffect } from 'react'
import { AppBar, Toolbar, Container } from '@material-ui/core'
import Image from 'next/image'
import NavList from './NavList'
import MobileMenu from './MobileMenuButton'
import NavAccount from './NavAccount'

function NavBar() {
    const [bgColor, setbgColor] = useState('transparent')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => {
                // eslint-disable-next-line no-unused-expressions
                window.pageYOffset > 10 ? setbgColor('#f7a417') : setbgColor('transparent')
            })
        }
    }, [])

    return (
        <Container maxWidth="md">
            <AppBar
                style={{
                    minHeight: 86,
                    justifyContent: 'center',
                    backgroundColor: bgColor,
                    transition: 'all 0.3s ease-out',
                    boxShadow: 'none'
                }}
            >
                <Toolbar style={{ justifyContent: 'space-between' }}>
                    <Image src="/logo.png" layout="fixed" width={60} height={60} />
                    <NavList />
                    <MobileMenu />
                    <NavAccount />
                </Toolbar>
            </AppBar>
        </Container>
    )
}

export default NavBar
