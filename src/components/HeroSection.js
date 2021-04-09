import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import HeroImage from '../assets/imgs/UnitedStatesPhoto.jpeg'
import Button from '@material-ui/core/Button';
import { primaryBackgroundColor, primaryColor } from '../Constants/DesignConstants';
import ContactModal from '../components/ContactModal'
import Elite from '../assets/Elite'




const useStyles = makeStyles({
    root: {
        height: '93vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'end'
    },
    background: {
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'multiply',
        backgroundColor: '#FFEE32',
        opacity: '.7',
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '-1'
    },
    header: {
        textAlign: 'center',
        fontSize: '8em',
        // borderTopStyle: 'solid',
        // borderBottomStyle: 'solid',
        fontFamily: 'auto',
        // backgroundColor: primaryBackgroundColor,
        opacity: '.9',
        color: primaryColor,
        ['@media (max-width: 1240px)'] : {
            fontSize: '6em'
        },
        ['@media (max-width: 930px)'] : {
            fontSize: '4em'
        },
        ['@media (max-width: 500px)'] : {
            fontSize: '3em'
        },
    },
    subHeader: {
        fontFamily: 'serif',
        marginLeft: '5%'
    },
    ['@media (max-width: 600px)'] : {
        root: {
            height: '90vh'
        }
    },
})

const HeroSection = () => {
    const classes = useStyles()
    return(
        <>
            <div className={classes.background}></div>
            <div className={classes.root}>
                <h1 className={classes.header}>
                    <Elite />
                    Transportation Inc.
                </h1>
            {/* <Slide direction='right' in={true} mountOnEnter timeout={1000}>
                <h2 className={classes.subHeader}>Providing top of the line services to our partners, and employees</h2>
            </Slide> */}
            <ContactModal />
            </div>
        </>
    )
}

export default HeroSection;


// dont pay for equipment
// no benefits
// family owned !!!
