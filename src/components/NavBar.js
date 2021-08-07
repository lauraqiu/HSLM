import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {useStyles} from '../styles/NavBarClasses.js';
import instagramIcon from '../images/icons8-instagram 1.png';
import twitterIcon from '../images/icons8-twitter 1 (1).png';
import logo from '../images/hslm 1.png';
import { Link } from "react-router-dom";

const NavBar = (props) => {
    const classes = useStyles();
    
    // update route when rest of the pages are completed
    const NavOptions = [
        {label: 'Home', route:'/home'},
        {label: 'Quizzes', route:'/quiz'},
        {label: 'Adventure', route:'/adventure'},
        {label: 'Videos', route:'/home'},
        {label: 'Contact Us!', route:'/contactform'}
        ]

    return (
        <div container className={classes.root}> 
            <Grid justify='center' container className={classes.logoContainer}>
                <img src={logo} alt='logo'/>
            </Grid>
            <Grid className={classes.buttonContainer} container item>
                {NavOptions.map((data) => {
                    return (
                        <Link to={data.route} className={classes.link}>
                            <Button item className={classes.button}> 
                            {data.label}
                            </Button>
                        </Link>
                    );
                })}
            </Grid>
            <Grid justify='center' container className={classes.iconsContainer}> 
                <img item className={classes.instagramIcon} src={instagramIcon} alt='Instagram Icon'/>
                <img item className={classes.twitterIcon} src={twitterIcon} alt='Twitter Icon'/>
            </Grid>
        </div>
    )
}
export default NavBar;