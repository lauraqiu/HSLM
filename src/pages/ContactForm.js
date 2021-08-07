import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import NavBar from '../components/NavBar.js';
import { useStyles } from '../styles/ContactFormClass';
import { db } from '../firebase';
import { useState } from "react";
 

const ContactForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("contacts")
        .add({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            message: message,
        })
        .then(() => {
            alert("Message has been submitted 👍");
            setLoader(false);
        })
        .catch((error) => {
            alert(error.message);
            setLoader(false);
        });

        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");

    };
 
    const classes = useStyles();
    return (
    <div className={classes.body}>
        <NavBar/>
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
                        <form className={classes.contactForm} onSubmit={handleSubmit}>
                            <Grid className={classes.grid}>
                                <li className={classes.contactFormP}>
                                    <label className={classes.contactFormLabel}>First Name</label>
                                    <input
                                    type="text"
                                    className={classes.contactFormInput1}
                                    id="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required/>
                                </li>
                                <li className={classes.contactFormP}>
                                    <label className={classes.contactFormLabel}>Last Name</label>
                                    <input
                                    type="text"
                                    className={classes.contactFormInput1}
                                    id="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required/>
                                </li>
                            </Grid>
                            <Grid className={classes.grid}>
                                <li className={classes.contactFormP}>
                                    <label className={classes.contactFormLabel}>Email Address</label>
                                    <input
                                    type="text"
                                    className={classes.contactFormInput1}
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required/>
                                </li>
                                <li className={classes.contactFormP}>
                                    <label className={classes.contactFormLabel}>Phone Number</label>
                                    <input
                                    type="text"
                                    className={classes.contactFormInput1}
                                    id="phone"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}/>
                                </li>
                            </Grid>
                            <Grid>
                                <li className={classes.contactFormFull}>
                                    <label className={classes.contactFormLabel1}>Message</label>
                                    <textarea
                                    className={classes.contactFormInput}
                                    rows="5"
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required></textarea>
                                </li>
                            </Grid>
                            <p className={classes.contactFormFull}>
                                <Button item 
                                variant='contained'
                                type='submit'
                                className={classes.contactformButton}
                                id="submit"
                                style= {{background: loader ? "#ccc" : "#FF5757" }}>Send Message</Button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;

