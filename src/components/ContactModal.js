import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Button from '@material-ui/core/Button';
import { TextareaAutosize, Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { primaryBackgroundColor, primaryColor, secondaryColor } from '../Constants/DesignConstants'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
    root: {
        justifySelf: 'center',
        alignSelf: 'center'
    },
    button: {
        backgroundColor: primaryColor,
        width: 'fit-content',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: '30vw',
        height: '50vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '.3fr .2fr .5fr .2fr',
        gap: '1rem',
        padding: '2%',
        background: 'linear-gradient(0deg, rgba(226,208,134,1) 76%, rgba(32,32,32,1) 76%)',
        // "Contact us."
        '& p': {
        gridColumnStart: '1',
        gridColumnEnd: '3',
        fontSize: '5em',
        alignSelf: 'end',
        color: primaryColor,
        fontFamily: 'auto'
        },
        // Name input
        '& div:nth-child(2)': {
        gridColumnStart: '1',
        gridColumnEnd: '1',
        gridRowStart: '2',
        gridRowEnd: '2',
        alignSelf: 'end',
        width: '100%',
        backgroundColor: secondaryColor
        },
        // Email input
        '& div:nth-child(3)': {
        gridColumnStart: '2',
        gridColumnEnd: '2',
        gridRowStart: '2',
        gridRowEnd: '2',
        alignSelf: 'end',
        width: '100%',
        backgroundColor: secondaryColor
        },
        // Send message input
        '& textarea': {
        gridColumnStart: '1',
        gridColumnEnd: '3',
        gridRowStart: '3',
        gridRowEnd: '3',
        height: '100% !important',
        borderColor: primaryBackgroundColor,
        fontFamily: 'inherit',
        fontSize: '2em',
        backgroundColor: secondaryColor,
        color: primaryBackgroundColor,
        borderRadius: '4px'
        },
        // Send button
        '& button': {
        gridColumnStart: '1',
        gridColumnEnd: '3',
        gridRowStart: '4',
        gridRowEnd: '4',
        width: '6rem',
        height: '3.3rem',
        alignSelf: 'center',
        justifySelf: 'center',
        fontSize: '1.5em',
        color: primaryColor,
        backgroundColor: primaryBackgroundColor
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: primaryBackgroundColor,
                color: primaryBackgroundColor
            } 
        },

        //breakpoints for different device widths
        ['@media (max-width: 1350px)'] : {
            width: '50vw'
        },

        ['@media (max-width: 1000px)'] : {
            width: '70vw'
        },
        ['@media (max-width: 600px)'] : {
            width: '90vw',
            height: '80vh',
            '& button': {
                fontSize: '1em',
                width: '9rem',
                height: '3rem',
            }
        },
    },
})
const ContactModal = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    return(
        <div className={classes.root}>
            <Button className={classes.button} onClick={() => setOpen(true)}>Contact Us</Button>
            <Modal
            open={open}
            onClose={() => setOpen(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
            className={classes.modal}
            >
                <Fade in={open}>
                    <Paper aria-label='form' className={classes.container}>
                        <Typography>Contact us.</Typography>
                            <TextField variant='outlined' label='Name'/>
                            <TextField variant='outlined' label='Email'/>
                            <TextareaAutosize rowsMax={4} aria-label='leave a message here' placeholder='Send message...' aria-label='message' />
                            <Button onClick={() => setOpen(false)}>Send</Button>
                    </Paper>
                </Fade>
            </Modal>
        </div>
    )
}

export default ContactModal;


// try: blog posts, work, or just stuff on their linked in profile. 
// pitch what i liked on those projects, and ask questions. Aka 
// hey I saw this project on your profile, how did you do that 
// ask for a resource, or feedback on something
// dont take a note, 'identify, follow, engage ^, connect' 
