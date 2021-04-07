import React from 'react'
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
        alignContent: 'center',
    },
    icon: {
        alignSelf: 'center'
    },
    points: {
        display: 'flex',
        flexDirection: 'row',
        margin: '2%'
    }
})

const useStylesInverse = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: primaryBackgroundColor,
        color: primaryColor,
        alignContent: 'center',
    },
    icon: {
        alignSelf: 'center'
    },
    points: {
        display: 'flex',
        flexDirection: 'row',
        margin: '2%'
    }
})


const BenefitsCard = ({icon, content, inverse}) => {
    const classesPrimary = useStylesPrimary()
    const classesInverse = useStylesInverse()
    const classes = inverse ? classesInverse : classesPrimary

    const renderContent = () => {
        return content.map( point => {
            return <div className={classes.points}>
            <CheckCircleIcon style={{marginRight: '3%'}} />
            <Typography>{point}</Typography>
            </div>
        })
    }

    return(
        <Card className={classes.root}>
            <CardHeader className={classes.icon} avatar={icon} />
            <CardContent className={classes.content}>
                {renderContent()}
            </CardContent>
        </Card>
    )
}

export default BenefitsCard;