import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import { useHistory, useLocation } from 'react-router-dom'





const useStyles1 = makeStyles(() => ({
  root: {
    // background: "linear-gradient(180deg, rgba(32,32,32,1) 70%, rgba(255,209,0,1) 99%)"
    background: 'linear-gradient(0deg, rgba(226,208,134,1) 0%, rgba(88,83,62,1) 21%, rgba(32,32,32,1) 45%)'
  },
  logo: {
    color: '#e2d086',
    fontFamily: 'auto',
    cursor: 'pointer',
    flexGrow: 1
  },
  text: {
    color: '#e2d086',
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
    cursor: 'pointer'
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
  const history = useHistory()
  const { pathname } = useLocation()

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if(window.scrollY > 633 || pathname === '/apply'){
        setTransparent(false)
      } else { 
        setTransparent(true)
      }
    })
  }, [pathname])


  const handleRouteChange = () => {
    history.push('/apply')
    setTransparent(false)
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={transparent ? classes2.root : classes1.root}>
          <Toolbar>
          <Typography onClick={() => history.push('/')} className={transparent ? classes2.logo : classes1.logo} variant="h6">Elite Transportation</Typography>
          <Button onClick={handleRouteChange} className={transparent ? classes2.text : classes1.text}>Apply Today</Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}

export default NavBar