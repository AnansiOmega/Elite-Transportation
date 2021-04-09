import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import CareersSection from '../components/CareersSection'
import Footer from '../components/Footer'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
    }
})

const LandingPage = () => {
    const classes = useStyles()
    return(
        <div className={classes.root}>
        <HeroSection />
        <AboutSection />
        <CareersSection />
        <Footer />
        </div>
    )
}

export default LandingPage;