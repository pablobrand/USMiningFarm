import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
    palette: {
        text: {
            primary: '#ffffff'
        }
    },
    typography: {
        fontFamily: ['Rajdhani', 'sans-serif'].join(','),
        h1: {
            fontSize: '8.125rem', // 130px
            fontWeight: 700,
            lineHeight: 1
        },
        h2: {
            fontSize: '4.5625rem', // 73px
            fontWeight: 700
        },
        h3: {
            fontSize: '4.25rem', // 68px
            fontWeight: 700
        },
        h4: {
            fontSize: '2.1875rem', // 35px
            fontWeight: 700
        },
        h5: {
            fontSize: '2rem', // 32px
            fontWeight: 700
        },
        h6: {
            fontSize: '1.5rem', // 24px
            fontWeight: 700
        },
        body1: {
            fontSize: '1.5rem', // 24px
            fontFamily: "'Poppins', sans-serif",
            lineHeight: 1.75
        },
        body2: {
            fontSize: '1.375rem', // 22px
            fontFamily: "'Poppins', sans-serif",
            lineHeight: 1.875
        },
        allVariants: {
            color: 'white'
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200
        }
    }
})

// eslint-disable-next-line import/prefer-default-export
export { theme }
