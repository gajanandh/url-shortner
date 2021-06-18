import React,{FC,useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import Nav from '../components/nav'
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'
const useStyles =  makeStyles((theme)=>({
    error:{
        display:"flex",
        alignItems:"center",
        flexDirection:"column"
    },
    typography:{
        margin:"100px auto",
        fontSize:'50px',

        [theme.breakpoints.down('sm')]: {
            margin:"100px auto",
            fontSize:'30px'
        },
    },
    link:{
        color:'white',
        background:"#3f51b5",
        textDecoration:"none",
        padding:"10px 20px"
    }
  }))

const Redirect:FC = (props:any) => {
    const classes = useStyles()
    const [urlFound,setUrlFound]= useState<boolean>(true)

    useEffect(() => {
        const getUrl  = async ()=>{
            try{
              const res =  await fetch(`http://localhost:8000/api/${props.match.params.id}`)
              const data = await res.json()              
              window.location.href =data.full
            }catch(err){
                setUrlFound(false)
                throw(err)
            }    
        }
        getUrl()

    }, [props])


return (
        !urlFound?(
            <div >
            <Nav/>
            <div className={classes.error}>
                <Typography className ={classes.typography} variant = 'h1'>URL not found</Typography>
                <Link className={classes.link} to = '/'>Return to home</Link>
            </div>

            </div>
        ):null
    )
}

export default Redirect
