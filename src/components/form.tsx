import React ,{useState,FormEvent,ChangeEvent}from 'react';
import {TextField,Button} from '@material-ui/core';
import instance from '../api/api'
import {makeStyles} from '@material-ui/core/styles';

const useStyles =  makeStyles((theme)=>({

    button:{
      margin: theme.spacing(1)
    },
    inputelement:{
      width:"50%",

    },
    form:{
      display:"flex",
      alignItems:"center",
      flexDirection:"column",
      marginTop:"10vh"
    }
  }))


export default function Form (props:any) {
    const classes = useStyles()
    
    const [url,setUrl] = useState<string>("");
    
    const handleSubmit= (e: FormEvent<HTMLFormElement>):void =>{
        e.preventDefault()
        instance.post('/',{full:url})
        .then(res=>{
          props.setshorturlfunc('http://localhost:3000/'+res.data.short)
          setUrl("")
          props.seterrfunc("")
        })
        .catch(err=>{console.log(err)
        props.seterrfunc("please try again")})
      }
    
      const handleChange =(e:ChangeEvent<HTMLInputElement>):void=>{
      setUrl(e.target.value)
      }

    return (
        <div>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              className={classes.inputelement}
              autoFocus
              onChange = {handleChange}
              color="secondary"
              required
              type = 'url'
              id = "urlinput"
              label='URL'
              placeholder="https://xyz.com"
              value = {url}
            />
            <Button
            className={classes.button}
              type = "submit"
              size="large"
              variant = "contained"
              color = "primary"
            >
              Generate
            </Button>
          </form>
        </div>
    )
}


