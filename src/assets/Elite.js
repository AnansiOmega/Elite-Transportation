import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as FirstE} from '../assets/imgs/First-E.svg'
import { ReactComponent as L} from '../assets/imgs/L.svg'
import { ReactComponent as I} from '../assets/imgs/I.svg'
import { ReactComponent as T} from '../assets/imgs/T.svg'
import { ReactComponent as LastE} from '../assets/imgs/Last-E.svg'

const useStyles = makeStyles({
    root: {
        height: '40vh',
        widht: '30vw'
    }
})

const Elite = () => {
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <FirstE />
            <L />
            <I />
            <T />
            <LastE />
        </div>
    )
}

export default Elite;