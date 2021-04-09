import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import HalfLogo from '../assets/imgs/half-logo.png'
import Button from '@material-ui/core/Button';
import BenefitsCard from './BenefitsCard'
import { AttachMoney, LocalShipping, Pets, WbSunny, EventAvailable } from '@material-ui/icons';
import { secondaryColor, secondaryBackgroundColor, primaryColor, primaryBackgroundColor } from '../Constants/DesignConstants'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles({
    root: {
        backgroundImage: `url(${HalfLogo})`,
        backgroundSize: 'auto 50%',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '100vw',
        backgroundPositionY: '100vh',
        backgroundColor: secondaryColor,
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        fontSize: '4em',
        color: secondaryBackgroundColor,
        marginLeft: '5%',
    },
    subHeader: {
        fontSize: '2em',
        marginLeft: '10%',
        marginBottom: '4%',
        fontWeight: '600'
    },
    cardCont: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(20rem, 1fr))',
        gridTemplateRows: 'auto',
        gap: '1rem',
        marginBottom: '6%',
        height: 'minmax(20vh, auto)',
        marginLeft: '5%',
        marginRight: '5%'
    },
    button: {
        justifySelf: 'center',
        alignSelf: 'center', 
        backgroundColor: secondaryBackgroundColor,
        alignSelf: 'center',
        width: '20rem',
        fontSize: '3em',
        color: secondaryColor,
        marginBottom: '7%',
        '& :hover': {
            backgroundColor: primaryBackgroundColor,
            borderColor: primaryBackgroundColor,
            color: primaryColor
        }
    },
    ['@media (max-width: 950px)'] : {
        header: {
            fontSize: '3em'
        }
    },
    ['@media (max-width: 750px)'] : {
        header: {
            fontSize: '2.5em'
        }
    },
    ['@media (max-width: 600px)'] : {
        header: {
            fontSize: '2.3em',
            marginRight: '6%',
            textAlign: 'center'
        },
        subHeader: {
            textAlign: 'center',
            marginRight: '6%'
        }
    }
})

// this is the list of benefits that are offered, each benefit has an array of points, and an icon attached
const benefits = [
    {
        content: [
            '3000 miles average per week',
            '$1950 Average per week',
            '$0.70 CPM for start',
            'Detention, and Layover pay',
            'Safety Bonus Included'
        ],
        icon: <AttachMoney style={{fontSize: 50}} />
    },
    {
        content: [
            'Paid Vacation',
            'Earn Vacation time on first day of work'
        ],
        icon: <WbSunny style={{fontSize: 50}} />
    },
    {
        content: [
            'Pet Friendly'
        ],
        icon: <Pets style={{fontSize: 50}} />
    },
    {
        content: [
            "Drivers don't touch the freight",
            'No escrow',
            'Friendly dispatch',
            'Rider policy'
        ],
        icon: <LocalShipping style={{fontSize: 50}}/>
    },
    {
        content: [
            'No forced dispatch',
            'Flexible scheduling',
            'Work from home time'
        ],
        icon: <EventAvailable style={{fontSize: 50}} />
    }
]
const CareersSection = () => {
    const classes = useStyles()
    const history = useHistory()
    
    const renderBenefitCards = () => {
        return benefits.map((benefit, i) => {
            // inverse sets the style of each benefit card, from being normal styling to the inverse of colors 
            let inverse = i % 2 === 0 ? true : false
           return <BenefitsCard icon={benefit.icon} content={benefit.content} inverse={inverse} secondaryColor={secondaryColor} order={i} />
        })
    }

    return(
        <div className={classes.root}>
            <h1 className={classes.header}>Careers at Elite Transportation Inc.</h1>
            <Typography className={classes.subHeader}>The benefits we offer:</Typography>
                <div className={classes.cardCont}>
                    {renderBenefitCards()}
                </div>
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
// f [char] jumps to characer
// t is the other version
// c t [char] highilight from one place and delete to that character
// c f [char] probably the one you wanna use to highilight and delete things