import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Logo from '../assets/imgs/elite-trans-logo.png'
import { primaryBackgroundColor } from '../Constants/DesignConstants'

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
        '& label': {
            color: primaryBackgroundColor
        },
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
    const classes = useStyles()
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [CDLClass, setCDLCLass] = useState('')
    const [CDLNumber, setCDLNumber] = useState('')
    const [age, setAge] = useState('')
    const [experience, setExperience] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [position, setPosition] = useState('')
    useEffect(() => {
        document.body.style.backgroundColor = '#e2d086'
        return () => document.body.style.backgroundColor = '#fafafa'
    })

    const handleInput = (e) => {
        switch(e.target.name){
            case 'fname':
                setFname(e.target.value)
                break;
            case 'lname':
                setLname(e.target.value)
                break;
            case 'CDLClass':
                setCDLCLass(e.target.value)
                break;
            case 'CDLNumber':
                setCDLNumber(e.target.value)
                break;
            case 'age':
                setAge(e.target.value)
                break;
            case 'experience':
                setExperience(e.target.value)
                break;
            case 'city':
                setCity(e.target.value)
                break;
            case 'state':
                setState(e.target.value)
                break;
            case 'position':
                setPosition(e.target.value)
                break;
            default:
                return
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return(
        <div className={classes.root}>
            <h1>Apply today</h1>
            <Paper className={classes.formCont}>
                <form className={classes.form}>
                    <TextField onChange={handleInput} name='fname' value={fname} variant='outlined' label='First name'/>
                    <TextField onChange={handleInput} name='lname' value={lname} variant='outlined' label='Last name'/>
                    <TextField onChange={handleInput} name='CDLClass'  value={CDLClass} variant='outlined' label='CDL class'/>
                    <TextField onChange={handleInput} name='CDLNumber' value={CDLNumber} variant='outlined' label='CDL Number'/>
                    <TextField onChange={handleInput} name='age' value={age} variant='outlined' type='number' label='Age'/>
                    <TextField onChange={handleInput} name='experience' value={experience} variant='outlined' type='number' label='Years of Experience'/>
                    <TextField onChange={handleInput} name='city'  value={city} variant='outlined' label='City'/>
                    <TextField onChange={handleInput} name='state' value={state}  variant='outlined' label='State'/>
                    <TextField onChange={handleInput} name='position' value={position} className={classes.position} variant='outlined' label='Position' helperText='i.e company driver, owner operator'/>
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

