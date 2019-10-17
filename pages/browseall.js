import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Title from "./Dashboard/Title";
import Grid from "@material-ui/core/Grid";
import Appointments from "./Dashboard/Appointments";
import Deposits from "./Dashboard/Deposits";
import TestResults from "./Dashboard/TestResults";
import clsx from "clsx";
// import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 500,
    },
    imgHeight :{
        height: 50,
        width: 62,
        display: 'flex'
    },
    hdivider: {
        height: 4,
        margin: 4,
    },
}));

export default function CustomizedInputBase() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.root}>
                        <IconButton className={classes.iconButton} aria-label="menu">
                            <Title>Simul Search</Title>
                            <Divider className={classes.divider} orientation="vertical" />
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            className={classes.input}
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search google' }}
                        />
                        <Divider className={classes.divider} orientation="vertical" />
                        <IconButton className={classes.iconButton} aria-label="search">
                            <img src="http://www.gstatic.com/images/branding/googlemic/2x/googlemic_color_24dp.png" alt=""/>
                        </IconButton>
                        {/*<IconButton color="primary" className={classes.iconButton} aria-label="directions">*/}
                        {/*    <DirectionsIcon />*/}
                        {/*</IconButton>*/}
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper className={fixedHeightPaper}>
                        <img src="../assets/Googlesearch.jpg" alt="Google Search" className={classes.imgHeight}/>
                        <Title>Google Search</Title>
                        <Divider className={classes.hdivider} orientation="horizontal" />
                        <p> No results</p>
                    </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4}>
                    <Paper className={fixedHeightPaper}>
                        <img src="../assets/Yahoosearch.png" alt="Yahoo Search" className={classes.imgHeight}/>
                        <Title>Yahoo Search</Title>
                        <Divider className={classes.hdivider} orientation="horizontal" />
                        <p> No results </p>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper className={fixedHeightPaper}>
                        <img src="../assets/Bingsearch.svg" alt="Bing search" className={classes.imgHeight}/>
                        <Title>Bing Search</Title>
                        <Divider className={classes.hdivider} orientation="horizontal" />
                        <p> No results</p>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
