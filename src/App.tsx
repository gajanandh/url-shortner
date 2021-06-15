import React from 'react';
import { Switch,BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Home from "./pages/home"
import Redirect from "./pages/redirect"




const App =()=> {



  return (
    <BrowserRouter>
      <Switch>
        <Route path = '/' exact component ={Home}/>
        <Route path = '/:id' exact component ={Redirect}>
        </Route>
      </Switch>
    </BrowserRouter>


  );
}

export default App;
