import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import MenuItem from '@material-ui/core/MenuItem';




const useStyles1 = makeStyles(() => ({
  root: {
    background: 'linear-gradient(180deg, rgba(255,255,255,1) 74%, rgba(255,209,0,1) 100%)',
  },
  logo: {
    color: '#202020',
    flexGrow: 1
  },
  text: {
    color: '#202020',
  }
}));

const useStyles2 = makeStyles(() => ({
  root: {
    background: 'transparent',
    boxShadow: '0 0 0 0',
  },
  logo: {
    flexGrow: 1,
    color: '#D6D6D6',
  },
  text: {
    color: '#D6D6D6',
  }
}));



function HideOnScroll(props) {
  const { children } = props;

  return (
    <Slide appear={false} direction="down" in={useScrollTrigger}>
      {children}
    </Slide>
  );
}



const NavBar = (props) => {
  const classes1 = useStyles1();
  const classes2 = useStyles2();
  const [transparent, setTransparent] = useState(true)
  useEffect(() => {
    document.addEventListener('scroll', () => {
      window.scrollY > 633 ? setTransparent(false) : setTransparent(true)
    })
})

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={transparent ? classes2.root : classes1.root}>
          <Toolbar>
          <Typography className={transparent? classes2.logo : classes1.logo} variant="h6">Elite Transportation</Typography>
          <Button className={transparent ? classes2.text : classes1.text}>Apply Today</Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}

export default NavBar