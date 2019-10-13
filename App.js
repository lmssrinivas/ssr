import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Rating from '@material-ui/lab/Rating';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Schedule from './schedule';
import PersonIcon from '@material-ui/icons/Person';




function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                mdobbala websites
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
        ul: {
            margin: 0,
            padding: 0,
        },
        li: {
            listStyle: 'none',
        },
    },
    headerContact: {
        position: `absolute`,
        top: `calc(60px)`,
        // background: `#f24d5d`,
        background: `linear-gradient(180deg, #f24d5d 0%, #a1051d 100%)`,
        height: `50px`,
        width: `100%`,
        lineHeight: `50px`,
        textAlign: `center`,
        color: `#fff`,
        textTransform: 'upperCase',
        fontWeight: `400`,
        fontSize: `20px`,
        cursor: `pointer`
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor : `hsla(0,0%,100%,.9)`,
        boxShadow: `0 .5px 0 0 hsla(216,3%,66%,.5)`,
        position: `fixed`
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
        fontFamily: 'Mansalva',
        color: '#00d2dc'
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6)
    },
    insuranceContent: {
        padding: theme.spacing(8, 0, 6),
        backgroundColor: '#fbfaf8'
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
    customHeader : {
        backgroundColor: theme.palette.red,
        color: theme.palette.white
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    descriptionContainer : {
        height : 200
    },
    button: {
        margin: theme.spacing(1),
        background: `#339ec2`,
        padding: `8px 16px`,
        borderRadius: `20px`,
        opacity: `.9`,
        marginLeft: `100px`
    },
    onlineDoc : {
        height:200,
        width: 300
    },
    insuranceImg: {
        width: 140,
        height: 40
    },
    insuranceHeader: {
        color: '#6c57e5'
    },
    sectionHeader: {
        backgroundColor: '#fbfaf8'
    },
    doctorContainer: {
        marginTop: `20px`,
    }
}));

const tiers = [
    {
        title: 'Dr Deepthi Vadakattu',
        img:'/assets/Doctor_2557Dr._Deepthi_V_(KPHB)-Gynic.jpg',
        subheader: 'Gynecologist/Obstetrician',
        price: '8 Years',
        description: ['Dr. Deepthi Vadakattu is Obstetrician and Gynecologist in Ankura Hospital Kukatpally, Hyderabad and has an experience of 5 years in this field.'],
        buttonText: 'Schedule appointment',
        buttonVariant: 'outlined',
    },
    {
        title: 'Dr Kiran Kumar',
        img:'',
        subheader: 'Cardiologist',
        price: '10 Years',
        description: ['Dr. Kiran  Kumar is Cardiologist and Primary Care physican , Hyderabad and has an experience of 10 years in this field.'],
        buttonText: 'Schedule appointment',
        buttonVariant: 'outlined',
    }
];
const footers = [
    {
        title: 'Support',
        description: ['Help center', 'Contact us', 'Locations'],
    },
    {
        title: 'Culture',
        description: ['Reviews', 'Random feature', 'Team feature', 'Developer stuff'],
    },
    {
        title: 'Careers',
        description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
    },
];

export default function Pricing() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <div className={classes.headerContact} data-reactid="4">We will soon launch our Online Doctor service</div>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        <i className="fas fa-user-md"></i> Kukatpally Medical specialist (KMS)
                        <Button variant="contained" color="secondary" className={classes.button}> We are Hiring</Button>
                    </Typography>
                    <nav>
                        <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                            About
                        </Link>
                        <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                            Browse Doctors
                        </Link>
                        <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                            Services
                        </Link>
                    </nav>
                    <Button href="#" color="primary" variant="outlined" className={classes.link}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            {/* Hero unit */}
            <img src="assets/hero.jpg" alt="Hero image"/>
            <Container>
                <Grid container spacing={4} justify="space-evenly">
                    <Schedule/>
                </Grid>
            </Container>
            <Container maxWidth="xl" component="main" className={classes.insuranceContent}>
                <Typography className={classes.sectionHeaders} component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
                    Licensed, qualified doctors
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p">
                    Best Doctors in the kukatpally area, schedule a visit online/phone call. We will soon extend our Online Doctor services
                </Typography>
            </Container>
            {/* End hero unit */}
            <Container maxWidth="md" component="main" className={classes.doctorContainer}>
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map(tier => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={6}>
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center', variant: 'h5' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                                    className={classes.cardHeader}
                                    avatar={tier.img ? <Avatar alt="DR" src={tier.img} className={classes.bigAvatar} /> : <PersonIcon className={classes.bigAvatar}/>}
                                />
                                <CardContent>
                                    <div className={classes.cardPricing}>
                                        <Rating value={'4'} readOnly />
                                        <Typography component="h4" variant="h4" color="textPrimary">
                                            {tier.price}
                                        </Typography>
                                        <Typography variant="h6" color="textSecondary">
                                        </Typography>
                                    </div>
                                    <ul className={classes.descriptionContainer}>
                                        {tier.description.map(line => (
                                            <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
                    Online Doctor - How It Works
                </Typography>
                <Grid container xs={12}>
                    <Grid item md={6}>
                        <img  className={classes.onlineDoc} src="assets/online-doctor.jpg" alt="online doctor"/>
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="h5" align="center" color="textSecondary" component="p">
                            online hospital providing instant medical advice 24 hours/day and medical specialist video-consultions by appointment.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

            <Container maxWidth="xl" className={classes.insuranceContent}>
                <Grid container xs={12}>
                    <Grid item md={4}>
                        <Typography variant="h5" align="center" color="textSecondary" component="p" className={classes.insuranceHeader}>
                            Insurance may help with the cost
                        </Typography>
                    </Grid>
                    <Grid item md={2}>
                        <img  className={classes.insuranceImg} src="https://heal.com/uploads/2018/12/insurance-logo_pos_medicare_v2-2-e1568110376770.png" alt="insurance doctor"/>
                    </Grid>
                    <Grid item md={2}>
                        <img  className={classes.insuranceImg} src="https://heal.com/uploads/2017/01/insurance-logo_pos_health-net.png" alt="insurance doctor"/>
                    </Grid>
                    <Grid item md={2}>
                        <img  className={classes.insuranceImg} src="https://heal.com/uploads/2017/01/insurance-logo_pos_united-healthcare.png" alt="insurance doctor"/>
                    </Grid>
                    <Grid item md={2}>
                        <img  className={classes.insuranceImg} src="https://heal.com/uploads/2017/01/insurance-logo_pos_cigna.png" alt="insurance doctor"/>
                    </Grid>
                </Grid>
            </Container>
            {/* Footer */}
            <Container maxWidth="md" component="footer" className={classes.footer}>
                <Grid container justify="space-evenly">
                    {footers.map(footer => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant="h6" color="textPrimary" gutterBottom>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map(item => (
                                    <li key={item}>
                                        <Link href="#" variant="subtitle1" color="textSecondary">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
            {/* End footer */}
        </React.Fragment>
    );
}
