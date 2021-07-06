/* eslint-disable jsx-a11y/anchor-is-valid */
import { Grid, List, ListItem, ListItemIcon, Typography, makeStyles } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import Image from 'next/image'
import Link from 'next/link'

const useStyles = makeStyles({
    footerContainer: {
        backgroundColor: '#020202'
    },

    upperFooterContainer: {
        padding: '3rem 60px'
    },

    lowerFooterContainer: {
        borderTop: '1px solid #333256',
        padding: '25px 60px'
    },

    companyNavListContainer: {
        color: '#fff',
        paddingRight: '10px'
    },

    listItem: {
        padding: 0,
        paddingTop: '10px'
    },

    listItemHeading: {
        color: '#fff',
        fontFamily: '"Poppins", sans-serif',
        fontWeight: '500',
        fontSize: '24px'
    },

    listItemText: {
        color: '#fff',
        fontSize: '14px',
        fontFamily: '"Quicksand", sans-serif'
    },

    listItemIconRoot: {
        minWidth: 0,
        marginRight: '10px'
    },

    newsLetterHeading: {
        color: '#fff',
        fontFamily: '"Poppins", sans-serif',
        fontWeight: '500',
        fontSize: '24px',
        marginBottom: '18px'
    },

    newsLetterParagraph: {
        color: '#fff',
        fontFamily: '"Poppins", sans-serif',
        fontWeight: '500',
        fontSize: '16px',
        marginBottom: '12px'
    },

    searchWrapper: {
        position: 'relative',
        marginBottom: '1.5rem'
    },

    searchWrapperInput: {
        width: '100%',
        height: '43px',
        padding: '10px 80px 10px 15px',
        border: 0,
        background: '#fff',
        borderRadius: '40px',
        borderTopStyle: 'none',
        fontFamily: '"Poppins", sans-serif',
        outline: 'none !important'
    },

    searchWrapperButton: {
        border: 0,
        padding: '12px 20px',
        color: '#fff',
        textTransform: 'uppercase',
        backgroundImage: 'linear-gradient(to right, #b43838, #b8374d, #b83b61, #b54175, #ae4a87)',
        borderRadius: '40px',
        position: 'absolute',
        right: 0,
        outline: 'none !important',
        fontFamily: '"Poppins", sans-serif'
    },

    creditText: {
        color: '#fff'
    },

    lowerFooterLinks: {
        color: '#fff'
    },

    '@media (max-width: 767px)': {
        upperFooterContainer: {
            padding: '1rem 24px'
        },

        lowerFooterContainer: {
            padding: '25px 24px'
        },

        footerLogoContainer: {
            marginBottom: '1.5rem'
        },

        companyNavListContainer: {
            marginBottom: '1rem'
        },

        getInTouchNavListContainer: {
            marginBottom: '1rem'
        }
    }
})

const Footer = () => {
    const classes = useStyles()

    return (
        <>
            <Grid container className={classes.footerContainer}>
                <Grid container item className={classes.upperFooterContainer}>
                    <Grid item xs={12} md={3} lg={3} className={classes.footerLogoContainer}>
                        <Image src="/assets/images/footer-logo.png" height={120} width={120} />
                    </Grid>
                    <Grid item xs={12} md={3} lg={2} className={classes.companyNavListContainer}>
                        <Link href="#">
                            <Typography variant="h5" className={classes.listItemHeading}>
                                Company
                            </Typography>
                        </Link>
                        <List>
                            <ListItem className={classes.listItem}>
                                <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
                                    <FiberManualRecordIcon
                                        style={{ fill: '#b8374d', height: '6.5px', width: '6.5px' }}
                                    />
                                </ListItemIcon>
                                <Link href="#">
                                    <Typography className={classes.listItemText}>Home</Typography>
                                </Link>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
                                    <FiberManualRecordIcon
                                        style={{ fill: '#b8374d', height: '6.5px', width: '6.5px' }}
                                    />
                                </ListItemIcon>
                                <Link href="#">
                                    <Typography className={classes.listItemText}>About</Typography>
                                </Link>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
                                    <FiberManualRecordIcon
                                        style={{ fill: '#b8374d', height: '6.5px', width: '6.5px' }}
                                    />
                                </ListItemIcon>
                                <Link href="#">
                                    <Typography className={classes.listItemText}>
                                        Support
                                    </Typography>
                                </Link>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
                                    <FiberManualRecordIcon
                                        style={{ fill: '#b8374d', height: '6.5px', width: '6.5px' }}
                                    />
                                </ListItemIcon>
                                <Link href="#">
                                    <Typography className={classes.listItemText}>Blog</Typography>
                                </Link>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3} className={classes.getInTouchNavListContainer}>
                        <Link href="#">
                            <Typography variant="h5" className={classes.listItemHeading}>
                                Get in Touch
                            </Typography>
                        </Link>
                        <List>
                            <ListItem className={classes.listItem}>
                                <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
                                    <FiberManualRecordIcon
                                        style={{ fill: '#b8374d', height: '6.5px', width: '6.5px' }}
                                    />
                                </ListItemIcon>
                                <Link href="#">
                                    <Typography className={classes.listItemText}>
                                        info@usmf.com
                                    </Typography>
                                </Link>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
                                    <FiberManualRecordIcon
                                        style={{ fill: '#b8374d', height: '6.5px', width: '6.5px' }}
                                    />
                                </ListItemIcon>
                                <Link href="#">
                                    <Typography className={classes.listItemText}>
                                        sales@usmf.com
                                    </Typography>
                                </Link>
                            </ListItem>
                        </List>
                        <Grid item className={classes.getInTouchNavListContainer}>
                            <Link href="#">
                                <Typography variant="h5" className={classes.listItemHeading}>
                                    Press
                                </Typography>
                            </Link>
                            <List>
                                <ListItem className={classes.listItem}>
                                    <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
                                        <FiberManualRecordIcon
                                            style={{
                                                fill: '#b8374d',
                                                height: '6.5px',
                                                width: '6.5px'
                                            }}
                                        />
                                    </ListItemIcon>
                                    <Link href="#">
                                        <Typography className={classes.listItemText}>
                                            press@usmf.com
                                        </Typography>
                                    </Link>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={3} lg={4} className={classes.newsLetterContainer}>
                        <Typography variant="h5" className={classes.newsLetterHeading}>
                            Subscribe to Our Newsletter
                        </Typography>
                        <Typography className={classes.newsLetterParagraph}>
                            Subscribe To Newsletter To Stay Up To Date On Our Latest News
                        </Typography>
                        <form className={classes.searchWrapper}>
                            <input
                                className={classes.searchWrapperInput}
                                type="text"
                                placeholder="Email..."
                            />
                            <button className={classes.searchWrapperButton} type="submit">
                                {' '}
                                Subscribe{' '}
                            </button>
                        </form>
                        <Grid container spacing={1}>
                            <Grid item>
                                <Image src="/assets/images/in.png" width={30} height={30} />
                            </Grid>
                            <Grid item>
                                <Image src="/assets/images/tw.png" width={30} height={30} />
                            </Grid>
                            <Grid item>
                                <Image src="/assets/images/fb.png" width={30} height={30} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    container
                    item
                    justify="space-between"
                    className={classes.lowerFooterContainer}
                >
                    <Grid item>
                        <Typography className={classes.creditText}>
                            © 2021 usmf. All rights reserved.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.lowerFooterLinks}>
                            <Link href="/">
                                <a style={{ color: '#fff' }}>Privacy Policy</a>
                            </Link>{' '}
                            |{' '}
                            <Link href="/">
                                <a style={{ color: '#fff' }}>FAQ</a>
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer
