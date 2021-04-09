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
        color: primaryBackgroundColor
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
        fontWeight: '500',
        '& li': { animation: '$popUp 1s ease-in', opacity: 0, animationFillMode: 'forwards'},
        '& li:nth-child(1)': {animationDelay: '.5s'},
        '& li:nth-child(2)': {animationDelay: '1s'},
        '& li:nth-child(3)': {animationDelay: '1.5s'},
        '& li:nth-child(4)': {animationDelay: '2s'},
        '& li:nth-child(5)': {animationDelay: '2.5s'},
        '& li:nth-child(6)': {animationDelay: '3s'},
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
    },
    '@keyframes popUp': {
        from: {transform: 'translateX(10%)', opacity: 0},
        to: {transform: 'translateX(0%)', opacity: 1}
    },
    hidden: {
        visibility: 'hidden'
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
            <ul className={showSubHeaders ? classes.list : classes.hidden}>
                    <li>Customer Service is at the forefront of our business</li>
                    <li>We strive for top of the line broker carrier relations</li>
                    <li>24hr dispatch</li>
                    <li>On Demand Services</li>
                    <li>O.T.R (We deliver to 48 states)</li>
                    <li>Long, dependable miles, adding consistency and reliabiilty to your paycheck</li>
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


