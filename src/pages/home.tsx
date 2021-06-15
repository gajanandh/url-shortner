import QRcode from 'qrcode.react'
import {makeStyles} from '@material-ui/core/styles';
import React ,{useState,FC}from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Button,Link,Typography,Paper} from '@material-ui/core';

import Tooltip from "@material-ui/core/Tooltip";
import FileCopyIcon from "@material-ui/icons/FileCopy";

import Nav from '../components/nav'
import Form from '../components/form'

const useStyles =  makeStyles({

    shorturl:{
      
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin:20
    },
    shorturllink:{

      display: "flex",
      margin: '10px'
  },
  copytoclipboard:{
    margin:" 0px 10px"
  },
  button:{
    padding:"0px 8px"
  },
  error:{
    textAlign:'center',
    color:'red'
  },
  paper:{
    background:"rgb(200, 212, 212)",
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    flexDirection:"row",
    padding:"20px"
  }
    
  })

const Home:FC = () => {
  const [shorturl,setShorturl] = useState<string>('')
  const [err,setErr] = useState<string|null>()
  const [copied,setCopied] = useState<boolean>()
  const  classes = useStyles()


    const setshorturlfunc = (url:string)=>{
      setShorturl(url)
    }
    const seterrfunc = (msg:string)=>{
      setErr(msg)
    }

    return (
      
        <div className = "App">
          <Nav></Nav>
          <Form setshorturlfunc = {setshorturlfunc} seterrfunc = {seterrfunc}/>
          {err? <div className = {classes.error}><Typography variant='h4'>Please Try again</Typography></div>:null}
          {shorturl?
          <div className={classes.shorturl} id="shorturl">
            <div className={classes.shorturllink}>
              <Paper className= {classes.paper} elevation={5}  variant="elevation">
                <div><Link href={shorturl}>{shorturl}</Link></div>
                <Tooltip title={copied?"url copied!!":"click to copy"} leaveDelay={1000}>
  
                <div className = {classes.copytoclipboard}>
                  <CopyToClipboard  text={shorturl} onCopy={() => setCopied(true)}>
                      <Button className= {classes.button}><FileCopyIcon/></Button>
                  </CopyToClipboard>
                </div>  
              </Tooltip>
              </Paper>              
            </div>
            <QRcode value={shorturl} />
            
          </div>
          :null}
     </div>


    )
}

export default Home
