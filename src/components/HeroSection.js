import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import HeroImage from '../assets/imgs/UnitedStatesPhoto.jpeg'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column'
    },
    background: {
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: 'cover',
        opacity: '.7',
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'multiply',
        backgroundColor: '#FFEE32',
        zIndex: '-1'
    },
    header: {
        textAlign: 'center',
        fontSize: '8em',
        borderTopStyle: 'solid',
        borderBottomStyle: 'solid',
        fontFamily: 'auto',
        backgroundColor: '#202020',
        opacity: '.9',
        color: '#FFD100'
    },
    subHeader: {
        fontFamily: 'serif',
        marginLeft: '5%'
    },
    button: {
        justifySelf: 'center',
        backgroundColor: '#FFD100',
        width: 'fit-content',
        alignSelf: 'center'
    }
})

const HeroSection = () => {
    const classes = useStyles()
    return(
        <>
            <div className={classes.background}></div>
            <div className={classes.root}>
                <h1 className={classes.header}>Elite Transportation</h1>
                {/* <h2 className={classes.subHeader}>Providing top of the line services to our partners, and employees</h2> */}
                <Button className={classes.button} variant='contained' size='large'>Contact Us</Button>
            </div>
        </>
    )
}

export default HeroSection;