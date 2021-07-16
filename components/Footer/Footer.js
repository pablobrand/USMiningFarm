/* eslint-disable jsx-a11y/anchor-is-valid */
import { Grid, List, ListItem, ListItemIcon, Typography } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import Image from 'next/image'
import Link from 'next/link'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <>
            <Grid container className={styles.footerContainer} component="footer">
                <Grid container item className={styles.upperFooterContainer}>
                    <Grid item xs={12} lg={4} xl={3} className={styles.footerLogoContainer}>
                        <Image src="/assets/images/footer-logo.png" height={120} width={120} />
                    </Grid>
                    <Grid item xs={12} lg={4} xl={2} className={styles.companyNavListContainer}>
                        <Link href="#">
                            <Typography variant="h5" className={styles.listItemHeading}>
                                Company
                            </Typography>
                        </Link>
                        <List>
                            <ListItem className={styles.listItem}>
                                <ListItemIcon classes={{ root: styles.listItemIconRoot }}>
                                    <FiberManualRecordIcon
                                        style={{ fill: '#b8374d', height: '6.5px', width: '6.5px' }}
                                    />
                                </ListItemIcon>
                                <Link href="#">
                                    <Typography className={styles.listItemText}>Home</Typography>
                                </Link>
                            </ListItem>
                            <ListItem className={styles.listItem}>
                                <ListItemIcon classes={{ root: styles.listItemIconRoot }}>
                                    <FiberManualRecordIcon
                                        style={{ fill: '#b8374d', height: '6.5px', width: '6.5px' }}
                                    />
                                </ListItemIcon>
                                <Link href="#">
                                    <Typography className={styles.listItemText}>About</Typography>
                                </Link>
                            </ListItem>
                            <ListItem className={styles.listItem}>
                                <ListItemIcon classes={{ root: styles.listItemIconRoot }}>
                                    <FiberManualRecordIcon
                                        style={{ fill: '#b8374d', height: '6.5px', width: '6.5px' }}
                                    />
                                </ListItemIcon>
                                <Link href="#">
                                    <Typography className={styles.listItemText}>Support</Typography>
                                </Link>
                            </ListItem>
                            <ListItem className={styles.listItem}>
                                <ListItemIcon classes={{ root: styles.listItemIconRoot }}>
                                    <FiberManualRecordIcon
                                        style={{ fill: '#b8374d', height: '6.5px', width: '6.5px' }}
                                    />
                                </ListItemIcon>
                                <Link href="#">
                                    <Typography className={styles.listItemText}>Blog</Typography>
                                </Link>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} lg={4} xl={3} className={styles.getInTouchNavListContainer}>
                        <Link href="#">
                            <Typography variant="h5" className={styles.listItemHeading}>
                                Get in Touch
                            </Typography>
                        </Link>
                        <List>
                            <ListItem className={styles.listItem}>
                                <ListItemIcon classes={{ root: styles.listItemIconRoot }}>
                                    <FiberManualRecordIcon
                                        style={{ fill: '#b8374d', height: '6.5px', width: '6.5px' }}
                                    />
                                </ListItemIcon>
                                <Link href="#">
                                    <Typography className={styles.listItemText}>
                                        info@usmf.com
                                    </Typography>
                                </Link>
                            </ListItem>
                            <ListItem className={styles.listItem}>
                                <ListItemIcon classes={{ root: styles.listItemIconRoot }}>
                                    <FiberManualRecordIcon
                                        style={{ fill: '#b8374d', height: '6.5px', width: '6.5px' }}
                                    />
                                </ListItemIcon>
                                <Link href="#">
                                    <Typography className={styles.listItemText}>
                                        sales@usmf.com
                                    </Typography>
                                </Link>
                            </ListItem>
                        </List>
                        <Grid item className={styles.getInTouchNavListContainer}>
                            <Link href="#">
                                <Typography variant="h5" className={styles.listItemHeading}>
                                    Press
                                </Typography>
                            </Link>
                            <List>
                                <ListItem className={styles.listItem}>
                                    <ListItemIcon classes={{ root: styles.listItemIconRoot }}>
                                        <FiberManualRecordIcon
                                            style={{
                                                fill: '#b8374d',
                                                height: '6.5px',
                                                width: '6.5px'
                                            }}
                                        />
                                    </ListItemIcon>
                                    <Link href="#">
                                        <Typography className={styles.listItemText}>
                                            press@usmf.com
                                        </Typography>
                                    </Link>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} xl={4} className={styles.newsLetterContainer}>
                        <Typography variant="h5" className={styles.newsLetterHeading}>
                            Subscribe to Our Newsletter
                        </Typography>
                        <Typography className={styles.newsLetterParagraph}>
                            Subscribe To Newsletter To Stay Up To Date On Our Latest News
                        </Typography>
                        <form className={styles.searchWrapper}>
                            <input
                                className={styles.searchWrapperInput}
                                type="text"
                                placeholder="Email..."
                            />
                            <button className={styles.searchWrapperButton} type="submit">
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
                    className={styles.lowerFooterContainer}
                >
                    <Grid item>
                        <Typography className={styles.creditText}>
                            © 2021 usmf. All rights reserved.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={styles.lowerFooterLinks}>
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
