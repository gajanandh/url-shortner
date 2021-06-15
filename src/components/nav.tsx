import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GitHubIcon from "@material-ui/icons/GitHub";
import { Typography,AppBar,Toolbar,IconButton} from '@material-ui/core'

const useStyles =  makeStyles({
    nav:{
        display:"flex",
        justifyContent:"space-between",
        width:"100%",

    },
    h1:{
        display:"block",
        color:"white",
        margin:"10PX 50px"
        
    },
    a:{
        color:"white",
        textDecoration:"none"
    }
  })

function Nav() {
    const classes  = useStyles()
    return (
             
                <AppBar  color= "primary" position="static">
                    <Toolbar className={classes.nav}>
                        <Typography variant="h5" >Short Url</Typography>                       
                        <IconButton  className = {classes.h1} href ="https://github.com" edge="start" color="inherit" aria-label="menu">
                        <GitHubIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            
    )
}

export default Nav
