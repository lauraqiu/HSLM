import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import NavBar from '../components/NavBar.js';
import { useStyles } from '../styles/ContactFormClass';
 

const ContactForm = () => {

    const classes = useStyles();

    return (
    <div className={classes.root}>
        <NavBar/>
    <div className={classes.body}>
        <div className={classes.container}>
            <h1 className={classes.brand}><span className={classes.brandSpan}>HSLM's &nbsp;</span>Pet Club</h1>
            <div className={classes.wrapper}>      
                <div className={classes.companyInfo}>
                    <h3 className={classes.companyInfoH3}>Humane Society <br/>London and Middlesex</h3>
                    <ul className ={classes.companyInfoUl}>
                        <li className={classes.li}>624 Clarke Road<br/>London, ON, N5V 3K5</li>
                        <li className={classes.li}>(519) 451-0630</li>
                        <li className={classes.li}>administration@hslm.ca</li>
                    </ul>
                </div>
                <div className={classes.contact}>
                    <h3 className={classes.contactH3}>Contact Us</h3>
                    <div className={classes.alert}>Your message has been sent</div>
                        <form id={classes.contactForm}>
                            <Grid className={classes.grid}>
                                <li className={classes.contactFormP}>
                                    <label className={classes.contactFormLabel}>First Name</label>
                                    <input type="text" className={classes.contactFormInput1} id="firstName" required/>
                                </li>
                                <li className={classes.contactFormP}>
                                    <label className={classes.contactFormLabel}>Last Name</label>
                                    <input type="text" className={classes.contactFormInput1} id="lastName" required/>
                                </li>
                            </Grid>
                            <Grid className={classes.grid}>
                                <li className={classes.contactFormP}>
                                    <label className={classes.contactFormLabel}>Email Address</label>
                                    <input type="text" className={classes.contactFormInput1} id="email" required/>
                                </li>
                                <li className={classes.contactFormP}>
                                    <label className={classes.contactFormLabel}>Phone Number</label>
                                    <input type="text" className={classes.contactFormInput1} id="phone"/>
                                </li>
                            </Grid>
                            <Grid>
                                <li className={classes.contactFormFull}>
                                    <label className={classes.contactFormLabel1}>Message</label>
                                    <textarea className={classes.contactFormInput} rows="5" id="message" required></textarea>
                                </li>
                            </Grid>
                            <p className={classes.contactFormFull}>
                                <Button item variant='contained' className={classes.contactformButton} id="submit">Send Message</Button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ContactForm;

