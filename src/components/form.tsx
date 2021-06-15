import React ,{useState,FormEvent,ChangeEvent}from 'react';
import {TextField,Button} from '@material-ui/core';
import instance from '../api/api'
import {makeStyles} from '@material-ui/core/styles';

const useStyles =  makeStyles({

    button:{
      width: "20%", 
      margin: "10px"
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
  })


export default function Form (props:any) {
    const classes = useStyles()
    const [url,setUrl] = useState<string>("");
    
    console.log(props)
    const handleSubmit= (e: FormEvent<HTMLFormElement>):void =>{
        console.log(url)
        e.preventDefault()
        instance.post('/',{full:url})
        .then(res=>{
          props.setshorturlfunc('http://localhost:3000/'+res.data.short)
          setUrl("")
          console.log(res)
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
              size="small"
              variant = "contained"
              color = "primary"
            >
              Generate
            </Button>
          </form>
        </div>
    )
}


