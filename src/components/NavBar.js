import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import MenuItem from '@material-ui/core/MenuItem';




const useStyles = makeStyles((theme) => ({
  root: {
    // flexDirection: 'row',
  },
  applyButton: {
    // justifySelf: 'flex-end'
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
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.root}>
          <Toolbar>
            <Typography variant="h6">Elite Transportation</Typography>
            <MenuItem>
            <Button className={classes.applyButton}>Apply Today</Button>
            </MenuItem>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}

export default NavBar