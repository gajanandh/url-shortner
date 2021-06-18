import React from 'react';
import { Switch,BrowserRouter, Route } from 'react-router-dom';
import Home from "./pages/home"
import Redirect from "./pages/redirect"
import { ThemeProvider,createMuiTheme } from '@material-ui/core';
import {CssBaseline  } from '@material-ui/core';

import { themeContext } from './context/pageTheme.context';
import { useContext } from 'react';



const App =()=> {
  const thememode = useContext(themeContext) 
  const theme = createMuiTheme({
    palette:{
      type:thememode.theme
    }
  });

  return (

    <BrowserRouter>
    <ThemeProvider theme ={theme}>
      <CssBaseline></CssBaseline>
      <Switch>
        <Route path = '/' exact component ={Home}/>
        <Route path = '/:id' exact component ={Redirect}>
        </Route>
      </Switch>
      
    </ThemeProvider>
    </BrowserRouter>


  );
}

export default App;
