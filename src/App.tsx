import React ,{useState,FC,FormEvent,ChangeEvent}from 'react';
import QRcode from 'qrcode.react'
import instance from './api/api'
import {makeStyles} from '@material-ui/core/styles';
import {TextField,Button} from '@material-ui/core';
import './App.css';



const useStyles =  makeStyles({
  root:{
    background:'blue'
  },
  shorturl:{
    display:"block",
    margin:20
  }
})
const App:FC =()=> {

  const [url,setUrl] = useState<string>("");
  const [shorturl,setShorturl] = useState<string>('')
  const classes = useStyles()

  const handleSubmit= (e: FormEvent<HTMLFormElement>):void =>{
    console.log(url)
    e.preventDefault()
    instance.post('/',{full:url})
    .then(res=>{
      setShorturl('http://localhost:8000/api/'+res.data.short)
      console.log(res)
    })
    .catch(err=>console.log(err))
    setUrl("")
  }

  const handleChange =(e:ChangeEvent<HTMLInputElement>):void=>{
  setUrl(e.target.value)
  // console.log(e.target.value)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <TextField
        autoFocus
        onChange = {handleChange}
        color="secondary"
        required
        id = "urlinput"
        label='URL'
        placeholder="https://xyz.com"
        value = {url}
        />
        <Button
          type = "submit"
          size="small"
          variant = "contained"
          color = "primary"
        >
          Generate
        </Button>

      </form>
      <div className={classes.shorturl} id="shorturl"><a href={shorturl}>{shorturl}</a></div>
      {shorturl?(<QRcode value={shorturl} />):null}
      
    </div>
  );
}

export default App;
