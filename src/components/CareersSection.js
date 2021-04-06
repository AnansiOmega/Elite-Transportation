import React from 'react'
import { useHistory } from 'react-router-dom'
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
        backgroundColor: '#f1e9c5',
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        fontSize: '4em',
        color: '#333533',
        marginLeft: '5%',
    },
    listHeader: {
        fontSize: '2.5em',
        marginLeft: '5%',
        marginTop: '2%',
        marginBottom: '1%',
        color: '#333533',
    },
    list: {
        fontSize: '1.4em',
        marginLeft: '5%',
        color: '#333533',
        fontWeight: '500'
    },
    button: {
        justifySelf: 'center',
        alignSelf: 'center', 
        backgroundColor: '#333533',
        width: 'fit-content',
        alignSelf: 'center',
        width: '7rem',
        color: '#e2d086'
    }

})
const CareersSection = () => {
    const classes = useStyles()
    const history = useHistory()
    return(
        <div className={classes.root}>
            <h1 className={classes.header}>Careers at Elite Transportation Inc.</h1>
            <h3>We are currently hiring!</h3>
            <h3 className={classes.listHeader}>Working with us gets you:</h3>
            <ul className={classes.list}>
                <li>Competitive Pay</li>
                <li>No Forced Dispatch</li>
                <li>We will work around your home time</li>
            </ul>
            <Button onClick={() => history.push('/apply')} size='large' className={classes.button}>Apply Now</Button>
        </div>
    )
}

export default CareersSection;

// open to entry level drivers ( 1 years experience)
// competitive pay
// work around home time
// no forced dispatch 
// something like, "we are a growing company, elite transportation has the best customer ser"




// iIaA - editing a line
// dd - deletes an entire liine
// eb - jump between words
// xr - making changges in command mode x will delete what your hovering over, and r will replace
// num + gg - jumps to specific line 
// u - will undo 
// yy - will copy a line
// p - will paste line
// C - will delete the rest of the line from where the cursor stands
// ciw - replace the entire word
// gg will go to top of the file
// G will go top the bottom of the file
// :tabp(revious)
// :tabn(ext)
// gb - will make multiple cursors