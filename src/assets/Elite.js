import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as FirstE} from '../assets/imgs/First-E.svg'
import { ReactComponent as L} from '../assets/imgs/L.svg'
import { ReactComponent as I} from '../assets/imgs/I.svg'
import { ReactComponent as T} from '../assets/imgs/T.svg'
import { ReactComponent as LastE} from '../assets/imgs/Last-E.svg'

const useStyles = makeStyles({
    letters: {
        height: '15vh',
        width: 'auto',
        ['@media (max-width: 500px)'] : {
            height: '10vh',
            width: 'auto'
        },
    },
})

const Elite = () => {
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <FirstE className={classes.letters} />
            <L className={classes.letters} />
            <I className={classes.letters} />
            <T className={classes.letters} />
            <LastE className={classes.letters} />
        </div>
    )
}

export default Elite;