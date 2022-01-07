import React, { useState } from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Tabs } from '@material-ui/core';
import { Tab } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';


function ElevationScroll(props) {
    const { children } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0, 
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const useStyles = makeStyles(themes =>({
    toolbarMargin :{
        //here using spread oprator to make toolbar items directly access to this class
        ...themes.mixins.toolbar,
        marginBottom:'3rem'
    },
    logo:{
        height:'7rem'
    },
    tabContainer:{
        marginLeft:'auto',
    },
    tabN:{
           ...themes.typography.tab,
            minWidth:20,
            marginLeft:'25px'

        },
    buttonB:{
        ...themes.typography.estimateButton,
        borderRadius: '50px',
        marginLeft:'50px',
        marginRight:'25px',
        height:'45px'
    }
  })
  )
  

export default function Header(props) {
    const classes = useStyles();
    const [value,setvalue] = useState(0);
    const handleChange = (e,value) =>{ setvalue(value)}
    return(
        <React.Fragment>
        <ElevationScroll>
        <AppBar color='primary'>
            <Toolbar disableGutters>
              <img src={logo} alt='logo' className={classes.logo}/>
              <Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor='primary'>
                  <Tab label='Home' className={classes.tabN} component ={Link} to="/welcome"  value="/welcome" />
                  <Tab label='Services' className={classes.tabN} component ={Link} to="/services"  value="/services" />
                  <Tab label='The Revolution' className={classes.tabN} component ={Link} to="/revolution" value="/revolution" />
                  <Tab label='About Us' className={classes.tabN} component ={Link} to="/about" value="/about"/>
                  <Tab label='Contact Us' className={classes.tabN} component ={Link} to="/contact" value="/contact" />
              </Tabs>
              <Button variant='contained' color='secondary' className={classes.buttonB}>Free Estimate</Button>
                </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}></div>
        </React.Fragment>
        
    );
}