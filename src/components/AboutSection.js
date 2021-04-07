import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import { primaryColor, primaryBackgroundColor } from '../Constants/DesignConstants'


const useStyles = makeStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: '60vw 40vw',
    },
    about: {
        backgroundColor: primaryBackgroundColor,
        color: primaryColor,
    },
    listCont: {
        backgroundColor: primaryColor,
        color: primaryBackgroundColor,
    },
    listHeader: {
        fontSize: '2.5em',
        marginTop: '5%',
        marginLeft: '5%'
    },
    list: {
        fontSize: '1.4em',
        marginLeft: '5%',
        lineHeight: '2.5rem',
        fontWeight: '500'
    },
    header: {
        fontSize: '5em',
        marginLeft: '5%',
        marginBottom: '2%'
    },
    subHeader: {
        marginLeft: '5%',
        fontSize: '1.4em',
        marginRight: '4%'
    },
    content: {
        marginLeft: '10%',
        fontSize: '1.2em',
        marginRight: '4%',
        marginBottom: '15%',
        marginTop: '5%'
    }

})


const AboutSection = () => {
    const classes = useStyles()
    const [showHeaders, setShowHeaders] = useState(false)
    const [showSubHeaders, setShowSubHeaders] = useState(false)
    useEffect(()=> {
        document.addEventListener('scroll', () => {
            window.scrollY > 140 ? setShowHeaders(true) : setShowHeaders(false)
            window.scrollY > 238 ? setShowSubHeaders(true) : setShowSubHeaders(false)
        })
    })


    return(
        <div className={classes.root}>
            <div className={classes.about}>
            <Slide  direction='right' in={showHeaders} timeout={1000}>
                <h1 className={classes.header}>About us</h1>
            </Slide>
            <Slide  direction='right' in={showHeaders} timeout={1000}>
            <h3 className={classes.subHeader}>Our mission is to handle the logistics, so that you can focus on what's important to you.</h3>
            </Slide>
            <Slide  direction='right' in={showSubHeaders} timeout={2000}>
            <p className={classes.content}>Elite Transportation Inc. provides the Customer Service you'd expect out of a small business.
                We understand that our customers are the lifeline of the business. Therefore, we make sure
                to cater to any needs you may have.
            </p>
            </Slide>
            </div>
            <div className={classes.listCont}>
            <Slide  direction='right' in={showHeaders} mountOnEnter unmountOnExit timeout={1000}>
            <h3 className={classes.listHeader}>What We Offer:</h3>
            </Slide>
            <ul className={classes.list}>
                <Slide  direction='left' in={showHeaders} mountOnEnter unmountOnExit timeout={2000}>
                    <li>Customer Service is at the forefront of our business</li>
                </Slide>
                <Slide  direction='left' in={showHeaders} mountOnEnter unmountOnExit timeout={3000}>
                    <li>We strive for top of the line broker carrier relations</li>
                </Slide>
                <Slide  direction='left' in={showHeaders} mountOnEnter unmountOnExit timeout={4000}>
                    <li>24hr dispatch</li>
                </Slide>
                <Slide  direction='left' in={showHeaders} mountOnEnter unmountOnExit timeout={5000}>
                    <li>On Demand Services</li>
                </Slide>
                <Slide  direction='left' in={showHeaders} mountOnEnter unmountOnExit timeout={6000}>
                    <li>O.T.R (We deliver to 48 states)</li>
                </Slide>
                <Slide  direction='left' in={showHeaders} mountOnEnter unmountOnExit timeout={6000}>
                    <li>Long, dependable miles, adding consistency and reliabiilty to your paycheck</li>
                </Slide>
            </ul>
            </div>
        </div>
    )
}

export default AboutSection;


// dont do regional
// great customer service 
// 24hr dispatch
// top of the line broker carrier relations


