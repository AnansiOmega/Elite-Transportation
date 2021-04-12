import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import HeroImage from '../assets/imgs/UnitedStatesPhoto.jpeg'
import { primaryBackgroundColor, primaryColor } from '../Constants/DesignConstants';
import Elite from '../assets/Elite'




const useStyles = makeStyles({
    root: {
        height: '93vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
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
        fontSize: '5em',
        fontFamily: 'system-ui',
        '-webkit-text-stroke-color': 'black',
        '-webkit-text-stroke-width': '3px',
        opacity: '.9',
        color: '#bb923a',
        ['@media (max-width: 1240px)'] : {
            fontSize: '6em'
        },
        ['@media (max-width: 930px)'] : {
            fontSize: '4em'
        },
        ['@media (max-width: 500px)'] : {
            fontSize: '2em',
            '-webkit-text-stroke-width': '1px'
        },
    },
    subHeader: {
        fontFamily: 'serif',
        marginLeft: '5%'
    },
    modal: {
        justifySelf: 'flex-start'
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
                    TRANSPORTATION INC.
                </h1>
            {/* <Slide direction='right' in={true} mountOnEnter timeout={1000}>
                <h2 className={classes.subHeader}>Providing top of the line services to our partners, and employees</h2>
            </Slide> */}
            </div>
        </>
    )
}

export default HeroSection;


// dont pay for equipment
// no benefits
// family owned !!!
