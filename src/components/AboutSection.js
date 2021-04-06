import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';


const useStyles = makeStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: '60vw 40vw',
    },
    about: {
        backgroundColor: '#202020',
        color: '#e2d086',
    },
    listCont: {
        backgroundColor: '#e2d086',
        color: '#202020',
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

    // Our Dry Freight Division operates in 11 western states, so home is always just a day or two away. Our Refrigerated
//  Division operates longer routes throughout the contiguous 48 states. At May Trucking Company, drivers choose their
//  own division. We provide the job that best fits our drivers' lifestyle.

// Werner drivers and customers are faced with daily challenges that require best-in-class operations, innovation and talent.
//  Our strength is fueled by our ability to meet these challenges head-on, offering a comprehensive portfolio at a global scale,
//  while also delivering on award winning customer service, technology and innovation. It’s Werner’s strength in transportation 
// and logistics that strengthens the business of our customers.


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
                    <li>Local & Regional Delivery</li>
                </Slide>
            </ul>
            </div>

        </div>
    )
}

export default AboutSection;


// great customer service 
// 24hr dispatch
// top of the line broker carrier relations




// May Trucking Company has the most skilled and dedicated team of professional drivers on the road. With the stability
//  of over 75 years in business, our drivers are our most valued assets and the reason for our growth and success.

// May Trucking Company is committed to improving the quality of life for our drivers and their families by providing
//  the best equipment, superior pay, high-quality benefits, and ensuring efficient operations and load planning that allow
//  them to maximize their home life without sacrificing safety or income.

// Our Dry Freight Division operates in 11 western states, so home is always just a day or two away. Our Refrigerated
//  Division operates longer routes throughout the contiguous 48 states. At May Trucking Company, drivers choose their
//  own division. We provide the job that best fits our drivers' lifestyle.

// Werner drivers and customers are faced with daily challenges that require best-in-class operations, innovation and talent.
//  Our strength is fueled by our ability to meet these challenges head-on, offering a comprehensive portfolio at a global scale,
//  while also delivering on award winning customer service, technology and innovation. It’s Werner’s strength in transportation 
// and logistics that strengthens the business of our customers.

// Behind the scenes, the finest staff of customer service, logistics, driver managers, maintenance, and human resource
//  professionals in the industry supports our drivers. We never forget that May Trucking Company's success depends on our drivers' success.
