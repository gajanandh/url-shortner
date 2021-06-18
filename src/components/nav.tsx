import React,{useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Box} from "@material-ui/core";
import { Typography,AppBar,Toolbar,IconButton} from '@material-ui/core'
import Brightness4Icon from '@material-ui/icons/Brightness4';
import {themeContext} from '../context/pageTheme.context'

const useStyles =  makeStyles((theme)=>{
    return ({
        nav:{
            display:"flex",
            justifyContent:"space-between",
            width:"100%",
            padding:'0px',
        },   
        h1:{
            display:"block",
            color:theme.palette.common.white,
            margin:theme.spacing(2),
            [theme.breakpoints.down('sm')]: {
                margin:'0px'
            },
        },
        logo:{
            display:"block",
            color:theme.palette.common.white,
            margin:theme.spacing(2),
            
        },
        a:{
            color:"red",
            textDecoration:"none"
        },
        box:{
            display:"flex",
            flexdirection:"column"
        }
      
})})

function Nav() {
    const {theme,setTheme} = useContext(themeContext)

     const handleThemeChange = () =>{
         if (theme === 'dark'){
             setTheme('light')
         }
         else(
             setTheme('dark')
         )
     }
    const classes  = useStyles()
    return (
             
                <AppBar  color= "primary" position="static">
                    <Toolbar className={classes.nav}>
                        <Typography className = {classes.logo} variant="h5" >Short Url</Typography> 
                        <Box className= {classes.box}>  
                        <IconButton onClick={handleThemeChange} className = {classes.h1}  edge="start" color="inherit" aria-label="menu">
                        <Brightness4Icon/>
                        </IconButton>                   
                        <IconButton  className = {classes.h1}  href ="https://github.com/gajanandh/url-shortner.git" edge="start" color="inherit" aria-label="menu">
                        &lt;/&gt;
                        </IconButton>
  
                        </Box> 
                    </Toolbar>
                </AppBar>
            
    )
}

export default Nav
