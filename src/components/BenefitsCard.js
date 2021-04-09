import React, { useState, useEffect} from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { CardContent, CardHeader, Typography } from '@material-ui/core';
import { primaryBackgroundColor, primaryColor } from '../Constants/DesignConstants';
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

const useStylesPrimary = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: primaryColor,
        color: primaryBackgroundColor,
        opacity: 0,
        alignContent: 'center',
        animationName: '$popUp',
        animationDuration: '.5s',
        animationDelay: 'calc(var(--animation-order) * 300ms)',
        animationEffect: 'ease-in',
        animationFillMode: 'forwards'
    },
    icon: {
        alignSelf: 'center'
    },
    points: {
        display: 'flex',
        flexDirection: 'row',
        margin: '2%'
    },
    '@keyframes popUp': {
        from: {transform: 'scale(0)', opacity: 0},
        to: {transform: 'scale(1)', opacity: 1}
    },
    hidden: {
        visibility: 'hidden'
    }
})

const useStylesInverse = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: primaryBackgroundColor,
        color: primaryColor,
        opacity: 0,
        alignContent: 'center',
        animationName: '$popUp',
        animationDuration: '.5s',
        animationDelay: 'calc(var(--animation-order) * 300ms)',
        animationEffect: 'ease-in',
        animationFillMode: 'forwards'
    },
    icon: {
        alignSelf: 'center'
    },
    points: {
        display: 'flex',
        flexDirection: 'row',
        margin: '2%'
    },
    '@keyframes popUp': {
        from: {transform: 'scale(0)', opacity: 0},
        to: {transform: 'scale(1)', opacity: 1}
    },
    hidden: {
        visibility: 'hidden'
    }
})


const BenefitsCard = ({icon, content, inverse, order }) => {
    const classesPrimary = useStylesPrimary()
    const classesInverse = useStylesInverse()
    const classes = inverse ? classesInverse : classesPrimary
    const [showCard, setShowCard] = useState(false)
    useEffect(()=> {
        document.addEventListener('scroll', () => {
            if(window.scrollY > 1100) setShowCard(true)
        })
    }, [])


    const renderContent = () => {
        return content.map( point => {
            return <div className={classes.points}>
            <CheckCircleIcon style={{marginRight: '3%'}} />
            <Typography>{point}</Typography>
            </div>
        })
    }

    return(
        <Card style={{'--animation-order': order}} className={showCard ? classes.root : classes.hidden}>
            <CardHeader className={classes.icon} avatar={icon} />
            <CardContent className={classes.content}>
                {renderContent()}
            </CardContent>
        </Card>
    )
}

export default BenefitsCard;