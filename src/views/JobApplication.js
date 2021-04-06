import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Logo from '../assets/imgs/elite-trans-logo.png'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundPositionY: '100%',
        backgroundPositionX: '50%',
        color: '#202020',
        alignItems: 'center',
        backgroundImage: `url(${Logo})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        opacity: '.8'
    }, 
    formCont: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50rem',
        height: '60vh',
        backgroundColor: '#f1e9c5',
    },
    form: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        width: '40rem',
        '& label.Mui-focused': {
            color: '#202020'
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#e2d086',
                color: '#e2d086'
        }
    }

    },
    position: {
        gridColumnStart: '1',
        gridColumnEnd: '3'
    },
    button: {
        gridColumnStart: '1',
        gridColumnEnd: '3'
    }

})

const JobApplication = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#e2d086'
        return () => document.body.style.backgroundColor = '#fafafa'
    })

    const classes = useStyles()

    const handleSubmit = () => {

    }
    return(
        <div className={classes.root}>
            <h1>Apply today</h1>
            <Paper className={classes.formCont}>
                <form className={classes.form}>
                    <TextField variant='outlined' label='First name'/>
                    <TextField variant='outlined' label='Last name'/>
                    <TextField variant='outlined' label='CDL class'/>
                    <TextField variant='outlined' label='CDL Number'/>
                    <TextField variant='outlined' type='number' label='Age'/>
                    <TextField variant='outlined' type='number' label='Years of Experience'/>
                    <TextField variant='outlined' label='City'/>
                    <TextField variant='outlined' label='State'/>
                    <TextField className={classes.position} variant='outlined' label='Position' helperText='i.e company driver, owner operator'/>
                    <Button className={classes.button} onClick={handleSubmit}>Submit</Button>
                </form>
            </Paper>
        </div>
    )
}

export default JobApplication;


// make application form:
// fname lname
// CDL Class
// CDL number
// age
// years of experience
// City and state 
// what is your position? VV
// company driver or owner operator

