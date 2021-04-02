import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import HalfLogo from '../assets/imgs/half-logo.png'
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    root: {
        backgroundImage: `url(${HalfLogo})`,
        backgroundSize: 'auto 50%',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '100%',
        backgroundPositionY: '100%',
        marginLeft: '5%',
    },
    header: {
        fontSize: '4em',
        color: '#bb923a'
    },
    button: {
        justifySelf: 'center',
        backgroundColor: '#FFD100',
        width: 'fit-content',
        alignSelf: 'center'
    }

})
const CareersSection = () => {
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <h1 className={classes.header}>Careers at Elite Transportation Inc.</h1>
            <h2>We are open to hiring Entry Level Drivers ( with at least one years worth of experience )</h2>
            <h3>What you'll get:</h3>
            <ul>
                <li>Competitive Pay</li>
                <li>No Forced Dispatch</li>
                <li>We will work around your home time</li>
            </ul>
            <Button className={classes.button}>Apply Now</Button>
        </div>
    )
}

export default CareersSection;

// open to entry level drivers ( 1 years experience)
// competitive pay
// work around home time
// no forced dispatch 
// something like, "we are a growing company, elite transportation has the best customer ser"
