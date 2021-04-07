import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { primaryBackgroundColor, secondaryColor } from '../Constants/DesignConstants';
import Typography from '@material-ui/core/Typography'
import Logo from '../assets/imgs/elite-trans-logo.png'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        height: '25vh',
        backgroundColor: primaryBackgroundColor,
        color: secondaryColor,
        padding: '2%',
        overflow: 'hidden'
    },
    companyInfo: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: .9
    },
    header: {
        fontSize: '2em'
    },
    slogan: {
        marginLeft: '1%',
    },
    logo: {
        width: '13rem',
        height: 'auto'
    }
})


const Footer = () => {
const classes = useStyles()

    return(
        <div className={classes.root}>
            <div className={classes.companyInfo}>
            <Typography className={classes.header}>Elite Transportation Inc.</Typography>
            <Typography className={classes.slogan}>"Taking Care of Business"</Typography>
            <img className={classes.logo} src={Logo} />
            </div>
            <div>
                <Typography className={classes.header}>Contact:</Typography>
                <Typography>Dougaccino@elit-trans.com</Typography>
                <Typography>+1 630-706-0919</Typography>
            </div>
        </div>
    )
}


export default Footer;